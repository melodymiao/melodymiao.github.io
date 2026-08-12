import React, { useEffect, useRef, useState } from 'react';
import { PRESET_CITIES } from '../lib/cities';
import { reverseGeocodeCity } from '../lib/reverseGeocode';
import { fetchCurrentWeather } from '../lib/useWeather';
import { getCityTime } from '../lib/cityTime';
import RollingNumber from './RollingNumber';
import WordSlide from './WordSlide';
import './CityRotator.css';

const HOP_MS = 90;
const HOP_COUNT = 4;
const CLOCK_TICK_MS = 30 * 1000;

// The pill stays pinned at this width (fits the widest preset name) until
// the visitor has actually made a selection, so quick hops during the
// hover-spin never jostle the surrounding layout.
const WIDEST_CITY_CHARS = Math.max(...PRESET_CITIES.map((c) => c.name.length));

const randomIndex = (excluding) => {
  if (PRESET_CITIES.length <= 1) return 0;
  let i = Math.floor(Math.random() * PRESET_CITIES.length);
  if (i === excluding) i = (i + 1) % PRESET_CITIES.length;
  return i;
};

const toCelsius = (f) => Math.round((f - 32) * 5 / 9);

const CityRotator = ({ onSelect, activeWeather }) => {
  const [presetIndex, setPresetIndex] = useState(0);
  const [locatedCity, setLocatedCity] = useState(null);
  const [displayCity, setDisplayCity] = useState(PRESET_CITIES[0]);
  const [spinning, setSpinning] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [previewCache, setPreviewCache] = useState({});
  const [now, setNow] = useState(() => new Date());
  const [unit, setUnit] = useState('F');
  const [unitHovering, setUnitHovering] = useState(false);

  const spinTimerRef = useRef(null);
  const previewIndexRef = useRef(0);
  const unitHoveringRef = useRef(false);

  const activeCity = locatedCity || PRESET_CITIES[presetIndex];

  useEffect(() => {
    onSelect(activeCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCity.name, activeCity.lat, activeCity.lon]);

  // Live clock for whichever city is currently resting/displayed.
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), CLOCK_TICK_MS);
    return () => clearInterval(id);
  }, []);

  // Pre-fetch weather for every preset city once, up front — a hover-spin
  // hops between cities every 90ms, far faster than a live fetch could
  // ever return, so the spin reads from this cache instead of waiting.
  useEffect(() => {
    let cancelled = false;
    PRESET_CITIES.forEach((c) => {
      fetchCurrentWeather(c)
        .then((result) => {
          if (!cancelled) setPreviewCache((prev) => ({ ...prev, [c.name]: result }));
        })
        .catch(() => {});
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => () => {
    if (spinTimerRef.current) clearTimeout(spinTimerRef.current);
  }, []);

  const clearSpin = () => {
    if (spinTimerRef.current) {
      clearTimeout(spinTimerRef.current);
      spinTimerRef.current = null;
    }
  };

  // Quick lotto-style burst: a handful of fast random hops, then it just
  // sits on wherever it landed (a preview) until the visitor clicks or
  // moves away — no continuous looping while hovered.
  const runHop = (hopsLeft) => {
    spinTimerRef.current = setTimeout(() => {
      const next = randomIndex(previewIndexRef.current);
      previewIndexRef.current = next;
      setDisplayCity(PRESET_CITIES[next]);

      if (hopsLeft <= 1) {
        spinTimerRef.current = null;
        setSpinning(false);
        return;
      }
      runHop(hopsLeft - 1);
    }, HOP_MS);
  };

  const startSpin = () => {
    if (spinTimerRef.current || locating) return;
    setPreviewing(true);
    setSpinning(true);
    previewIndexRef.current = presetIndex;
    runHop(HOP_COUNT);
  };

  const handleMouseLeave = () => {
    clearSpin();
    setSpinning(false);
    if (!previewing) return;
    setPreviewing(false);
    previewIndexRef.current = presetIndex;
    setDisplayCity(activeCity);
  };

  const handleClick = () => {
    setLocationError(null);
    clearSpin();
    setSpinning(false);
    setPreviewing(false);

    const landedIndex = previewIndexRef.current !== presetIndex || locatedCity
      ? previewIndexRef.current
      : randomIndex(presetIndex);

    previewIndexRef.current = landedIndex;
    setLocatedCity(null);
    setPresetIndex(landedIndex);
    setHasSelected(true);
    setDisplayCity(PRESET_CITIES[landedIndex]);
  };

  const useMyLocation = () => {
    clearSpin();
    setSpinning(false);
    setPreviewing(false);
    if (!navigator.geolocation) {
      setLocationError('Not supported');
      return;
    }
    setLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        let name = 'Your Location';
        try {
          name = await reverseGeocodeCity(lat, lon);
        } catch {
          // keep the generic fallback label
        }
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const city = { name, lat, lon, tz };
        setLocatedCity(city);
        setHasSelected(true);
        setDisplayCity(city);
        setLocating(false);
      },
      () => {
        setLocationError('Location denied');
        setLocating(false);
      },
      { timeout: 8000 }
    );
  };

  const isFixedWidth = !hasSelected || previewing;
  const useCache = previewing || spinning;
  const cached = previewCache[displayCity.name];

  let tempF = null;
  let condition = null;
  if (useCache) {
    if (cached) { tempF = cached.tempF; condition = cached.condition; }
  } else if (!activeWeather.loading && !activeWeather.error) {
    tempF = activeWeather.tempF;
    condition = activeWeather.condition;
  } else if (cached) {
    // The live fetch for the just-committed city is still in flight —
    // fall back to the pre-fetched cache so it doesn't flicker to a
    // "checking the weather" placeholder for a value we already have.
    tempF = cached.tempF;
    condition = cached.condition;
  }

  const weatherKnown = tempF != null;
  const displayUnit = unitHovering ? (unit === 'F' ? 'C' : 'F') : unit;
  const displayTemp = weatherKnown ? (displayUnit === 'F' ? tempF : toCelsius(tempF)) : null;
  const timeStr = getCityTime(displayCity.tz, now);

  return (
    <div className="landing-weather">
      <span className="landing-weather-text">
        <RollingNumber value={timeStr} fast={spinning} />
        {' · '}
        {weatherKnown ? (
          <>
            currently{' '}
            <button
              type="button"
              className="temp-toggle"
              onMouseEnter={() => { unitHoveringRef.current = true; setUnitHovering(true); }}
              onMouseLeave={() => { unitHoveringRef.current = false; setUnitHovering(false); }}
              onClick={() => setUnit((prev) => (unitHoveringRef.current ? (prev === 'F' ? 'C' : 'F') : prev))}
              aria-label={`Currently showing ${displayUnit === 'F' ? 'Fahrenheit' : 'Celsius'}. Click to switch.`}
            >
              <RollingNumber value={String(displayTemp)} fast={spinning} />
              °{displayUnit}
            </button>
            {' and '}
            <WordSlide value={condition} fast={spinning} />
            {' in '}
          </>
        ) : (
          activeWeather.loading ? 'checking the weather in' : 'weather unavailable in'
        )}
      </span>

      <div className="city-rotator">
        <button
          type="button"
          className="landing-city-pill city-rotator-pill"
          style={isFixedWidth ? { minWidth: `${WIDEST_CITY_CHARS + 1}ch` } : undefined}
          onMouseEnter={startSpin}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          aria-label={`Showing ${displayCity.name}. Click to lock in a city.`}
        >
          <WordSlide value={displayCity.name} fast={spinning} />
        </button>

        <button
          type="button"
          className="city-rotator-locate"
          onClick={useMyLocation}
          disabled={locating}
          aria-label="Use my location"
          title="Use my location"
        >
          <svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" aria-hidden="true">
            <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
        </button>

        {locationError && <span className="city-rotator-error">{locationError}</span>}
      </div>
    </div>
  );
};

export default CityRotator;
