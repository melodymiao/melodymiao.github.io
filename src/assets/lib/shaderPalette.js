// Time-of-day + weather → ShaderGradient's color1/color2/color3.
//
// 3 moods (Clear, Partly Cloudy, Cloudy — Cloudy also covers Fog, plus
// drizzle/rain/snow/showers/storms) × 6 times of day = 18 hand-authored
// color triples. Mood switches just switch which keyframe set is read.
//
// The 6 time-of-day keyframes (night/dawn/morning/midday/sunset/dusk) are
// NOT fixed clock hours — a fixed "sunset = 5pm" would be wrong most of
// the year (San Diego's actual sunset is ~4:45pm in December, ~8pm in
// June). Instead they're computed per visit from the selected city's real
// lat/lon/date via a standard sunrise-equation approximation, so "sunset"
// tracks wherever the sun actually is for that place and day. On top of
// that, the live temperature nudges every resolved color's hue slightly
// warmer when it's hot out and cooler when it's cold.

const TIME_ORDER = ['night', 'dawn', 'morning', 'midday', 'sunset', 'dusk'];

const PALETTES = {
  'dawn-clear': ['#9B7FD1', '#F28FAE', '#FFD873'],
  'dawn-partly': ['#8F7FC2', '#E0A0B8', '#F0CE8A'],
  'dawn-cloudy': ['#8A83A8', '#C2A8B0', '#DDC9A0'],

  'morning-clear': ['#2E8FE0', '#4FC9C4', '#FFDE7A'],
  'morning-partly': ['#4C93CC', '#7DC2BE', '#E8D9A0'],
  'morning-cloudy': ['#6B87A0', '#93ACAA', '#C7C3A8'],

  'midday-clear': ['#33A0FF', '#B06FE0', '#FFC53D'],
  'midday-partly': ['#4FA0E0', '#A87FC7', '#F0CE7A'],
  'midday-cloudy': ['#6E8CB0', '#9C8FB0', '#D6C9A0'],

  'sunset-clear': ['#FF7A33', '#33A0FF', '#FFC53D'],
  'sunset-partly': ['#E87A4A', '#4F93D6', '#F0C169'],
  'sunset-cloudy': ['#B87560', '#6E7E96', '#C9AA79'],

  'dusk-clear': ['#2B2452', '#A8478C', '#FF7A50'],
  'dusk-partly': ['#332C58', '#8C4C82', '#D97960'],
  'dusk-cloudy': ['#362F4A', '#6B5470', '#967868'],

  'night-clear': ['#0B1230', '#4A2E78', '#1FA8A0'],
  'night-partly': ['#10163A', '#3D2E68', '#2A7A78'],
  'night-cloudy': ['#16151F', '#322A3E', '#2E4A48'],
};

const CONDITION_TO_MOOD = {
  clear: 'clear',
  'mostly clear': 'clear',
  'partly cloudy': 'partly',
  overcast: 'cloudy',
  foggy: 'cloudy',
  'light drizzle': 'cloudy',
  drizzle: 'cloudy',
  'heavy drizzle': 'cloudy',
  'freezing drizzle': 'cloudy',
  'light rain': 'cloudy',
  rain: 'cloudy',
  'heavy rain': 'cloudy',
  'freezing rain': 'cloudy',
  'light snow': 'cloudy',
  snow: 'cloudy',
  'heavy snow': 'cloudy',
  'snow grains': 'cloudy',
  'light showers': 'cloudy',
  showers: 'cloudy',
  'heavy showers': 'cloudy',
  'snow showers': 'cloudy',
  thunderstorms: 'cloudy',
};

export function moodForCondition(label) {
  return CONDITION_TO_MOOD[label] || 'cloudy';
}

const clamp = (v) => Math.max(0, Math.min(255, v));

const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const rgbToHex = ([r, g, b]) =>
  `#${[r, g, b].map((v) => clamp(Math.round(v)).toString(16).padStart(2, '0')).join('')}`;

const lerp = (a, b, t) => a + (b - a) * t;

const lerpHex = (hexA, hexB, t) => {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return rgbToHex(a.map((v, i) => lerp(v, b[i], t)));
};

function hexToHsl(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

function hslToHex(h, s, l) {
  const hue = ((h % 360) + 360) % 360;
  const sat = s / 100;
  const light = l / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = light - c / 2;

  let rgb;
  if (hue < 60) rgb = [c, x, 0];
  else if (hue < 120) rgb = [x, c, 0];
  else if (hue < 180) rgb = [0, c, x];
  else if (hue < 240) rgb = [0, x, c];
  else if (hue < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];

  return rgbToHex(rgb.map((v) => (v + m) * 255));
}

// Nudges hue toward orange when it's hot, toward blue when it's cold —
// applied after resolving the time+mood base color, since ShaderGradient
// wants real hex values (CSS filters wouldn't reach into the shader).
function shiftForTemp(hex, tempF) {
  const [h, s, l] = hexToHsl(hex);
  const delta = Math.max(-20, Math.min(20, (70 - tempF) * 0.4)); // + = cooler
  return hslToHex(h + delta, s, l);
}

// The city's real UTC offset (in hours, DST-aware) via Intl — used to
// convert solar noon (a longitude-only calculation) into that city's
// actual civil clock hour.
function getUtcOffsetHours(tz, date) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'shortOffset' }).formatToParts(date);
    const name = parts.find((p) => p.type === 'timeZoneName')?.value || 'GMT+0';
    const match = name.match(/GMT([+-])(\d+)(?::(\d+))?/);
    if (!match) return 0;
    const sign = match[1] === '-' ? -1 : 1;
    const hours = Number(match[2]);
    const minutes = match[3] ? Number(match[3]) : 0;
    return sign * (hours + minutes / 60);
  } catch {
    return -date.getTimezoneOffset() / 60;
  }
}

