import React, { useMemo } from 'react';
import { overlayForCondition, HAZE_OPACITY } from '../lib/weatherOverlay';
import './WeatherOverlay.css';

// Deterministic pseudo-random placement (index arithmetic, no Math.random)
// so the pattern is stable across re-renders instead of reshuffling. Every
// star here is static (fixed opacity, no animation) — a small separate set
// of dedicated twinkle stars (see generateTwinkleStars) handles the actual
// twinkling, since animating all of them read as constant flashing rather
// than the occasional shimmer of a real night sky.
function generateStarLayers(count, rgb) {
  const layers = [];
  for (let i = 0; i < count; i++) {
    const x = (i * 37 + (i % 7) * 11) % 100;
    const y = (i * 53 + (i % 5) * 17) % 100;
    const s = [4, 3, 2.5][i % 3];
    const op = 0.7 + ((i % 5) / 4) * 0.3;
    layers.push(`radial-gradient(${s}px ${s}px at ${x}% ${y}%, rgba(${rgb},${op.toFixed(2)}), transparent 70%)`);
  }
  return layers.join(',');
}

// A handful of stars that occasionally pulse brighter, each on its own
// long, staggered cycle so they read as a rare shimmer rather than
// constant flashing — most of each star's cycle it just sits at its
// resting opacity. With only a few of these on long-enough cycles, the
// odds of more than 2-3 pulsing at once stay low.
function generateTwinkleStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = (i * 43 + i * i * 7) % 100;
    const y = (i * 31 + i * i * 11) % 100;
    const size = [4, 3, 2.5][i % 3];
    // Resting opacity has to sit well below the flash's 1.0 peak — at
    // 0.45-0.75 (too close to the surrounding static stars' own 0.7-1.0
    // brightness) the pulse barely registered against them.
    const baseOp = 0.15 + ((i % 3) / 2) * 0.15;
    const duration = 10 + ((i * 7) % 12);
    const delay = (i * 3.9) % duration;
    stars.push({ x, y, size, baseOp, duration, delay });
  }
  return stars;
}

// Streaks that fly across the sky and fade, one at a time — each star gets
// its own position/angle/length for variety (so no two look alike), but
// they all share a single timeline instead of looping independently.
// Independent loops were the original approach and it back-fired: with
// several stars each running their own duration, their flights would
// drift into and out of phase with each other, occasionally lining up so
// 3-4 all streaked at once. Instead every star here shares one
// `cycleLength` and is assigned its own turn (`showTimes[i]`) within it,
// spaced out by `gapFor` so consecutive turns are always >=8s apart
// (leaving >=5s of true silence once the ~4%-of-cycle flight itself is
// subtracted) and never evenly spaced, so the rhythm doesn't read as a
// metronome.
//
// Angle is restricted to 4 diagonal bands (roughly NE/SE/SW/NW), each a
// 50deg-wide arc centered on the 45/135/225/315deg diagonals — excluding
// both the near-vertical bands around 90/270deg (straight down reads as
// mechanical) and the near-horizontal bands around 0/180deg (a flat streak
// doesn't read as a shooting star at all). Bands are assigned round-robin
// by index (i % 4) rather than derived from a single raw modulo, so a
// handful of stars don't all happen to land in the same one or two bands.
//
// The shootingStar keyframes (see CSS) hide the star for 0-95% of its
// cycle and only play the actual flight in the last 4% — so each star's
// animation-delay is set negative, sized so its clock starts already most
// of the way through its first cycle and its one flight per cycle lands
// exactly on its assigned showTime (the first one landing ~4s after the
// page loads, since most visitors won't stick around long enough to catch
// one otherwise).
function generateShootingStars(count) {
  const gapFor = (i) => 8 + ((i * 29 + 11) % 8); // 8-15s, deliberately uneven
  const showTimes = [];
  let cursor = 4; // first streak lands ~4s after mount
  for (let i = 0; i < count; i++) {
    showTimes.push(cursor);
    cursor += gapFor(i);
  }
  const cycleLength = cursor; // last gap also closes the loop back to showTimes[0]

  const stars = [];
  for (let i = 0; i < count; i++) {
    const top = (i * 17 + 6 + (i % 3) * 9) % 65;
    const left = ((i * 31 + i * i * 7) % 92) + 2;
    const bandStart = [20, 110, 200, 290][i % 4];
    const angle = bandStart + ((i * 53 + i * i * 11) % 50);
    const distance = 130 + ((i * 43 + i * i * 5) % 200);
    const length = 45 + ((i * 31 + i * i * 3) % 80);
    const delay = showTimes[i] - cycleLength * 0.96;
    stars.push({ top, left, angle, distance, length, duration: cycleLength, delay });
  }
  return stars;
}

