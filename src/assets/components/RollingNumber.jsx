import React, { useEffect, useRef, useState } from 'react';
import './rollingAnimations.css';

const ROTATE_MS = 420;
const HOP_MS = 90;

let uid = 0;

const RollingChar = ({ char, fast }) => {
  const [current, setCurrent] = useState(() => ({ char, id: uid++, dir: 'up', initial: true }));
  const [outgoing, setOutgoing] = useState(null);
  const prevCharRef = useRef(char);
  const currentRef = useRef(current);
  const timerRef = useRef(null);
  const fastRef = useRef(fast);
  fastRef.current = fast;

  useEffect(() => {
    if (char === prevCharRef.current) return;
    const bothDigits = /\d/.test(char) && /\d/.test(prevCharRef.current);
    const dir = bothDigits && Number(char) < Number(prevCharRef.current) ? 'down' : 'up';
    prevCharRef.current = char;

    const prev = currentRef.current;
    const next = { char, id: uid++, dir, initial: false };
    currentRef.current = next;
    setOutgoing(prev);
    setCurrent(next);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOutgoing(null), fastRef.current ? HOP_MS : ROTATE_MS);
  }, [char]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <span className={`rolling-viewport ${fast ? 'is-fast' : ''}`}>
      {outgoing && (
        <span key={outgoing.id} className={`rolling-slot rolling-out-${outgoing.dir}`}>
          {outgoing.char}
        </span>
      )}
      <span
        key={current.id}
        className={`rolling-slot ${current.initial ? '' : `rolling-enter-${current.dir}`}`}
      >
        {current.char}
      </span>
    </span>
  );
};

// Renders a numeric string (e.g. "09:51" or "76") as one independently
// rolling slot per character — each digit slides up when its value
// increases and down when it decreases, like an odometer wheel.
// Non-digit characters (":", "-") just swap in place.
const RollingNumber = ({ value, fast }) => (
  <span className="rolling-number">
    {value.split('').map((char, i) => (
      <RollingChar key={i} char={char} fast={fast} />
    ))}
  </span>
);

export default RollingNumber;