function getLocalHourFraction(tz, date) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date);
    const hour = Number(parts.find((p) => p.type === 'hour').value);
    const minute = Number(parts.find((p) => p.type === 'minute').value);
    return hour + minute / 60;
  } catch {
    return date.getHours() + date.getMinutes() / 60;
  }
}

// Standard sunrise-equation approximation: solar declination from
// day-of-year, day length from latitude + declination, solar noon from
// longitude + the city's real UTC offset. Not second-precise, but tracks
// the real season/location instead of a fixed clock hour.
function getSunWindow(lat, lon, tz, date) {
  const rad = Math.PI / 180;
  const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - startOfYear) / 86400000) + 1;

  const decl = 23.45 * Math.sin(rad * (360 / 365) * (284 + dayOfYear));
  const cosH = -Math.tan(lat * rad) * Math.tan(decl * rad);
  const clamped = Math.max(-1, Math.min(1, cosH));
  const hourAngleDeg = Math.acos(clamped) / rad;
  const daylightHours = (2 * hourAngleDeg) / 15;

  const utcOffset = getUtcOffsetHours(tz, date);
  const solarNoon = (((12 - lon / 15 + utcOffset) % 24) + 24) % 24;

  const sunrise = solarNoon - daylightHours / 2;
  const sunset = solarNoon + daylightHours / 2;

  return {
    night: (solarNoon + 12) % 24,
    dawn: sunrise,
    morning: sunrise + (solarNoon - sunrise) * 0.5,
    midday: solarNoon,
    sunset,
    dusk: sunset + 1,
  };
}

const resolveKeyframes = (sunWindow) =>
  TIME_ORDER.map((time) => ({ name: time, hour: sunWindow[time] })).sort((a, b) => a.hour - b.hour);

// Shared by baseColorsForHour (needs the interpolation progress too) and
// getTimeSegment (just needs which segment we're currently in).
function findSegment(hourFrac, keyframes) {
  const wrapped = ((hourFrac % 24) + 24) % 24;

  for (let i = 0; i < keyframes.length; i++) {
    const next = keyframes[(i + 1) % keyframes.length];
    const nextHour = next.hour <= keyframes[i].hour ? next.hour + 24 : next.hour;
    // The wraparound segment (last -> first) spans across midnight, e.g.
    // 23.4 -> 6.8. A wrapped value like 2am (2) needs to be compared as
    // 26 against that range, not 2 — otherwise cities whose solar noon
    // falls before clock-noon (their "night" keyframe lands late, near
    // 24) mis-resolve every pre-dawn hour into the "dawn" fallback below.
    const w = wrapped >= keyframes[i].hour ? wrapped : wrapped + 24;
    if (w >= keyframes[i].hour && w <= nextHour) {
      const span = nextHour - keyframes[i].hour;
      const t = span === 0 ? 0 : (w - keyframes[i].hour) / span;
      return { index: i, t };
    }
  }

  return { index: 0, t: 0 };
}

function baseColorsForHour(hourFrac, mood, sunWindow) {
  const keyframes = resolveKeyframes(sunWindow).map((k) => ({ ...k, colors: PALETTES[`${k.name}-${mood}`] }));
  const { index, t } = findSegment(hourFrac, keyframes);
  const next = keyframes[(index + 1) % keyframes.length];
  return keyframes[index].colors.map((c, idx) => lerpHex(c, next.colors[idx], t));
}

// Which of the 6 time-of-day keyframes a city is currently in — used to
// decide when it's dark enough for the star overlay (see WeatherOverlay).
export function getTimeSegment(date, city) {
  const hourFrac = getLocalHourFraction(city.tz, date);
  const sunWindow = getSunWindow(city.lat, city.lon, city.tz, date);
  const keyframes = resolveKeyframes(sunWindow);
  return keyframes[findSegment(hourFrac, keyframes).index].name;
}

// city: { lat, lon, tz } — the currently selected city (same shape as
// PRESET_CITIES entries / the geolocated city object).
export function getShaderColors(date, city, mood = 'clear', tempF = 70) {
  const safeMood = PALETTES[`night-${mood}`] ? mood : 'clear';
  const hourFrac = getLocalHourFraction(city.tz, date);
  const sunWindow = getSunWindow(city.lat, city.lon, city.tz, date);
  const keyframes = resolveKeyframes(sunWindow);
  const segment = keyframes[findSegment(hourFrac, keyframes).index].name;
  const [c1, c2, c3] = baseColorsForHour(hourFrac, safeMood, sunWindow);

  return {
    color1: shiftForTemp(c1, tempF),
    color2: shiftForTemp(c2, tempF),
    color3: shiftForTemp(c3, tempF),
    segment,
  };
}
