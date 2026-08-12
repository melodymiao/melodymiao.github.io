import React, { useEffect, useRef } from 'react';
import { getPaletteForHour, paletteToCssVars } from '../lib/gradientPalette';
import './GradientCircles.css';

// Most visitors only load the page once, so tying colors to real wall-clock
// time would make the "moving gradient" look static during any one visit.
// This fast-forwards a virtual clock through a full 24h palette lap every
// DAY_CYCLE_MS, starting from the visitor's actual local hour, and writes
// the resulting CSS custom properties straight to the DOM every frame
// (bypassing React state/re-renders, same as the cursor-orb below) so the
// color drift stays smooth instead of stepping visibly once a second.
const DAY_CYCLE_MS = 4 * 60 * 1000;

// parallaxFactor: fraction of scroll distance the background drifts by.
// 0 (default) keeps it fully fixed — already the case via `position: fixed`
// below. Bump to e.g. 0.15 for a subtle "moves slower than content" effect.
const GradientCircles = ({ parallaxFactor = 0 }) => {
  const bgRef   = useRef(null);
  const orbRef  = useRef(null);
  const target  = useRef({ x: typeof window !== 'undefined' ? window.innerWidth  / 2 : 0,
                            y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const current = useRef({ x: target.current.x, y: target.current.y });
  const rafId   = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.07);
      current.current.y = lerp(current.current.y, target.current.y, 0.07);
      if (orbRef.current) {
        orbRef.current.style.left = `${current.current.x}px`;
        orbRef.current.style.top  = `${current.current.y}px`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    const startHour = now.getHours() + now.getMinutes() / 60;
    const startedAt = performance.now();
    let paletteRafId;

    const tick = () => {
      const elapsedMs = performance.now() - startedAt;
      const virtualHour = startHour + (elapsedMs / DAY_CYCLE_MS) * 24;
      const vars = paletteToCssVars(getPaletteForHour(virtualHour));
      if (bgRef.current) {
        for (const key in vars) {
          bgRef.current.style.setProperty(key, vars[key]);
        }
      }
      paletteRafId = requestAnimationFrame(tick);
    };

    paletteRafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(paletteRafId);
  }, []);

  useEffect(() => {
    if (!parallaxFactor) return undefined;

    let rafId2;
    const onScroll = () => {
      rafId2 = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * parallaxFactor}px)`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId2);
    };
  }, [parallaxFactor]);

  return (
    <div className="gradient-bg" ref={bgRef}>
      <div className="gradients-container">
        <div className="gradient1" />
        <div className="gradient2" />
        <div className="gradient3" />
        <div className="gradient4" />
        <div className="gradient5" />
      </div>
      {/* frosted white wash — lives on this fixed, viewport-sized layer
          so it covers the page uniformly regardless of scroll height */}
      <div className="gradient-overlay" />
      {/* cursor-following white glow orb */}
      <div className="cursor-orb" ref={orbRef} />
    </div>
  );
};

export default GradientCircles;
