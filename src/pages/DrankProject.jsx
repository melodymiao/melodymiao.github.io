import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './DrankProject.css';
import HomeNav from '../assets/components/HomeNav';
import HomeFooter from '../assets/components/HomeFooter';


import DrankHero        from '../assets/images/drank/hero.jpg';
import DrankCompAnalysis from '../assets/images/drank/subject-vs-share.jpg';
import DrankUpload      from '../assets/images/drank/upload step.gif';
import DrankRank        from '../assets/images/drank/rank step.gif';
import DrankShare       from '../assets/images/drank/share step.gif';
import DrankV0          from '../assets/images/drank/v0-prototypes.jpg';
import DrankWireframes  from '../assets/images/drank/initial-wireframes.jpg';
import DrankFigma       from '../assets/images/drank/figma-explorations.jpg';
import DrankSystem      from '../assets/images/drank/design-system.jpg';
import DrankAccordion   from '../assets/images/drank/accordion.jpg';
import DrankAccordionDemo   from '../assets/images/drank/accordion-layout.gif';
import DrankSugar       from '../assets/images/drank/sugar-ice-button-group.jpg';
import DrankLoading     from '../assets/images/drank/sticker-loading.gif';
import DrankHistory     from '../assets/images/drank/history-page.gif';

// ─── Replace these import paths with your actual image/gif files ───────────
// import DrankAutofill    from '../assets/images/drank/autofill.gif';
// import DrankFigma       from '../assets/images/drank/figma-explorations.jpg';
// ──────────────────────────────────────────────────────────────────────────

const CHAPTERS = [
  { id: 'overview',   label: 'Overview'   },
  { id: 'solution',   label: 'Solution'   },
  { id: 'process',    label: 'Process'    },
  { id: 'iterations', label: 'Iterations' },
  { id: 'reflection', label: 'Reflection' },
];

