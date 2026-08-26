import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import HomeNav from '../assets/components/HomeNav';
import SiteFooter from '../assets/components/SiteFooter';
import AugeneThumb from '../assets/images/portfolio-grid/augene thumbnail.jpg';
import SkincareProducts from '../assets/images/augene/skincare products.png';
import CompetitiveAnalysis from '../assets/images/augene/competitive analysis.jpg';
import Persona1 from '../assets/images/augene/persona-1.jpg';
import Persona2 from '../assets/images/augene/persona-2.jpg';
import HMW from '../assets/images/augene/hmw.jpg';
import AugeneMockup from '../assets/images/augene/augene mockup.png';
import LoFi1 from '../assets/images/augene/lofi 1.png';
import LoFi2 from '../assets/images/augene/lofi 2.png';
import LoFi2b from '../assets/images/augene/lofi 2b.png';
import HiFi1 from '../assets/images/augene/hifi 1.png';
import DashboardPreview from '../assets/images/augene/dashboard preview.jpg';
import Dashboard1 from '../assets/images/augene/dashboard 1.jpg';
import Dashboard2 from '../assets/images/augene/kap dashboard 2.gif';
import Dashboard3 from '../assets/images/augene/dashboard 3.gif';
import Dashboard4 from '../assets/images/augene/dashboard 4.gif';
import Picnic from '../assets/images/augene/augene-picnic.jpg';

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
    <div className="augene-case-study theme-plain">
      <HomeNav />

      {/* ── Body: sidebar + content ── */}
      <div className="proj-body">

        {/* Sticky sidebar */}
        <nav className="proj-sidebar">
          <div className="proj-sidebar-nav">
            {CHAPTERS.map(c => (
              <button
                key={c.id}
                className={`proj-sidebar-link ${activeId === c.id ? 'active' : ''}`}
                onClick={() => scrollTo(c.id)}
                style={{ background: activeId === c.id ? undefined : 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="proj-sidebar-footer">
            <a className="proj-sidebar-project-link" href="https://drank.vercel.app" target="_blank" rel="noreferrer">
              <span className="proj-sidebar-project-arrow">←</span> Previous: Drank
            </a>
            <Link className="proj-sidebar-project-link" to="/checkt" onClick={handleLinkClick}>
              <span className="proj-sidebar-project-arrow">→</span> Next: Checkt
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="proj-content">

          {/* ── Hero ── */}
          <div className="proj-hero">
            <img src={AugeneThumb} alt="Augene Beauty project" />
          </div>

          {/* ── OVERVIEW ── */}
          <section id="overview" className="proj-chapter">

            <div className="proj-project-intro">
              <div>
                <span className="proj-project-eyebrow">Augene Beauty</span>
                <h1 className="proj-overview-title">Simplifying skincare for patients &amp; clinics</h1>
              </div>
              <div className="proj-overview-meta">
                <div className="proj-meta-group">
                  <h3>Role</h3>
                  <p>Research</p>
                  <p>Design</p>
                  <p>Prototype</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Team</h3>
                  <p>Solo designer</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Skills</h3>
                  <p>User Research</p>
                  <p>Product Design</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Timeline</h3>
                  <p>June – August 2024</p>
                  <p>(10 weeks)</p>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Overview</span>
                <h2>The 23andMe for your skin</h2>
              </div>
              <p>
                Augene Beauty analyzes the facial microbiome to help clinicians make
                evidence-based skincare recommendations, rather than generic advice. My job was
                to design a product for patients that complex data feel personal and actionable.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={SkincareProducts} alt="Skincare products" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Generic advice doesn't work for everyone</h2>
              </div>
              <p>
                The skincare internet is full of recommendations, but most are one-size-fits-all. For people with
                complex or sensitive skin, this noise is overwhelming and confusing. Augene's
                microbiome analysis offers something personalized and useful, but only if the results
                are actually understandable and actionable for the person reading them.
              </p>
            </div>

          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Research</span>
                <h2>What are competitors missing?</h2>
              </div>
              <p>
                I analyzed skin testing companies across how they collected
                samples, displayed results, made product recommendations,
                and educated users. Most delivered a PDF report or a simple score
                without actionable steps.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={CompetitiveAnalysis} alt="Competitive analysis matrix" />
              </div>
              <span className="proj-showcase-caption">Competitive analysis across skin testing companies</span>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Three gaps worth designing for</h2>
              </div>
              <div className="proj-insight-band">
                <div className="proj-insight-list">
                  <div className="proj-insight">
                    <div className="proj-insight-top">
                      <span className="proj-insight-number">01</span>
                      <p className="proj-insight-title">Results without context</p>
                    </div>
                    <div className="proj-insight-icon" role="img" aria-label="Magnifying glass icon">🔍</div>
                    <p className="proj-insight-desc">Competitors showed scores but didn't explain what to do about them</p>
                  </div>
                  <div className="proj-insight">
                    <div className="proj-insight-top">
                      <span className="proj-insight-number">02</span>
                      <p className="proj-insight-title">No path to products</p>
                    </div>
                    <div className="proj-insight-icon" role="img" aria-label="Compass icon">🧭</div>
                    <p className="proj-insight-desc">Analysis and product recommendations weren't connected</p>
                  </div>
                  <div className="proj-insight">
                    <div className="proj-insight-top">
                      <span className="proj-insight-number">03</span>
                      <p className="proj-insight-title">One-time, not ongoing</p>
                    </div>
                    <div className="proj-insight-icon" role="img" aria-label="Refresh/loop icon">🔄</div>
                    <p className="proj-insight-desc">Most experiences were reports you read once with progress tracking</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* ── SYNTHESIS ── */}
          <section id="synthesis" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Synthesis</span>
                <h2>Two users, very different needs</h2>
              </div>
              <p>
                The Augene dashboard serves two distinct users: the clinician who interprets
                results and the patient who acts on them. I built personas for both to keep
                their different mental models visible throughout the design process.
              </p>
            </div>

            <div className="aug-persona-row">
              <div className="aug-persona-page">
                <img src={Persona1} alt="Clinician persona" />
                <span className="aug-persona-caption">clinician persona</span>
              </div>
              <div className="aug-persona-page">
                <img src={Persona2} alt="Patient persona" />
                <span className="aug-persona-caption">patient persona</span>
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>Three pain points, three design questions</h2>
                </div>
                <p>
                  From the competitor gaps and persona needs, I distilled three core problems
                  and framed each as a "How Might We" question.
                </p>
              </div>
              <div className="proj-row-content">
                <img src={HMW} alt="How Might We questions" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Design principles before touching Figma</h2>
              </div>
              <p>Before wireframing, I established three principles to guide every decision:</p>
              <div className="proj-insight-band">
                <div className="proj-insight-list">
                  <div className="proj-insight">
                    <div className="proj-insight-top">
                      <span className="proj-insight-number">01</span>
                      <p className="proj-insight-title">Translate, don't display</p>
                    </div>
                    <div className="proj-insight-icon" role="img" aria-label="Speech balloon icon">💬</div>
                    <p className="proj-insight-desc">Raw scores mean nothing to most patients. Every data point needed to be reframed as something actionable.</p>
                  </div>
                  <div className="proj-insight">
                    <div className="proj-insight-top">
                      <span className="proj-insight-number">02</span>
                      <p className="proj-insight-title">Connect results to routine</p>
                    </div>
                    <div className="proj-insight-icon" role="img" aria-label="Link icon">🔗</div>
                    <p className="proj-insight-desc">The experience needed to feel like one continuous flow from test results to understanding products.</p>
                  </div>
                  <div className="proj-insight">
                    <div className="proj-insight-top">
                      <span className="proj-insight-number">03</span>
                      <p className="proj-insight-title">Give patients control</p>
                    </div>
                    <div className="proj-insight-icon" role="img" aria-label="Control knobs icon">🎛️</div>
                    <p className="proj-insight-desc">Clinician recommendations should be a starting point, not a prescription.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 1: data visualization */}
            <div className="aug-decision">
              <div className="aug-decision-label">
                <span className="aug-decision-tag">Decision 01</span>
                <h3 className="aug-decision-title">Gauge meters instead of a pie chart</h3>
                <p>
                  Users want to know "<em>Is my water level low? Is my oil level
                  normal?</em>" The earlier pie chart design compares results against other metrics. 
                  Meters answer that directly by showing each metric against a healthy
                  range.
                </p>
              </div>
              <div className="aug-decision-images">
                <div className="aug-decision-img-group">
                  <img src={LoFi1} alt="Early wireframe with pie chart" />
                  <span className="aug-decision-caption">Early wireframe</span>
                </div>
                <div className="aug-decision-img-group">
                  <img src={HiFi1} alt="Revised design with gauge meters" />
                  <span className="aug-decision-caption">Revised direction</span>
                </div>
              </div>
            </div>

            {/* Decision 2: page structure */}
            <div className="aug-decision">
              <div className="aug-decision-label">
                <span className="aug-decision-tag">Decision 02</span>
                <h3 className="aug-decision-title">Four separate pages</h3>
                <p>
                  Users needed space to compare options, read
                  ingredient lists, and understand why something was recommended for their skin.
                  I split the dashboard into four dedicated pages: Home, Skin Analysis, Products for You,
                  and Build Your Routine.
                </p>
              </div>
              <div className="aug-decision-images">
                <div className="aug-decision-img-group">
                  <img src={LoFi2} alt="Early wireframe: skin analysis page" />
                  <span className="aug-decision-caption">Skin Analysis wireframe</span>
                </div>
                <div className="aug-decision-img-group">
                  <img src={LoFi2b} alt="Revised wireframe: expanded skin analysis with detail panel" />
                  <span className="aug-decision-caption">With detail panel added</span>
                </div>
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>A dashboard that does more than show results</h2>
                </div>
                <p>
                  A dashboard doesn't just display test data, it creates
                  a place where patients could understand their skin, explore product
                  options, and follow a personalized routine.
                </p>
              </div>
              <div className="proj-row-content">
                <img src={AugeneMockup} alt="Early dashboard mockup" />
              </div>
            </div>

          </section>

          {/* ── SOLUTION ── */}
          <section id="solution" className="proj-chapter">

            <div className="proj-solution-intro">
              <span className="proj-chapter-label">Solution</span>
              <h1 className="proj-solution-name">Augene Dashboard</h1>
              <p className="proj-solution-tagline">Skincare, simplified</p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DashboardPreview} alt="Dashboard full overview" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <h2 className="proj-feature-title">Your skin, at a glance</h2>
              </div>
              <p className="proj-feature-desc">
                The home screen is designed to help quickly understand the user's current skin condition.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={Dashboard1} alt="Dashboard home screen" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <h2 className="proj-feature-title">Understand the risks, not just the numbers</h2>
              </div>
              <p className="proj-feature-desc">
                Understand what conditions your skin is at risk for, and what you can do about each one.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={Dashboard2} alt="Skin analysis screen" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <h2 className="proj-feature-title">Recommendations to compare</h2>
              </div>
              <p className="proj-feature-desc">
                Instead of a single suggested product, users can browse and compare price, ingredients,
                and reviews before committing to a routine.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={Dashboard3} alt="Product recommendations screen" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <h2 className="proj-feature-title">A routine built around your life</h2>
              </div>
              <p className="proj-feature-desc">
                The flexible routine builder lets users select products with AM/PM
                labeling and step by step instructions built in.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={Dashboard4} alt="Routine builder screen" />
              </div>
            </div>

          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Reflection</span>
                <h2>Designing from the inside out</h2>
              </div>
              <p>
                The most useful thing I brought to this project wasn't a design process,
                it was having been a confused skincare beginner myself. That experience
                pushed me toward AM/PM labels, flexible routine ordering, and plain-language
                explanations that I wouldn't have prioritized otherwise.
              </p>
              <p>
                If I had more time, I would have run usability tests with real patients,
                especially with the routine builder, which had the most interaction
                complexity. 
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media aug-picnic-media">
                <img src={Picnic} alt="Augene team at a picnic" />
              </div>
            </div>

          </section>

        </main>
      </div>

      <SiteFooter />
    </div>
  );
};

export default AugeneProject;