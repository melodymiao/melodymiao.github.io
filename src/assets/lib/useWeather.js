import { useEffect, useRef, useState } from 'react';
import { weatherCodeToLabel } from './weatherCodes';

const INITIAL_STATE = { loading: true, error: null, tempF: null, condition: null, isDay: true };

export async function fetchCurrentWeather(coords) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('weather request failed');
  const data = await res.json();
  const current = data.current;
  return {
    tempF: Math.round(current.temperature_2m),
    condition: weatherCodeToLabel(current.weather_code),
    isDay: current.is_day === 1,
  };
}

export function useWeather(coords) {
  const [state, setState] = useState(INITIAL_STATE);
  const coordsKey = coords ? `${coords.lat}:${coords.lon}` : null;
  const keyRef = useRef(coordsKey);

  // useEffect only runs after this render commits, so for one render right
  // after `coords` changes, `state` still holds the *previous* target's
  // already-resolved result — a caller checking only `loading`/`error`
  // reads it as valid data for the new target. Resetting synchronously
  // during render (a supported pattern: adjusting state from a prop
  // change) closes that window instead of waiting for the effect.
  let renderState = state;
  if (coordsKey !== keyRef.current) {
    keyRef.current = coordsKey;
    renderState = INITIAL_STATE;
  }

  useEffect(() => {
    if (!coords) return undefined;
    let cancelled = false;
    setState(INITIAL_STATE);

    fetchCurrentWeather(coords)
      .then((result) => {
        if (!cancelled) setState({ loading: false, error: null, ...result });
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, error: err, tempF: null, condition: null, isDay: true });
      });

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordsKey]);

  return renderState;
}