function generateRainLayers(count, tileH, rgb) {
  const images = [];
  const sizes = [];
  const posX = [];
  // Each streak gets its own even band across the full width, jittered
  // within that band — `(i * 53 + i * i * 7) % 100` alone clusters every
  // streak between 0-72% for a count this small, leaving the right side
  // of the screen bare.
  const band = 100 / count;
  for (let i = 0; i < count; i++) {
    const jitter = (i * 53 + i * i * 7) % band;
    const x = i * band + jitter;
    const y0 = (i * 97 + 13) % (tileH - 30);
    const len = 8 + ((i * 31) % 18);
    const width = i % 4 === 0 ? 1.5 : 1;
    const op = (0.16 + (i % 5) * 0.055).toFixed(2);
    images.push(
      `linear-gradient(to bottom, transparent ${y0}px, rgba(${rgb},${op}) ${y0}px, rgba(${rgb},${op}) ${y0 + len}px, transparent ${y0 + len}px)`
    );
    sizes.push(`${width}px ${tileH}px`);
    posX.push(`${x.toFixed(2)}%`);
  }
  return { images: images.join(','), sizes: sizes.join(','), posX: posX.join(',') };
}

function generateSnowLayers(count, tileH, rgb) {
  const images = [];
  const sizes = [];
  const posX = [];
  const tileW = 20;
  for (let i = 0; i < count; i++) {
    // Each layer is one flake, repeated down its own tileH-tall column via
    // repeat-y — the column itself is placed at x% of the full viewport
    // width (like the rain streaks), not a pixel offset within a narrow
    // tile, otherwise every flake ends up crammed into the same few
    // pixels at the left edge instead of scattered across the screen.
    const x = (i * 37 + i * i * 5) % 100;
    const y = (i * 61 + 23) % 100;
    const size = 2 + (i % 3);
    const op = (0.4 + (i % 4) * 0.12).toFixed(2);
    images.push(`radial-gradient(${size}px ${size}px at 50% ${y}%, rgba(${rgb},${op}), transparent 70%)`);
    sizes.push(`${tileW}px ${tileH}px`);
    posX.push(`${x}%`);
  }
  return { images: images.join(','), sizes: sizes.join(','), posX: posX.join(',') };
}

const RAIN_TILE_H = 240;
const SNOW_TILE_H = 320;

// The gradient theme draws every effect in white with `mix-blend-mode:
// screen` so stars/rain punch through as bright light against a dark or
// saturated backdrop. That trick inverts on the plain (gradient-off) theme's
// near-white #f9f9f9 background — screening anything onto near-white stays
// near-white, so the same white-on-screen-blend layers would just vanish.
// `mono` swaps both halves of that trick: a mid-gray ink color instead of
// white, blended normally instead of screened, so the same effects read as
// gray specks/streaks on light paper instead of glowing light on a dark sky.
const MONO_RGB = '110,110,110';
const COLOR_RGB = '255,255,255';

// city/time drive the shader colors; condition + isNight drive which of
// these sit on top — stars only during the dark night/dusk segments, haze
// for anything cloudy/foggy, rain or snow for active precipitation.
const WeatherOverlay = ({ condition, isNight, mono = false }) => {
  const type = overlayForCondition(condition);
  const rgb = mono ? MONO_RGB : COLOR_RGB;
  const stars = useMemo(() => generateStarLayers(90, rgb), [rgb]);
  const twinkleStars = useMemo(() => generateTwinkleStars(5), []);
  const shootingStars = useMemo(() => generateShootingStars(6), []);
  const rain = useMemo(() => generateRainLayers(17, RAIN_TILE_H, rgb), [rgb]);
  const snow = useMemo(() => generateSnowLayers(28, SNOW_TILE_H, rgb), [rgb]);

  const hazeOpacity = HAZE_OPACITY[type] ?? 0;
  const isRainy = type === 'rain' || type === 'storm';
  const isSnowy = type === 'snow';
  const screenBlend = mono ? 'normal' : 'screen';

  return (
    <>
      {/* Haze sits underneath the stars — it used to render after them and
          washed the stars out almost completely on overcast nights. */}
      {hazeOpacity > 0 && (
        <div
          className="weather-haze"
          style={{ opacity: hazeOpacity, ...(mono && { background: `rgba(${MONO_RGB},0.5)` }) }}
        />
      )}

      {isNight && (
        <>
          <div
            className="weather-layer weather-stars"
            style={{ backgroundImage: stars, mixBlendMode: screenBlend }}
          />
          {twinkleStars.map((s, i) => (
            <div
              key={i}
              className="star-twinkle"
              style={{
                top: `${s.y}%`,
                left: `${s.x}%`,
                width: `${s.size * 5}px`,
                height: `${s.size * 5}px`,
                backgroundImage: `radial-gradient(${s.size}px ${s.size}px at 50% 50%, rgba(${rgb},1), transparent 70%)`,
                mixBlendMode: screenBlend,
                '--base-op': s.baseOp,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
          {shootingStars.map((s, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: `${s.length}px`,
                backgroundImage: `linear-gradient(90deg, rgba(${rgb},0), rgba(${rgb},0.95))`,
                '--angle': `${s.angle}deg`,
                '--distance': `${s.distance}px`,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </>
      )}

      {isRainy && (
        <div
          className="weather-layer weather-rain"
          style={{
            backgroundImage: rain.images,
            backgroundSize: rain.sizes,
            backgroundPositionX: rain.posX,
            mixBlendMode: screenBlend,
          }}
        />
      )}

      {isSnowy && (
        <div
          className="weather-layer weather-snow"
          style={{ backgroundImage: snow.images, backgroundSize: snow.sizes, backgroundPositionX: snow.posX }}
        />
      )}
    </>
  );
};

export default WeatherOverlay;
