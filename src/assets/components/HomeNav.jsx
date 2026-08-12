import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeNav.css';

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverCard, setIsOverCard] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // The white project-grid card scrolls up underneath this fixed nav —
  // once it reaches the nav's bottom edge, white nav text is unreadable
  // against it, so switch to dark text for as long as they overlap.
  useEffect(() => {
    const card = document.querySelector('.work-card');
    if (!card) return undefined;

    let rafId;
    const checkOverlap = () => {
      const nav = navRef.current;
      if (!nav) return;
      const navBottom = nav.getBoundingClientRect().bottom;
      const cardTop = card.getBoundingClientRect().top;
      setIsOverCard(cardTop <= navBottom);
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(checkOverlap);
    };

    checkOverlap();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className={`home-nav ${isOverCard ? 'is-over-card' : ''}`} ref={navRef}>
      <div className="home-nav-pill">
        <Link to="/" className="home-nav-wordmark" onClick={scrollToTop}>
          Melody Miao
        </Link>

        <button className="home-nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <div className={`home-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a
            className="home-nav-link"
            href="#work"
            onClick={() => {
              setIsMenuOpen(false);
              if (window.location.pathname !== '/') {
                window.location.href = '/#work';
              }
            }}
          >
            Work
          </a>
          <Link to="/about" className="home-nav-link" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}>
            About
          </Link>
          <a
            href="/Melody_Miao_Product_Designer.pdf"
            className="home-nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomeNav;
