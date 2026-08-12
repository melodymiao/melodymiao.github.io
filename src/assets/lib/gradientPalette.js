// Time-of-day → gradient color stops. Keyframes are hand-picked hours;
// getPaletteForHour() linearly interpolates between the two nearest ones
// so the background drifts continuously through the day instead of
// jumping at hard cutoffs. Most visitors only load the page once, so
// Home.jsx drives this with a fast-forwarded virtual clock (a full 24h
// lap in a few minutes) rather than real wall-clock time, starting from
// the visitor's actual local hour. Swap/extend with a weather-driven
// palette later (e.g. getPaletteForWeather) — anything consuming a
// palette (the current CSS-blob GradientCircles, or ShaderGradient once
// it's dropped in) reads from this same {purple, darkPink, yellow, peach,
// teal} shape.

const KEYFRAMES = [
  { hour: 0, colors: { purple: [70, 60, 130], darkPink: [90, 70, 140], yellow: [60, 70, 120], peach: [80, 90, 150], teal: [40, 90, 140] } },
  { hour: 5, colors: { purple: [150, 110, 200], darkPink: [255, 130, 160], yellow: [255, 190, 140], peach: [255, 170, 140], teal: [140, 180, 210] } },
  { hour: 8, colors: { purple: [200, 170, 255], darkPink: [255, 170, 200], yellow: [255, 220, 150], peach: [255, 200, 170], teal: [170, 230, 230] } },
  { hour: 12, colors: { purple: [190, 200, 255], darkPink: [255, 200, 210], yellow: [255, 230, 160], peach: [255, 210, 180], teal: [160, 220, 240] } },
  { hour: 17, colors: { purple: [190, 110, 255], darkPink: [255, 110, 140], yellow: [255, 190, 110], peach: [255, 150, 110], teal: [180, 210, 220] } },
  { hour: 20, colors: { purple: [120, 80, 180], darkPink: [180, 90, 150], yellow: [150, 110, 130], peach: [160, 100, 130], teal: [80, 110, 160] } },
  { hour: 24, colors: { purple: [70, 60, 130], darkPink: [90, 70, 140], yellow: [60, 70, 120], peach: [80, 90, 150], teal: [40, 90, 140] } },
];

const lerp = (a, b, t) => a + (b - a) * t;
const lerpColor = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));

export function getPaletteForHour(hourFrac) {
  const wrapped = ((hourFrac % 24) + 24) % 24;

  let lower = KEYFRAMES[0];
  let upper = KEYFRAMES[KEYFRAMES.length - 1];
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    if (wrapped >= KEYFRAMES[i].hour && wrapped <= KEYFRAMES[i + 1].hour) {
      lower = KEYFRAMES[i];
      upper = KEYFRAMES[i + 1];
      break;
    }
  }

  const span = upper.hour - lower.hour;
  const t = span === 0 ? 0 : (wrapped - lower.hour) / span;

  const palette = {};
  for (const key of Object.keys(lower.colors)) {
    palette[key] = lerpColor(lower.colors[key], upper.colors[key], t).join(', ');
  }
  return palette;
}

export function getPaletteForTime(date = new Date()) {
  return getPaletteForHour(date.getHours() + date.getMinutes() / 60);
}

export function paletteToCssVars(palette) {
  return {
    '--purple': palette.purple,
    '--dark-pink': palette.darkPink,
    '--yellow': palette.yellow,
    '--peach': palette.peach,
    '--teal': palette.teal,
  };
}
