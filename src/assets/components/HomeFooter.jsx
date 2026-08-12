import React from 'react';
import './HomeFooter.css';

const HomeFooter = () => (
  <footer className="home-footer">
    <div className="home-footer-wrap">
      <span className="home-footer-copyright">
        Designed &amp; coded with the help of my cat
      </span>
      <div className="home-footer-links">
        <a href="mailto:melodymiao001@gmail.com" target="_blank" rel="noreferrer" className="home-footer-link">
          Email
        </a>
        <a href="https://www.linkedin.com/in/melody-miao/" target="_blank" rel="noreferrer" className="home-footer-link">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default HomeFooter;
