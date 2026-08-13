import React, { useMemo } from 'react';
import { overlayForCondition, HAZE_OPACITY } from '../lib/weatherOverlay';
import './WeatherOverlay.css';

// Deterministic pseudo-random placement (index arithmetic, no Math.random)
// so the pattern is stable across re-renders instead of reshuffling.
function generateStarLayers(count) {
  const base = [];
  const a = [];
  const b = [];
  for (let i = 0; i < count; i++) {
    const x = (i * 37 + (i % 7) * 11) % 100;
    const y = (i * 53 + (i % 5) * 17) % 100;
    const s = [3.5, 2.5, 2][i % 3];
    const op = 0.55 + ((i % 5) / 4) * 0.45;
    const entry = `radial-gradient(${s}px ${s}px at ${x}% ${y}%, rgba(255,255,255,${op.toFixed(2)}), transparent 70%)`;
    (i % 3 === 0 ? base : i % 3 === 1 ? a : b).push(entry);
  }
  return { base: base.join(','), a: a.join(','), b: b.join(',') };
}

function generateRainLayers(count, tileH) {
  const images = [];
  const sizes = [];
  const posX = [];
  for (let i = 0; i < count; i++) {
    const x = (i * 53 + i * i * 7) % 100;
    const y0 = (i * 97 + 13) % (tileH - 30);
    const len = 8 + ((i * 31) % 18);
    const width = i % 4 === 0 ? 1.5 : 1;
    const op = (0.16 + (i % 5) * 0.055).toFixed(2);
    images.push(
      `linear-gradient(to bottom, transparent ${y0}px, rgba(255,255,255,${op}) ${y0}px, rgba(255,255,255,${op}) ${y0 + len}px, transparent ${y0 + len}px)`
    );
    sizes.push(`${width}px ${tileH}px`);
    posX.push(`${x}%`);
  }
  return { images: images.join(','), sizes: sizes.join(','), posX: posX.join(',') };
}

function generateSnowLayers(count, tileH) {
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
    images.push(`radial-gradient(${size}px ${size}px at 50% ${y}%, rgba(255,255,255,${op}), transparent 70%)`);
    sizes.push(`${tileW}px ${tileH}px`);
    posX.push(`${x}%`);
  }
  return { images: images.join(','), sizes: sizes.join(','), posX: posX.join(',') };
}

const RAIN_TILE_H = 240;
const SNOW_TILE_H = 320;

// city/time drive the shader colors; condition + isNight drive which of
// these sit on top — stars only during the dark night/dusk segments, haze
// for anything cloudy/foggy, rain or snow for active precipitation.
const WeatherOverlay = ({ condition, isNight }) => {
  const type = overlayForCondition(condition);
  const stars = useMemo(() => generateStarLayers(90), []);
  const rain = useMemo(() => generateRainLayers(17, RAIN_TILE_H), []);
  const snow = useMemo(() => generateSnowLayers(28, SNOW_TILE_H), []);

  const hazeOpacity = HAZE_OPACITY[type] ?? 0;
  const isRainy = type === 'rain' || type === 'storm';
  const isSnowy = type === 'snow';

  return (
    <>
      {/* Haze sits underneath the stars — it used to render after them and
          washed the stars out almost completely on overcast nights. */}
      {hazeOpacity > 0 && <div className="weather-haze" style={{ opacity: hazeOpacity }} />}

      {isNight && (
        <>
          <div className="weather-layer weather-stars" style={{ backgroundImage: stars.base }} />
          <div className="weather-layer weather-stars weather-twinkle-a" style={{ backgroundImage: stars.a }} />
          <div className="weather-layer weather-stars weather-twinkle-b" style={{ backgroundImage: stars.b }} />
        </>
      )}

      {isRainy && (
        <div
          className="weather-layer weather-rain"
          style={{ backgroundImage: rain.images, backgroundSize: rain.sizes, backgroundPositionX: rain.posX }}
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
