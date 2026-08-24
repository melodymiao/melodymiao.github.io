import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRESET_CITIES } from '../lib/cities';
import { useWeather } from '../lib/useWeather';
import { getShaderColors, moodForCondition } from '../lib/shaderPalette';
import { getCityTime } from '../lib/cityTime';
import './SiteFooter.css';

const SAN_DIEGO = PRESET_CITIES[0];
const CLOCK_TICK_MS = 30 * 1000;

// A single hard "transparent" stop reads as a disk with an edge, no
// matter how far out it's placed — real softness comes from fading the
// *alpha* across several stops instead, which needs rgba (hex alone has
// no alpha channel).
const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const withAlpha = (hex, a) => `rgba(${hexToRgb(hex).join(',')},${a})`;

// A little "now page" style status line — picked once per page load (not
// on a timer) so it reads as a fresh status each visit instead of
// flickering mid-session.
const CURRENTLY_MESSAGES = [
  'thinking about my next HeyTea order',
  "rewatching a fancam I don't need to rewatch",
  'prototyping something that will probably get scrapped',
  'adding one more thing to this portfolio',
  'debugging something that worked five minutes ago',
  'deciding what to rank on drank',
  'cleaning my camera roll',
  'getting cat hair all over myself',
  'doing a K-pop random play dance in my bathroom',
  'reorganizing my bookshelf... again',
  'tinkering with Figma motion',
  'refreshing this page more than I should',
];

const pickCurrently = () => CURRENTLY_MESSAGES[Math.floor(Math.random() * CURRENTLY_MESSAGES.length)];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Always San Diego, always live — unlike CityRotator this never previews
// another city on hover, so it fetches its own weather independently of
// whatever city the rest of the page has selected.
const SiteFooter = () => {
  const [now, setNow] = useState(() => new Date());
  const [currently] = useState(pickCurrently);
  const weather = useWeather(SAN_DIEGO);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), CLOCK_TICK_MS);
    return () => clearInterval(id);
  }, []);

  const mood = weather.condition ? moodForCondition(weather.condition) : 'clear';
  const tempF = weather.tempF ?? 70;
  const colors = getShaderColors(now, SAN_DIEGO, mood, tempF);
  const timeStr = getCityTime(SAN_DIEGO.tz, now);

  return (
    <footer className="site-footer">
      <div className="site-footer-card">
        {/* Plain-theme only (see SiteFooter.css) — reads as a sun/glow
            peeking over the card's bottom edge, in the same weather-driven
            color that would otherwise be driving the moving gradient
            background, so pages without any color still carry a trace of
            it. color3 is consistently the warm accent tone across every
            time-of-day palette (see shaderPalette.js).

            One color, alpha-only fade — a solid core holding through 35%,
            then a long smooth taper to transparent — instead of blending
            through a second hue, which read as a colorful blob rather
            than a sun. */}
        <div
          className="site-footer-ellipse"
          style={{
            background: `radial-gradient(circle 460px at 50% 50%,
              ${colors.color3} 0%,
              ${colors.color3} 35%,
              ${withAlpha(colors.color3, 0.5)} 60%,
              ${withAlpha(colors.color3, 0.15)} 82%,
              ${withAlpha(colors.color3, 0)} 100%)`,
          }}
        />

        <div className="site-footer-row">
          <div className="site-footer-status">
            <p>{timeStr} &middot; San Diego</p>
            <p>Currently: {currently}</p>
          </div>

          <div className="site-footer-columns">
            <div className="site-footer-column">
              <span className="site-footer-label">Stalk me</span>
              <a href="https://www.linkedin.com/in/melody-miao/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:melodymiao001@gmail.com">Email</a>
            </div>

            <div className="site-footer-column">
              <span className="site-footer-label">Explore</span>
              <Link to="/" onClick={scrollToTop}>Home</Link>
              <Link to="/about" onClick={scrollToTop}>About</Link>
              <a href="/Melody_Miao_Product_Designer.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