const DrankProject = () => {
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
    <div className="drank-case-study theme-plain">
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
            <Link className="proj-sidebar-project-link" to="/augene" onClick={handleLinkClick}>
              → Next: Augene
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="proj-content">

          {/* ── Hero ── */}
          <div className="proj-hero">
            <img src={DrankHero} alt="drank project" />
          </div>

          {/* ── OVERVIEW ── */}
          <section id="overview" className="proj-chapter">

            <div className="proj-project-intro">
              <div>
                <span className="proj-project-eyebrow">drank</span>
                <h1 className="proj-overview-title">Shareable drink rankings</h1>
              </div>
              <div className="proj-overview-meta">
                <div className="proj-meta-group">
                  <h3>Role</h3>
                  <p>Design</p>
                  <p>Development</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Team</h3>
                  <p>Solo</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Skills</h3>
                  <p>Product Design</p>
                  <p>Prototyping</p>
                  <p>React</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Links</h3>
                  <p><a href="https://drank.vercel.app" target="_blank" rel="noreferrer" style={{ color: '#7C7A27', textDecoration: 'none' }}>drank.vercel.app ↗</a></p>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Overview</span>
                <h2>Rate the drink, not the whole restaurant</h2>
              </div>
              <p>
                Apps like Yelp and Beli are great for rating a whole restaurant or café, but
                oftentimes you've only tried one thing. And lots of times, the specific way you
                ordered it matters just as much as the drink itself.
              </p>
              <p>
                People love sharing a good find, especially when they customized it perfectly.
                But there's no easy way to post that online. drank gives you something cute to
                share on your existing social media circles. Getting friends to download a new app
                to see your drink recommendations is tough, but getting them to tap your story isn't.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankCompAnalysis} alt="Review subject vs share format of popular food/drink ranking apps" />
              </div>
            </div>

          </section>

          {/* ── SOLUTION ── */}
          <section id="solution" className="proj-chapter">

            <div className="proj-solution-intro">
              <span className="proj-chapter-label">Solution</span>
              <h1 className="proj-solution-name">drank</h1>
              <p className="proj-solution-tagline">Rate it. Style it. Share it.</p>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Upload your drink photo</h2>
              </div>
              <p>
                Start by uploading a photo from your camera roll, taking one in-app, or skipping
                straight to ranking if you don't have one. When you add a photo, drank reads its
                EXIF metadata and uses GPS coordinates to find nearby cafés, which pre-fills the
                café name. If it guessed wrong, a dropdown shows other options from the same area.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankUpload} alt="Upload step" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Fill in the details</h2>
              </div>
              <p>
                Next, fill out your receipt. Fill in your rating, order details, and notes. A live
                receipt preview updates as you type.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankRank} alt="Rank step — basics and customizations" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Customize and share</h2>
              </div>
              <p>
                Customize your receipt with text stickers or make a drink sticker 
                from your photo. Export as a receipt card or a 9:16 story image.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankShare} alt="Share step — story canvas with receipt and stickers" />
              </div>
            </div>

          </section>

          {/* ── PROCESS ── */}
          <section id="process" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Process</span>
                <h2>From rough prompt to production</h2>
              </div>
              <p>
                I started with a rough prompt in v0 describing the structure and functions I wanted on each page,
                which gave me a working prototype with uploadable images and live receipt previews. From there I moved into Figma to generate layout
                explorations and compare options, allowing me to explore how the same page should
                feel on mobile vs desktop.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankV0} alt="v0 prompts and initial prototypes" />
              </div>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankWireframes} alt="drank initial wireframes" />
              </div>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankFigma} alt="Figma rank page layout explorations" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Warm, handcrafted, like a cozy café</h2>
              </div>
              <p>
                Once the layouts were settled, I created a design system and designed
                components, including hand-drawn elements used throughout
                the app. The app uses soft, warm colors throughout to create a handcrafted, cozy feeling.
              </p>
            </div>

            <div className="proj-showcase">
              <img src={DrankSystem} alt="Design system — color, typography, UI elements" />
            </div>

          </section>

          {/* ── ITERATIONS ── */}
          <section id="iterations" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Iterations</span>
                <h2>What changed after testing</h2>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Rank page: from tabs to accordions</h2>
              </div>
              <p>
                The original layout had BASICS and CUSTOMIZATIONS as side-by-side tabs. Users
                kept missing the CUSTOMIZATIONS tab, so
                I switched to two stacked accordions. On mobile, both are open by default so all
                fields become visible as you scroll. On desktop, only one is open at a time so both
                sections stay visible on the page without scrolling. The layout is different by device on purpose.
              </p>
            </div>


            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankAccordion} alt="Tabs to accordions" />
              </div>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media proj-showcase-media--accordion-demo">
                <img src={DrankAccordionDemo} alt="Accordion layouts - desktop and mobile" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Sugar and ice: text fields to button groups</h2>
              </div>
              <p>
                Sugar and ice were originally free-form text inputs. Beyond being slower to fill
                in, they caused data inconsistency (someone typing "Light Ice" would show up as
                "Light Ice Ice"). Milk type used a button group and was faster to complete, so I applied
                the same pattern to the sugar and ice fields.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankSugar} alt="Text input to button group for sugar and ice" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Drink sticker: adding loading feedback</h2>
              </div>
              <p>
                Background removal takes a while, and without any feedback, users saw nothing
                happen after toggling the sticker on and assumed it was broken. Rotating status
                messages gave the process a visible presence so users understood something was
                actually running.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankLoading} alt="Drink sticker loading state" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>History page</h2>
              </div>
              <p>
                There was no way to look back at previous rankings or compare drinks.
                The history page adds a list of past receipts and ratings.
                Tapping one opens a full preview, and any receipt can be edited by going back
                through the rank and share flow with the original data pre-filled.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-showcase-media">
                <img src={DrankHistory} alt="History page — grid of receipt cards with ratings" />
              </div>
            </div>

          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Reflection</span>
                <h2>Ship fast, fix what's actually broken</h2>
              </div>
              <p>
                The most useful thing about AI prototyping tools was having something real to test
                much quicker. The accordion layout, the loading messages, and the open-by-default
                mobile fields all came from watching the app get used and noticing what wasn't
                working.
              </p>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Design and engineering are the same job</h2>
              </div>
              <p>
                Some of the best UX decisions I made, like keeping both accordions open on mobile
                or having prefilled photo metadata input, came directly from being in the code.
                I could test a behavior, feel how it worked, and change it the same day. The line
                between design and engineering is blurring, and I think the products that benefit
                most from this are the ones where the feedback loop is tight enough to
                feel what you're building.
              </p>
            </div>

          </section>

        </main>
      </div>

      <HomeFooter />
    </div>
  );
};

export default DrankProject;