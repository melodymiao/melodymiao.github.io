import React from 'react';
import './GradientToggle.css';

const GradientToggle = ({ checked, onChange }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label="Toggle moving gradient background"
    className="gradient-toggle"
    onClick={() => onChange(!checked)}
  >
    <span className="gradient-toggle-track">
      <span className="gradient-toggle-knob" />
    </span>
  </button>
);

export default GradientToggle;
