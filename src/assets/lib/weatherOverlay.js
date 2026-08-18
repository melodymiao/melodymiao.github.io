// Raw weather condition label -> which particle overlay to draw on top of
// the shader gradient. Finer-grained than shaderPalette's 3-mood color
// lookup (which collapses fog/rain/snow/storms all into "cloudy") since the
// overlay needs to tell rain apart from snow apart from plain fog.
const OVERLAY_TYPE = {
  clear: 'clear',
  'mostly clear': 'clear',
  'partly cloudy': 'partly',
  overcast: 'overcast',
  foggy: 'fog',
  'light drizzle': 'rain',
  drizzle: 'rain',
  'heavy drizzle': 'rain',
  'freezing drizzle': 'rain',
  'light rain': 'rain',
  rain: 'rain',
  'heavy rain': 'rain',
  'freezing rain': 'rain',
  'light snow': 'snow',
  snow: 'snow',
  'heavy snow': 'snow',
  'snow grains': 'snow',
  'light showers': 'rain',
  showers: 'rain',
  'heavy showers': 'rain',
  'snow showers': 'snow',
  thunderstorms: 'storm',
};

export function overlayForCondition(label) {
  return OVERLAY_TYPE[label] || 'clear';
}

// How strong the drifting cloud/fog haze reads for each overlay type —
// precipitation types get a haze too since rainy/snowy skies are cloudy.
export const HAZE_OPACITY = {
  clear: 0,
  partly: 0.22,
  overcast: 0.62,
  fog: 0.85,
  rain: 0.38,
  storm: 0.55,
  snow: 0.3,
};
