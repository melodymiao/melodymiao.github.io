import React, { useEffect, useRef, useState } from 'react';
import './rollingAnimations.css';

const ROTATE_MS = 420;
const HOP_MS = 90;

let uid = 0;

// A whole word/phrase that slides up-and-out / up-and-in when it changes —
// its own independent animated instance, decoupled from any other rolling
// element on the page (e.g. the city name and the weather condition word
// each get their own WordSlide, so they never look like one synced block).
//
// Width is sized in `ch` (reliable since every piece of text here renders
// in a monospace font) and held to the wider of the outgoing/incoming word
// while both are on screen, then eased back down once the outgoing one is
// gone — so the surrounding text never snaps sideways when a shorter or
// longer word rolls in, it resizes smoothly alongside the roll.
const WordSlide = ({ value, fast, className = '' }) => {
  const [current, setCurrent] = useState(() => ({ value, id: uid++, initial: true }));
  const [outgoing, setOutgoing] = useState(null);
  const currentRef = useRef(current);
  const timerRef = useRef(null);
  const fastRef = useRef(fast);
  fastRef.current = fast;

  useEffect(() => {
    if (value === currentRef.current.value) return;
    const prev = currentRef.current;
    const next = { value, id: uid++, initial: false };
    currentRef.current = next;
    setOutgoing(prev);
    setCurrent(next);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOutgoing(null), fastRef.current ? HOP_MS : ROTATE_MS);
  }, [value]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const chars = Math.max(current.value.length, outgoing ? outgoing.value.length : 0);

  return (
    <span
      className={`rolling-viewport rolling-word-viewport ${fast ? 'is-fast' : ''} ${className}`}
      style={{ width: `${chars}ch` }}
    >
      {outgoing && (
        <span key={outgoing.id} className="rolling-slot rolling-out-up">
          {outgoing.value}
        </span>
      )}
      <span
        key={current.id}
        className={`rolling-slot ${current.initial ? '' : 'rolling-enter-up'}`}
      >
        {current.value}
      </span>
    </span>
  );
};

export default WordSlide;
