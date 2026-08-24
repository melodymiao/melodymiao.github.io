import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './DrankProject.css';
import HomeNav from '../assets/components/HomeNav';
import HomeFooter from '../assets/components/HomeFooter';


import DrankHero        from '../assets/images/portfolio-grid/drank-thumbnail.gif';
import DrankCompAnalysis from '../assets/images/drank/subject-vs-share.jpg';
import DrankUpload      from '../assets/images/drank/upload step.gif';
import DrankRank        from '../assets/images/drank/rank step.gif';
import DrankShare       from '../assets/images/drank/share step.gif';
import DrankV0          from '../assets/images/drank/v0-prototypes.jpg';
import DrankUploadPage  from '../assets/images/drank/upload-page.jpg';
import DrankPrompt1     from '../assets/images/drank/prompt-1.png';
import DrankRankPage    from '../assets/images/drank/rank-page.jpg';
import DrankPrompt2     from '../assets/images/drank/prompt-2.png';
import DrankSharePage   from '../assets/images/drank/share-page.jpg';
import DrankPrompt3     from '../assets/images/drank/prompt-3.png';
import DrankWireframes  from '../assets/images/drank/initial-wireframes.jpg';
import DrankMake1       from '../assets/images/drank/make-1.jpg';
import DrankMake2       from '../assets/images/drank/make-2.jpg';
import DrankMake3       from '../assets/images/drank/make-3.jpg';
import DrankMake4       from '../assets/images/drank/make-4.jpg';
import DrankFigma       from '../assets/images/drank/figma-explorations.jpg';
import DrankSystem      from '../assets/images/drank/design-system.jpg';
import DrankAccordion1  from '../assets/images/drank/accordion-1.png';
import DrankAccordion2  from '../assets/images/drank/accordion-2.png';
import DrankAccordion   from '../assets/images/drank/accordion.jpg';
import DrankAccordionDemo   from '../assets/images/drank/accordion-layout.gif';
import DrankAccordionDesktop from '../assets/images/drank/accordion-desktop.gif';
import DrankAccordionMobile  from '../assets/images/drank/accordion-mobile.gif';
import DrankCustomizations1 from '../assets/images/drank/customizations-1.gif';
import DrankCustomizations2 from '../assets/images/drank/customizations-2.gif';
import DrankSugar       from '../assets/images/drank/sugar-ice-button-group.jpg';
import DrankLoading1    from '../assets/images/drank/loading-1.gif';
import DrankLoading2    from '../assets/images/drank/loading-2.gif';
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

// How tall a chunk of the viewport's top the fixed nav actually occupies —
// approximate (its real height varies a few px with scroll-shrink state,
// see HomeNav.css .is-scrolled) but only needs to be "big enough" for the
// overlap check below, not exact.
const NAV_OVERLAP_HEIGHT = 100;
// Below this, the hero frame reads as dark enough that the plain theme's
// navy nav text goes unreadable over it.
const DARK_LUMINANCE_THRESHOLD = 0.4;

