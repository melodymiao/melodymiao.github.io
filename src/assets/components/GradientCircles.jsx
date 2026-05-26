import React, { useEffect, useRef } from 'react';
import './GradientCircles.css';

const GradientCircles = () => {
  const orbRef = useRef(null);
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

  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="gradient1" />
        <div className="gradient2" />
        <div className="gradient3" />
        <div className="gradient4" />
        <div className="gradient5" />
      </div>
      {/* cursor-following white glow orb */}
      <div className="cursor-orb" ref={orbRef} />
    </div>
  );
};

export default GradientCircles;