import React, { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import './Header.css';
import Resume from '../documents/Melody Miao - Product Designer.pdf'

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
          <HashLink className='nav-button' to="/#work" smooth>
            Work
          </HashLink>
          <Link to="/about" className='nav-button' onClick={scrollToTop}>
            About
          </Link>
          <a href={Resume} className='nav-button' target='_blank'>
            Resume
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;