import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className='header-section'>
      <div className='header-wrap'>

        <Link to="/" className="nav-wordmark" onClick={scrollToTop}>
          Melody Miao
        </Link>

        <button className='menu-toggle' onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
        <a className='nav-button' href="#work" onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/#work';
          }
        }}>Work</a>
          <Link to="/about" className='nav-button' onClick={scrollToTop}>
            About
          </Link>
          <a href="/Melody_Miao_Product_Designer.pdf" className='nav-button' target='_blank'>
            Resume
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;