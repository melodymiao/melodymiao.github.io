import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AugeneProject.css';
import './Projects.css';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import AugeneThumb from '../images/portfolio-grid/augene thumbnail.jpg';
import AugeneLogo from '../assets/images/augene/Augene Logo.jpg';
import SkincareProducts from '../assets/images/augene/skincare products.jpg';
import Competitors from '../assets/images/augene/augene competitors.jpg';
import CompetitiveAnalysis from '../assets/images/augene/competitive analysis.jpg';
import Persona from '../assets/images/augene/persona.jpg';
import HMW from '../assets/images/augene/hmw.jpg';
import AugeneMockup from '../assets/images/augene/augene mockup.png';
import DashboardPreview from '../assets/images/augene/dashboard preview.jpg';
import Dashboard1 from '../assets/images/augene/dashboard 1.jpg';
import Dashboard2 from '../assets/images/augene/kap dashboard 2.gif';
import Dashboard3 from '../assets/images/augene/dashboard 3.gif';
import Dashboard4 from '../assets/images/augene/dashboard 4.gif';
import Picnic from '../assets/images/augene/augene picnic.jpg';

const CHAPTERS = [
  { id: 'overview',   label: 'Overview'   },
  { id: 'research',   label: 'Research'   },
  { id: 'synthesis',  label: 'Synthesis'  },
  { id: 'solution',   label: 'Solution'   },
  { id: 'reflection', label: 'Reflection' },
];

const AugeneProject = () => {
  const [activeId, setActiveId] = useState('overview');
  const observerRef = useRef(null);

  const handleLinkClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const sections = CHAPTERS.map(c => document.getElementById(c.id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // find the topmost intersecting section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(s => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <div className="aug-hero">
        <img src={AugeneThumb} alt="Augene Beauty project" />
      </div>

      {/* ── Body: sidebar + content ── */}
      <div className="aug-body">

        {/* Sticky sidebar */}
        <nav className="aug-sidebar">
          {CHAPTERS.map(c => (
            <button
              key={c.id}
              className={`aug-sidebar-link ${activeId === c.id ? 'active' : ''}`}
              onClick={() => scrollTo(c.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              {c.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="aug-content">

          {/* ── OVERVIEW ── */}
          <section id="overview" className="aug-chapter">

            {/* Project intro */}
            <div className="aug-project-intro">
              <h1 className="aug-overview-title">Augene Beauty</h1>
              <div className="aug-overview-meta">
                <div className="aug-meta-group">
                  <h3>Role</h3>
                  <p>Research</p>
                  <p>Design</p>
                  <p>Prototype</p>
                </div>
                <div className="aug-meta-group">
                  <h3>Timeline</h3>
                  <p>June 2024 –</p>
                  <p>August 2024</p>
                  <p>(10 weeks)</p>
                </div>
              </div>
              <p className="aug-overview-desc">
                During my 10-week internship at Augene Beauty, I designed a new website and
                created a comprehensive dashboard to allow clinicians and patients to view results
                about their skin, learn about specific skincare ingredients for their skin concerns,
                and discover the most optimal skincare regimen catered to their skin microbiome
                and lifestyle.
              </p>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>Background</h2>
                <p>
                  Augene Beauty is the "23andMe" for the facial microbiome — helping clinicians
                  make informed skincare recommendations using microbiome analysis.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={AugeneLogo} alt="Augene logo" />
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>Problem</h2>
                <p>
                  Skincare recommendations online are often generic and fail to account for
                  the unique microbiome of an individual's skin, leading to ineffective
                  treatments and frustration.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={SkincareProducts} alt="Skincare products" />
              </div>
            </div>
          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="aug-chapter">
            <p className="aug-chapter-label">Research</p>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>Competitor Analysis</h2>
                <p>
                  I analyzed multiple skin testing companies to understand how they delivered
                  results to users — looking at testing methods, data presentation, and
                  recommendation flows.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Competitors} alt="Competitor logos" />
              </div>
            </div>

            <div className="aug-showcase">
              <img src={CompetitiveAnalysis} alt="Competitive analysis matrix" />
              <span className="aug-showcase-caption">Competitive analysis across skin testing companies</span>
            </div>
          </section>

          {/* ── SYNTHESIS ── */}
          <section id="synthesis" className="aug-chapter">
            <p className="aug-chapter-label">Synthesis</p>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>Personas</h2>
                <p>
                  I created personas to represent clinicians and patients to understand their
                  distinct needs when interacting with the Augene app.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Persona} alt="User personas" />
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>How Might We</h2>
                <p>
                  From research, I identified three core pain points and translated them into
                  "How Might We" questions to guide design decisions.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={HMW} alt="How Might We questions" />
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>Hypothesis</h2>
                <p>
                  By offering a place to view skin results, navigate a skincare routine, and
                  learn about recommendations, Augene Beauty can stand out among its
                  competitors.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={AugeneMockup} alt="Early mockup" />
              </div>
            </div>
          </section>

          {/* ── SOLUTION ── */}
          <section id="solution" className="aug-chapter">
            <div className="aug-solution-intro">
              <span className="aug-chapter-label">Solution</span>
              <h1 className="aug-solution-name">Augene Dashboard</h1>
              <p className="aug-solution-tagline">Skincare, simplified</p>
            </div>

            <div className="aug-showcase">
              <img src={DashboardPreview} alt="Dashboard overview" />
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <p className="aug-feature-label">Home</p>
                <h2 className="aug-feature-title">Skin Health Summary</h2>
                <p className="aug-feature-desc">
                  View skin diagnostics, top skincare ingredients, and clinician notes to
                  understand the skin's needs at a glance.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Dashboard1} alt="Dashboard home screen" />
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <p className="aug-feature-label">Skin Analysis</p>
                <h2 className="aug-feature-title">Learn About Your Skin</h2>
                <p className="aug-feature-desc">
                  Understand your skin's risks and how to protect it from potential conditions.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Dashboard2} alt="Skin analysis screen" />
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <p className="aug-feature-label">Products for You</p>
                <h2 className="aug-feature-title">The Best Products for Your Skin</h2>
                <p className="aug-feature-desc">
                  Compare and select products tailored to your skin profile and routine.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Dashboard3} alt="Products screen" />
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <p className="aug-feature-label">Build Your Routine</p>
                <h2 className="aug-feature-title">Your Personalized Routine</h2>
                <p className="aug-feature-desc">
                  See your step-by-step, personalized skincare routine built around your
                  microbiome data.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Dashboard4} alt="Routine builder screen" />
              </div>
            </div>
          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="aug-chapter">
            <p className="aug-chapter-label">Reflection</p>

            <div className="aug-row">
              <div className="aug-row-label">
                <h2>Empathizing with the User</h2>
                <p>
                  Designing this dashboard required deeply empathizing with skincare users.
                  Instead of a rigid routine, I designed a routine builder that lets users
                  balance budget and personal preferences.
                </p>
                <p style={{ marginTop: '16px' }}>
                  Drawing on my own confusion as a skincare beginner, I added clear AM/PM
                  labeling and routine ordering — details I likely would have missed without
                  that lived experience.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={Picnic} alt="Augene team picnic" />
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* ── Next project ── */}
      <div className="aug-next">
        <Link className="next-project-link" to="/checkt" onClick={handleLinkClick}>
          <div className="next-project-text">
            <h3 className="project-stage">Next Project</h3>
            <h1 className="project-title">CHECKT</h1>
          </div>
          <span className="right-arrow">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default AugeneProject;