import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AugeneProject.css';
import './Projects.css';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import AugeneThumb from '../assets/images/portfolio-grid/augene thumbnail.jpg';
import SkincareProducts from '../assets/images/augene/skincare products.png';
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
                  <h3>Team</h3>
                  <p>Solo designer</p>
                </div>
                <div className="aug-meta-group">
                  <h3>Skills</h3>
                  <p>User Research</p>
                  <p>Product Design</p>
                </div>
                <div className="aug-meta-group">
                  <h3>Timeline</h3>
                  <p>June – August 2024</p>
                  <p>(10 weeks)</p>
                </div>
              </div>
            </div>

            <div className="aug-text-block">
              <div className="aug-heading">
                <span className="aug-chapter-label">Overview</span>
                <h2>The 23andMe for your skin</h2>
              </div>
              <p>
                Augene Beauty analyzes the facial microbiome to help clinicians make
                evidence-based skincare recommendations, rather than generic advice,
                toward routines that actually match each patient's biology. My job was
                to design the product that sits between the lab results and the patient 
                and make complex data feel clear, personal, and actionable.
              </p>
            </div>

            <div className="aug-showcase">
              <img src={SkincareProducts} alt="Skincare products" />
            </div>

            <div className="aug-text-block">
              <div className="aug-heading">
                <h2>Generic advice doesn't work for everyone</h2>
              </div>
              <p>
                The skincare internet is full of recommendations, but most are one-size-fits-all 
                (best products for oily skin, best routine for beginners, etc.). For people with
                complex or sensitive skin, this noise is overwhelming and confusing. Augene's
                microbiome analysis offers something personalized and useful, but only if the results
                are actually understandable and actionable for the person reading them.
              </p>
              <p>
                The question I was designing for wasn't <em>"how do we show test results?"</em>,
                it was <em>"how do we make someone feel confident about their skin and their routines?"</em>
              </p>
            </div>

          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="aug-chapter">

            <div className="aug-text-block">
              <div className="aug-heading">
                <span className="aug-chapter-label">Research</span>
                <h2>What are competitors missing?</h2>
              </div>
              <p>
                I analyzed skin testing companies across four dimensions: how they collected
                samples, how they displayed results, how they made product recommendations,
                and how they educated users. Most delivered a PDF report or a simple score 
                without next steps or something to build understanding over time.
              </p>
            </div>

            <div className="aug-showcase">
              <img src={CompetitiveAnalysis} alt="Competitive analysis matrix" />
              <span className="aug-showcase-caption">Competitive analysis across skin testing companies</span>
            </div>

            <div className="aug-text-block">
              <div className="aug-heading">
                <h2>Three gaps worth designing for</h2>
              </div>
              <div className="aug-insight-list">
                <div className="aug-insight">
                  <span className="aug-insight-number">01</span>
                  <div>
                    <p className="aug-insight-title">Results without context</p>
                    <p>Competitors showed scores but didn't explain what they meant or what to do about them. Patients were left to interpret data with no medical background.</p>
                  </div>
                </div>
                <div className="aug-insight">
                  <span className="aug-insight-number">02</span>
                  <div>
                    <p className="aug-insight-title">No path to products</p>
                    <p>Analysis and product recommendations weren't connected or didn't exist at all. The leap from "your skin is dry" to "here's what to buy" was left to the user.</p>
                  </div>
                </div>
                <div className="aug-insight">
                  <span className="aug-insight-number">03</span>
                  <div>
                    <p className="aug-insight-title">One-time, not ongoing</p>
                    <p>Most experiences felt like a report you read once. There was no reason to track your skin progress over time.</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* ── SYNTHESIS ── */}
          <section id="synthesis" className="aug-chapter">

            <div className="aug-text-block">
              <div className="aug-heading">
                <span className="aug-chapter-label">Synthesis</span>
                <h2>Two users, very different needs</h2>
              </div>
              <p>
                The Augene dashboard serves two distinct users: the clinician who interprets
                results and the patient who acts on them. I built personas for both to keep
                their different mental models visible throughout the design process:
                a clinician wants density and precision, and a patient needs clarity and confidence.
              </p>
            </div>

            <div className="aug-showcase">
              <img src={Persona} alt="User personas for clinician and patient" />
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <div className="aug-heading">
                  <h2>Three pain points, three design questions</h2>
                </div>
                <p>
                  From the competitor gaps and persona needs, I distilled three core problems
                  and framed each as a "How Might We" question to keep design decisions
                  grounded in real friction rather than assumptions.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={HMW} alt="How Might We questions" />
              </div>
            </div>

            <div className="aug-text-block">
              <div className="aug-heading">
                <h2>Design principles before touching Figma</h2>
              </div>
              <p>Before wireframing, I established three principles to guide every decision:</p>
              <div className="aug-principles">
                <div className="aug-principle">
                  <p className="aug-principle-title">Translate, don't display</p>
                  <p>Raw microbiome scores mean nothing to most patients. Every data point needed to be reframed as something actionable, such as a concern to address, an ingredient to look for, or a step to add.</p>
                </div>
                <div className="aug-principle">
                  <p className="aug-principle-title">Connect results to routine</p>
                  <p>The experience needed to feel like one continuous flow from test results to understanding to products to a routine.</p>
                </div>
                <div className="aug-principle">
                  <p className="aug-principle-title">Give patients control</p>
                  <p>Clinician recommendations should be a starting point, not a prescription. Users needed the flexibility to swap products, adjust steps, and build something that fit their real life.</p>
                </div>
              </div>
            </div>

            <div className="aug-row">
              <div className="aug-row-label">
                <div className="aug-heading">
                  <h2>A dashboard that does more than show results</h2>
                </div>
                <p>
                  A dashboard doesn't just display test data, it creates
                  a place where patients could understand their skin, explore product
                  options, and follow a personalized routine. This framing shaped
                  all screens that followed.
                </p>
              </div>
              <div className="aug-row-content">
                <img src={AugeneMockup} alt="Early dashboard mockup" />
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
              <img src={DashboardPreview} alt="Dashboard full overview" />
            </div>

            <div className="aug-feature">
              <div className="aug-feature-title-row">
                <span className="aug-feature-emoji">🏠</span>
                <h2 className="aug-feature-title">Everything you need to know, upfront</h2>
              </div>
              <p className="aug-feature-desc">
                Skin type, key concerns, top recommended ingredients, and a note from
                your clinician are all visible at first glance. The home screen is designed
                to help quickly understand the user's current skin condition.
              </p>
              <div className="aug-feature-img-wrap">
                <img className="aug-feature-img" src={Dashboard1} alt="Dashboard home screen" />
              </div>
            </div>

            <div className="aug-feature">
              <div className="aug-feature-title-row">
                <span className="aug-feature-emoji">🔬</span>
                <h2 className="aug-feature-title">Understand the risks, not just the numbers</h2>
              </div>
              <p className="aug-feature-desc">
                Rather than showing raw microbiome data, the analysis screen translates
                results into plain language. Understand what conditions your skin is at risk for,
                and what you can do about each one.
              </p>
              <div className="aug-feature-img-wrap">
                <img className="aug-feature-img" src={Dashboard2} alt="Skin analysis screen" />
              </div>
            </div>

            <div className="aug-feature">
              <div className="aug-feature-title-row">
                <span className="aug-feature-emoji">🛍️</span>
                <h2 className="aug-feature-title">Recommendations you can actually compare</h2>
              </div>
              <p className="aug-feature-desc">
                Instead of a single suggested product, users can browse and compare options
                filtered to their skin profile so they can compare price, ingredients,
                and reviews before committing to a routine.
              </p>
              <div className="aug-feature-img-wrap">
                <img className="aug-feature-img" src={Dashboard3} alt="Product recommendations screen" />
              </div>
            </div>

            <div className="aug-feature">
              <div className="aug-feature-title-row">
                <span className="aug-feature-emoji">📋</span>
                <h2 className="aug-feature-title">A routine built around your life, not a template</h2>
              </div>
              <p className="aug-feature-desc">
                The routine builder lets users select products step by step, with AM/PM
                labeling and ordering built in. It's flexible to fit different budgets
                while still reflecting what the microbiome data suggests.
              </p>
              <div className="aug-feature-img-wrap">
                <img className="aug-feature-img" src={Dashboard4} alt="Routine builder screen" />
              </div>
            </div>

          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="aug-chapter">

            <div className="aug-text-block">
              <div className="aug-heading">
                <span className="aug-chapter-label">Reflection</span>
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
                complexity. I made a lot of calls based on personal intuition and competitor
                gaps, and real user feedback would have stress-tested those assumptions in
                ways that design reviews alone couldn't.
              </p>
              <p>
                This internship also showed me how much good design depends on the people
                around you. The team's energy made it easier to push ideas further, ask the
                dumb questions, and actually enjoy the process.
              </p>
            </div>

            <div className="aug-showcase">
              <img src={Picnic} alt="Augene team at a picnic" />
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