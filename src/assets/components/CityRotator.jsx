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

const CityRotator = ({ onSelect, onPreview, activeWeather, weatherCity }) => {
  const [presetIndex, setPresetIndex] = useState(0);
  const [locatedCity, setLocatedCity] = useState(null);
  const [displayCity, setDisplayCity] = useState(PRESET_CITIES[0]);
  const [spinning, setSpinning] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [previewCache, setPreviewCache] = useState({});
  const [now, setNow] = useState(() => new Date());
  const [unit, setUnit] = useState('F');
  const [unitHovering, setUnitHovering] = useState(false);

  const spinTimerRef = useRef(null);
  const previewIndexRef = useRef(0);
  const targetIndexRef = useRef(null);
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

  // Quick lotto-style burst: a handful of fast random hops for visual
  // flourish, always ending on `target` — decided up front in startSpin so
  // things watching the resolved city (like the background) can jump
  // straight there once instead of following every intermediate hop.
  const runHop = (hopsLeft, target) => {
    spinTimerRef.current = setTimeout(() => {
      const next = hopsLeft <= 1 ? target : randomIndex(previewIndexRef.current);
      previewIndexRef.current = next;
      setDisplayCity(PRESET_CITIES[next]);

      if (hopsLeft <= 1) {
        spinTimerRef.current = null;
        setSpinning(false);
        return;
      }
      runHop(hopsLeft - 1, target);
    }, HOP_MS);
  };

  const startSpin = () => {
    if (spinTimerRef.current || locating) return;
    setPreviewing(true);
    setSpinning(true);
    previewIndexRef.current = presetIndex;

    const target = randomIndex(presetIndex);
    targetIndexRef.current = target;
    if (onPreview) {
      const targetCity = PRESET_CITIES[target];
      const cached = previewCache[targetCity.name];
      onPreview(targetCity, cached ? cached.tempF : null, cached ? cached.condition : null);
    }

    runHop(HOP_COUNT, target);
  };

  const handleMouseLeave = () => {
    clearSpin();
    setSpinning(false);
    targetIndexRef.current = null;
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

    const landedIndex = targetIndexRef.current != null ? targetIndexRef.current : randomIndex(presetIndex);
    targetIndexRef.current = null;

    previewIndexRef.current = landedIndex;
    setLocatedCity(null);
    setPresetIndex(landedIndex);
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

  // Wide only while actively hopping through random names — once that
  // settles the pill shrinks to fit the landed name, even while still
  // hovering (before commit), so the shrink animation plays right after
  // the roll finishes instead of waiting for mouseleave/click.
  const isFixedWidth = spinning;
  const useCache = previewing || spinning;
  const cached = previewCache[displayCity.name];

  // activeWeather is fetched for Home's committed `city` state, which lags
  // one render behind CityRotator's own commit — onSelect fires from an
  // effect, not synchronously with the click. Reading activeWeather before
  // it's caught up to displayCity would show the *previous* city's numbers
  // for a frame, then roll the digits again once it catches up — a
  // duplicate spin right after commit. Only trust it once it's current.
  const weatherIsCurrent = weatherCity && weatherCity.name === displayCity.name;

  let tempF = null;
  let condition = null;
  if (useCache) {
    if (cached) { tempF = cached.tempF; condition = cached.condition; }
  } else if (weatherIsCurrent && !activeWeather.loading && !activeWeather.error) {
    tempF = activeWeather.tempF;
    condition = activeWeather.condition;
  } else if (cached) {
    // The live fetch for the just-committed city is still in flight (or
    // hasn't started yet) — fall back to the pre-fetched cache so it
    // doesn't flicker to a "checking the weather" placeholder, or to a
    // stale previous-city value, for a value we already have.
    tempF = cached.tempF;
    condition = cached.condition;
  }

  const weatherKnown = tempF != null;

  // Keeps the parent in sync with the resting (non-preview) city — startSpin
  // already announces the hover-spin's destination once, immediately, so
  // this only needs to cover mount, reverting on mouse-leave, committing on
  // click, and "use my location" — never the intermediate hops themselves.
  useEffect(() => {
    if (previewing || spinning) return;
    if (onPreview) onPreview(displayCity, tempF, condition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayCity.name, displayCity.lat, displayCity.lon, tempF, condition, previewing, spinning]);

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
              onClick={() => {
                // While hovering, displayUnit already shows the *other*
                // unit as a preview. Committing that preview and also
                // clearing the hover-preview flag in the same click means
                // the shown value doesn't move — otherwise, since the
                // mouse is still resting on the button post-click, it'd
                // immediately flip to previewing the (now different)
                // opposite unit, then flip again on mouseleave: two
                // extra rolls for a single click.
                if (!unitHoveringRef.current) return;
                setUnit((prev) => (prev === 'F' ? 'C' : 'F'));
                unitHoveringRef.current = false;
                setUnitHovering(false);
              }}
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
        {/* The hoverable/clickable box stays pinned at the widest name's
            size for the whole hover session — the visible pill shrinks
            inside it instead of the hit-area itself shrinking, otherwise a
            stationary cursor can end up outside the button once it shrinks
            around it, firing a spurious mouseleave mid-hover. */}
        <button
          type="button"
          className="landing-city-pill city-rotator-pill"
          style={{ minWidth: `${WIDEST_CITY_CHARS + 1}ch` }}
          onMouseEnter={startSpin}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          aria-label={`Showing ${displayCity.name}. Click to lock in a city.`}
        >
          <span
            className="city-rotator-pill-chrome"
            style={{ minWidth: `${(isFixedWidth ? WIDEST_CITY_CHARS : displayCity.name.length) + 1}ch` }}
          >
            <WordSlide value={displayCity.name} fast={spinning} />
          </span>
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
