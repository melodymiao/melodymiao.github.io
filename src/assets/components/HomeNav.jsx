import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeNav.css';

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverCard, setIsOverCard] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Nav is `position: fixed` (see HomeNav.css) so it stays pinned through
  // scroll on every page, not just Home — this listener always attaches
  // and drives the shrink-on-scroll pill width (`isScrolled`); the
  // white-project-grid-card overlap check (`isOverCard`, only relevant
  // on Home, where white nav text would go unreadable against the card)
  // just no-ops when `.work-card` isn't on the page.
  useEffect(() => {
    const card = document.querySelector('.work-card');
    let rafId;
    const check = () => {
      setIsScrolled(window.scrollY > 8);
      const nav = navRef.current;
      if (card && nav) {
        const navBottom = nav.getBoundingClientRect().bottom;
        const cardTop = card.getBoundingClientRect().top;
        setIsOverCard(cardTop <= navBottom);
      }
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(check);
    };

    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      className={`home-nav ${isOverCard ? 'is-over-card' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
      ref={navRef}
    >
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
            className="home-nav-link home-nav-resume"
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
