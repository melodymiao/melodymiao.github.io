import React, { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import logo from '../images/home/mm waves.svg'
import './Header.css';
import Resume from '../documents/Melody Miao - Product Designer.pdf'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
    <header className='header-section'>
      <div className='header-wrap'>
        <Link to="/" id="logo" onClick={scrollToTop}>
          <img id='logo' src={logo} />
        </Link>
        
        <button className='menu-toggle' onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
          <HashLink className='nav-button' to="/#work" smooth>
            <div className='nav-text'>Work</div>
          </HashLink>

          <Link to="/about" className='nav-button' onClick={scrollToTop}>
            <div className='nav-text'>About</div>
          </Link>

          <a href={Resume} className='nav-button' target='_blank'>
            <div className='nav-text'>Resume</div>
          </a>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
