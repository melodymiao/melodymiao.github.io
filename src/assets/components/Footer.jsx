import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-wrap'>
      <span className='footer-copyright'>
        © 2025 · Designed & coded with the help of my cat
      </span>
      <div className='footer-links'>
        <a href="mailto:melodymiao001@gmail.com" target='_blank' rel='noreferrer' className="footer-link">
          Email
        </a>
        <a href="https://www.linkedin.com/in/melody-miao/" target='_blank' rel='noreferrer' className="footer-link">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;