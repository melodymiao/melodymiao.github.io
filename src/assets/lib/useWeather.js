import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!coords) return undefined;
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));

    fetchCurrentWeather(coords)
      .then((result) => {
        if (!cancelled) setState({ loading: false, error: null, ...result });
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, error: err, tempF: null, condition: null, isDay: true });
      });

    return () => { cancelled = true; };
  }, [coords]);

  return state;
}