const DrankProject = () => {
  const [activeId, setActiveId] = useState('overview');
  const [navOverDarkBg, setNavOverDarkBg] = useState(false);
  const observerRef = useRef(null);
  const heroImgRef = useRef(null);

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

  // The fixed nav sits on top of the hero's animated GIF at the top of the
  // page — samples the GIF's *currently playing* frame onto an offscreen
  // canvas (drawImage on an animated <img> captures whatever frame is
  // rendering at that instant) and checks its real luminance, so the nav
  // can switch to light text specifically while the GIF is showing a dark
  // frame, and back to dark text the rest of the time (including once
  // scrolled past the hero entirely). Polls on an interval since the GIF's
  // own frame changes have no DOM event to hook into, not just on scroll.
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const sample = () => {
      const img = heroImgRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const overlapsNav = rect.top < NAV_OVERLAP_HEIGHT && rect.bottom > 0;
      if (!overlapsNav) {
        setNavOverDarkBg(false);
        return;
      }
      try {
        // object-position: center top (see Projects.css .proj-hero img)
        // anchors the source image's own top edge to the rendered top —
        // no vertical crop from the top — so sampling row 0 of the raw
        // source corresponds directly to what's under the nav, without
        // needing to replicate object-fit:cover's crop math.
        ctx.drawImage(img, 0, 0, 16, 16);
        const { data } = ctx.getImageData(0, 0, 16, 2);
        let total = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          total += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
          count++;
        }
        if (count > 0) setNavOverDarkBg(total / count / 255 < DARK_LUMINANCE_THRESHOLD);
      } catch {
        // Image not decoded yet, or a transient canvas read failure —
        // leave the last known value in place rather than flicker.
      }
    };

    const onScroll = () => requestAnimationFrame(sample);
    sample();
    window.addEventListener('scroll', onScroll, { passive: true });
    const intervalId = setInterval(sample, 200);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(intervalId);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="drank-case-study theme-plain">
      <HomeNav overDarkBg={navOverDarkBg} />

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
              <span className="proj-sidebar-project-arrow">→</span>
              Next: Augene
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="proj-content">

          {/* ── Hero ── */}
          <div className="proj-hero">
            <img ref={heroImgRef} src={DrankHero} alt="drank project" />
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
                  <p><a href="https://drank.vercel.app" target="_blank" rel="noreferrer" style={{ color: '#C5C37A', textDecoration: 'none' }}>drank.vercel.app ↗</a></p>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Overview</span>
                <h2>Rate individual drinks, not the whole restaurant</h2>
              </div>
              <p>
                Yelp and Beli are great for rating a whole restaurant or cafe, but usually you've only
                tried one thing there. Sometimes, you only want to recommend one item.
              </p>
              <p>
                People love sharing a good find, especially one they customized just right, but there's
                no easy way to share that. drank turns drink rankings into something cute to share
                on your existing social media stories.
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
              <p className="proj-solution-tagline">drink. then rank.</p>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Upload your drink photo</h2>
              </div>
              <p>
                Upload a photo. drank reads its EXIF data and GPS to guess the business name. 
                Wrong guess? A dropdown shows other spots nearby.
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
                Fill in your ranking, order, and notes, and watch a live receipt preview update as
                you type.
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
                Add text stickers, or turn your photo into a drink sticker. Export as a receipt
                card or a 9:16 story you can share.
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
                After planning how I wanted the flow to work, I started in v0 with a rough prompt describing what each page
                should do. From there, I got a working prototype complete with image uploads and a live receipt
                preview.
              </p>
            </div>

            <div className="proj-text-block">
              <p>First, v0 generated an upload page with a working image upload and capture feature. (Note: all prompts
                shown below are simplified for brevity.)
              </p>
            </div>
            <div className="proj-showcase">
              <div className="proj-prompt-row">
                <div className="proj-prompt-page">
                  <img src={DrankUploadPage} alt="Upload page produced by the v0 prompt" />
                  <span className="proj-prompt-page-label">v0 upload page</span>
                </div>
                <img className="proj-prompt-img" src={DrankPrompt1} alt="v0 prompt for the upload screen" />
              </div>
            </div>

            <div className="proj-text-block">
              <p>For the rank screen, v0 generated a page with a live receipt preview that updated as
                fields for the drink name, ranking, customizations, and notes were filled in.</p>
            </div>
            <div className="proj-showcase">
              <div className="proj-prompt-row">
                <div className="proj-prompt-page">
                  <img src={DrankRankPage} alt="Rank page produced by the v0 prompt" />
                  <span className="proj-prompt-page-label">v0 rank page</span>
                </div>
                <img className="proj-prompt-img" src={DrankPrompt2} alt="v0 prompt for the rank screen" />
              </div>
            </div>

            <div className="proj-text-block">
              <p>Finally, v0 generated a share page with a preview of the final downloadable receipt card and story canvas.</p>
            </div>
            <div className="proj-showcase">
              <div className="proj-prompt-row">
                <div className="proj-prompt-page">
                  <img src={DrankSharePage} alt="Share page produced by the v0 prompt" />
                  <span className="proj-prompt-page-label">v0 share page</span>
                </div>
                <img className="proj-prompt-img" src={DrankPrompt3} alt="v0 prompt for the share screen" />
              </div>
            </div>

            <div className="proj-text-block">
              <p>From there, I used Figma Make to explore four layouts for the same rank screen. Initially,
                I focused on exploring mobile-first designs.
              </p>
            </div>
            <div className="proj-showcase">
              <div className="proj-make-row">
                <div className="proj-make-page">
                  <img src={DrankMake1} alt="Figma Make exploration — long form layout" />
                  <span className="proj-prompt-page-label">long form</span>
                </div>
                <div className="proj-make-page">
                  <img src={DrankMake2} alt="Figma Make exploration — tabs layout" />
                  <span className="proj-prompt-page-label">tabs</span>
                </div>
                <div className="proj-make-page">
                  <img src={DrankMake3} alt="Figma Make exploration — in-line edits layout" />
                  <span className="proj-prompt-page-label">in-line edits</span>
                </div>
                <div className="proj-make-page">
                  <img src={DrankMake4} alt="Figma Make exploration — accordion layout" />
                  <span className="proj-prompt-page-label">accordion</span>
                </div>
              </div>
            </div>

          </section>

          {/* ── ITERATIONS ── */}
          <section id="iterations" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Iterations</span>
                <h2>Many rounds of testing and iteration</h2>
              </div>
              <p>
                Vibe coding allowed me to iterate quickly on the design and functionality of the app. 
                Here are some of the key iterations I made based on feedback from testing with real users.
              </p>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Tabs to accordions</h2>
              </div>
              <p>
                When using the rank page, people kept missing the CUSTOMIZATIONS tab. 
                I switched to a stacked accordion layout instead, which allows both sections to be visible in a linear flow.
              </p>
            </div>


            <div className="proj-showcase">
              <div className="proj-accordion-row">
                <div className="proj-accordion-page">
                  <img src={DrankAccordion1} alt="Tabbed rank layout with the receipt preview" />
                  <span className="proj-prompt-page-label">tabbed layout with preview</span>
                </div>
                <div className="proj-accordion-page">
                  <img src={DrankAccordion2} alt="Accordion rank layout without the receipt preview" />
                  <span className="proj-prompt-page-label">accordion layout without preview</span>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <p>On desktop, the accordion is collapsed by default to make both accordion sections fit without scrolling the page.
                On mobile, it's open by default to make both accordion sections visible as you scroll. I also removed
                the mobile receipt preview to make the input fields more visible.
              </p>
            </div>
            <div className="proj-showcase">
              <div className="proj-accordion-device-row">
                <div className="proj-accordion-device-page proj-accordion-device-page--desktop">
                  <img src={DrankAccordionDesktop} alt="Accordion layout on desktop" />
                  <span className="proj-prompt-page-label">desktop accordion</span>
                </div>
                <div className="proj-accordion-device-page proj-accordion-device-page--mobile">
                  <img src={DrankAccordionMobile} alt="Accordion layout on mobile" />
                  <span className="proj-prompt-page-label">mobile accordion</span>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Text fields to button groups</h2>
              </div>
              <p>
                Sugar and ice used to be free-text fields, which were slower to fill in and inconsistent
                (typing "Light Ice" would show up as "Light Ice Ice"). Button groups improved both issues.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-customization-row">
                <div className="proj-customization-page">
                  <img src={DrankCustomizations1} alt="Sugar and ice as free-text fields" />
                  <span className="proj-prompt-page-label">free-text fields</span>
                </div>
                <div className="proj-customization-page">
                  <img src={DrankCustomizations2} alt="Sugar and ice as radio button groups" />
                  <span className="proj-prompt-page-label">radio buttons</span>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Loading progress feedback</h2>
              </div>
              <p>
                Background removal takes a few seconds and without any feedback, users would see nothing happen
                and assume it broke. I added rotating status messages to visibly indicate that something was happening.
              </p>
            </div>

            <div className="proj-showcase">
              <div className="proj-loading-row">
                <div className="proj-loading-page">
                  <div className="proj-loading-crop">
                    <img src={DrankLoading1} alt="Drink sticker with no immediate response after toggling it on" />
                  </div>
                  <span className="proj-prompt-page-label">no immediate response</span>
                </div>
                <div className="proj-loading-page">
                  <div className="proj-loading-crop">
                    <img src={DrankLoading2} alt="Drink sticker with rotating loading status messages" />
                  </div>
                  <span className="proj-prompt-page-label">rotating loading messages</span>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>History page</h2>
              </div>
              <p>
                Originally, there was no way to look back at previous rankings, compare drinks, or see your drink stats. 
                I added a history page which lists past receipts and allows you to edit the original data.
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
                <h2>Ship fast, fix fast</h2>
              </div>
              <p>
                The real value of AI prototyping tools was having something real to test, fast.
                All of my improvements (the accordion layout, the loading messages, the open-by-default mobile fields, and more) all
                came from watching people actually use the app and noticing what wasn't working.
              </p>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Good UX is also in the engineering</h2>
              </div>
              <p>
                Some of the best UX improvements, like keeping both accordions open on mobile or pre-filling photo
                metadata, came from living in the code, not from a design spec. I could test something,
                feel how it worked, and improve it the same day. The lines between design and engineering are
                blurring together, and I am excited about what can be accomplished through design engineering.
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