import React, { useEffect, useRef, useState } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import { getShaderColors } from '../lib/shaderPalette';
import WeatherOverlay from './WeatherOverlay';

// Colors track real time, refreshed once a minute — no fast-forward. An
// earlier version fast-forwarded a full 24h cycle every few minutes so
// short single-page-load visits would see the gradient actually move, but
// that made the palette sweep through half a day in under a minute, which
// read as random rather than "responding to the weather." A visitor's
// session now just sees whatever's actually true for their selected city
// right now, drifting at real speed like the rest of the page's clock.
const COLOR_TICK_MS = 60 * 1000;

const ShaderBackground = ({ mood = 'clear', tempF = 70, city, condition }) => {
  const moodRef = useRef(mood);
  moodRef.current = mood;
  const tempRef = useRef(tempF);
  tempRef.current = tempF;
  const cityRef = useRef(city);
  cityRef.current = city;

  const [colors, setColors] = useState(() => getShaderColors(new Date(), city, mood, tempF));

  // Instant response whenever the resolved city/weather actually changes —
  // including mid-hover-spin, before anything is committed — so the
  // background reacts just as quickly as the eyebrow text already does.
  useEffect(() => {
    setColors(getShaderColors(new Date(), city, mood, tempF));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mood, tempF, city.name, city.lat, city.lon]);

  // Independently, still drift with real time if the tab stays open a
  // while — refreshed once a minute, no fast-forward.
  useEffect(() => {
    const id = setInterval(() => {
      setColors(getShaderColors(new Date(), cityRef.current, moodRef.current, tempRef.current));
    }, COLOR_TICK_MS);

    return () => clearInterval(id);
  }, []);

  // "Dark sky" segments only — dawn's palette is already a bright pastel
  // sunrise glow by the time its keyframe starts, so stars stay off there.
  const isNight = colors.segment === 'night' || colors.segment === 'dusk';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        // The WebGL canvas takes a few seconds to compile its shader and
        // load the environment map before it paints a first frame — this
        // plain CSS gradient in the same colors shows immediately so
        // visitors see the right mood right away instead of a blank flash,
        // and just sits behind the canvas once it's ready.
        background: `linear-gradient(135deg, ${colors.color1}, ${colors.color2}, ${colors.color3})`,
      }}
    >
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        pixelDensity={1}
        fov={45}
        // ShaderGradientCanvas lazy-loads via IntersectionObserver by
        // default, which doesn't reliably detect a `position: fixed`
        // full-viewport background as "in view" — without this it silently
        // never renders a single frame (no error, empty canvas forever).
        lazyLoad={false}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={1.5}
          cAzimuthAngle={60}
          cDistance={7.1}
          cPolarAngle={90}
          cameraZoom={15.3}
          color1={colors.color1}
          color2={colors.color2}
          color3={colors.color3}
          embedMode="off"
          envPreset="dawn"
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          positionX={0}
          positionY={-0.15}
          positionZ={0}
          reflection={0.1}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="sphere"
          uAmplitude={1.4}
          uDensity={1.1}
          uFrequency={5.5}
          uSpeed={0.1}
          uStrength={0.4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      <WeatherOverlay condition={condition} isNight={isNight} />
    </div>
  );
};

export default ShaderBackground;
