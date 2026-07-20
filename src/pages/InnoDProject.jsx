import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './InnoDProject.css';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import InnoDPreview from '../assets/images/innod/innod preview.jpg';
import SP24RecruitLogo from '../assets/images/innod/sp24 recruitment logo.png';
import SP24RecruitPage from '../assets/images/innod/sp24 recruitment website.jpg';
import SP24RGBLogo from '../assets/images/innod/sp24 rgb logo.png';
import SP24RGB from '../assets/images/innod/sp24 rgb.jpg';
import SP24HEXLogo from '../assets/images/innod/sp24 hex logo.png';
import SP24HEX from '../assets/images/innod/sp24 hex small.jpg';
import FA24RecruitLogo from '../assets/images/innod/fa24 recruitment logo.png';
import FA24RecruitPage from '../assets/images/innod/fa24 recruitment.jpg';
import FA24HEXLogo from '../assets/images/innod/fa24 hex logo.png';
import FA24HEX from '../assets/images/innod/fa24 hex.jpg';
import FA24CMYKLogo from '../assets/images/innod/fa24 cmyk logo.png';
import FA24CMYK from '../assets/images/innod/fa24 cmyk.jpg';

const CHAPTERS = [
  { id: 'overview',     label: 'Overview'          },
  { id: 'sp24-recruit', label: 'SP24 Recruitment'  },
  { id: 'sp24-rgb',     label: 'SP24 RGB'          },
  { id: 'sp24-hex',     label: 'SP24 HEX'          },
  { id: 'fa24-recruit', label: 'FA24 Recruitment'  },
  { id: 'fa24-hex',     label: 'FA24 HEX'          },
  { id: 'fa24-cmyk',    label: 'FA24 CMYK'         },
];

const InnoDProject = () => {
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
    <div className="innod-case-study">
      <Header />

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
            <Link className="proj-sidebar-project-link" to="/checkt" onClick={handleLinkClick}>
              ← Previous: Checkt
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="proj-content">

          {/* ── Hero ── */}
          <div className="proj-hero">
            <img src={InnoDPreview} alt="Innovative Design project" />
          </div>

          {/* ── OVERVIEW ── */}
          <section id="overview" className="proj-chapter">

            <div className="proj-project-intro">
              <div>
                <span className="proj-project-eyebrow">Innovative Design</span>
                <h1 className="proj-overview-title">Engaging event web pages under tight deadlines</h1>
              </div>
              <div className="proj-overview-meta">
                <div className="proj-meta-group">
                  <h3>Role</h3>
                  <p>Web Design</p>
                  <p>Web Development</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Team</h3>
                  <p>Melody Miao</p>
                  <p>Eric Yang (SP24)</p>
                  <p>JR Garbe (FA24)</p>
                </div>
                <div className="proj-meta-group">
                  <h3>Timeline</h3>
                  <p>Jan – Dec 2024</p>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Overview</span>
                <h2>Design and ship in 3–5 days</h2>
              </div>
              <p>
                As VP of Technology of UC Berkeley's Innovative Design club, I worked closely
                with the marketing team to create unique web pages for club events — often under
                tight deadlines of 3–5 days. The marketing team provided branding and assets;
                the tech team designed and built the page.
              </p>
            </div>

          </section>

          {/* ── SP24 RECRUITMENT ── */}
          <section id="sp24-recruit" className="proj-chapter">
            <div className="proj-text-block">
              <div className="proj-row">
                <div className="proj-row-label">
                  <div className="proj-heading">
                    <span className="proj-chapter-label">Spring 2024</span>
                    <h2>Club / DeCal Recruitment</h2>
                  </div>
                  <p>
                    Every semester the club opens applications for teams and student-led DeCal courses.
                    This page showcased the recruitment timeline and application links — often the first
                    impression prospective members have of InnoD.
                  </p>
                  <p>Theme: colorful, comic-book-inspired.</p>
                </div>
                <div className="proj-row-content">
                  <img src={SP24RecruitLogo} alt="SP24 Recruitment logo" />
                </div>
              </div>
            </div>
            <div className="proj-page-preview">
              <span className="proj-page-preview-label">Scroll to see full page</span>
              <div className="proj-scroll-container">
                <img src={SP24RecruitPage} alt="SP24 Recruitment full page design" />
              </div>
            </div>
          </section>

          {/* ── SP24 RGB ── */}
          <section id="sp24-rgb" className="proj-chapter">
            <div className="proj-text-block">
              <div className="proj-row">
                <div className="proj-row-label">
                  <div className="proj-heading">
                    <span className="proj-chapter-label">Spring 2024</span>
                    <h2>Reach Grow Build</h2>
                  </div>
                  <p>
                    RGB is a speaker series where professional artists and photographers give workshops
                    and share their experience, offering students learning and networking opportunities.
                  </p>
                  <p>Theme: casino-inspired — chess, pool, roulette, mahjong, and more.</p>
                </div>
                <div className="proj-row-content">
                  <img src={SP24RGBLogo} alt="SP24 RGB logo" />
                </div>
              </div>
            </div>
            <div className="proj-page-preview">
              <span className="proj-page-preview-label">Scroll to see full page</span>
              <div className="proj-scroll-container">
                <img src={SP24RGB} alt="SP24 RGB full page design" />
              </div>
            </div>
          </section>

          {/* ── SP24 HEX ── */}
          <section id="sp24-hex" className="proj-chapter">
            <div className="proj-text-block">
              <div className="proj-row">
                <div className="proj-row-label">
                  <div className="proj-heading">
                    <span className="proj-chapter-label">Spring 2024</span>
                    <h2>Hone and Explore</h2>
                  </div>
                  <p>
                    HEX is a weekend of free graphic design, photography, and web design workshops
                    hosted by InnoD members — a space for students to pick up new creative skills.
                  </p>
                  <p>Theme: chromecore, Y2K futurism.</p>
                </div>
                <div className="proj-row-content">
                  <img src={SP24HEXLogo} alt="SP24 HEX logo" />
                </div>
              </div>
            </div>
            <div className="proj-page-preview">
              <span className="proj-page-preview-label">Scroll to see full page</span>
              <div className="proj-scroll-container">
                <img src={SP24HEX} alt="SP24 HEX full page design" />
              </div>
            </div>
          </section>

          {/* ── FA24 RECRUITMENT ── */}
          <section id="fa24-recruit" className="proj-chapter">
            <div className="proj-text-block">
              <div className="proj-row">
                <div className="proj-row-label">
                  <div className="proj-heading">
                    <span className="proj-chapter-label">Fall 2024</span>
                    <h2>Club / DeCal Recruitment</h2>
                  </div>
                  <p>
                    The fall recruitment page again provided the timeline and application links
                    for all teams and DeCal courses.
                  </p>
                  <p>Theme: cozy Animal Crossing-inspired bakery.</p>
                </div>
                <div className="proj-row-content">
                  <img src={FA24RecruitLogo} alt="FA24 Recruitment logo" />
                </div>
              </div>
            </div>
            <div className="proj-page-preview">
              <span className="proj-page-preview-label">Scroll to see full page</span>
              <div className="proj-scroll-container">
                <img src={FA24RecruitPage} alt="FA24 Recruitment full page design" />
              </div>
            </div>
          </section>

          {/* ── FA24 HEX ── */}
          <section id="fa24-hex" className="proj-chapter">
            <div className="proj-text-block">
              <div className="proj-row">
                <div className="proj-row-label">
                  <div className="proj-heading">
                    <span className="proj-chapter-label">Fall 2024</span>
                    <h2>Hone and Explore</h2>
                  </div>
                  <p>
                    The fall HEX page featured a throwback 90s Windows theme with interactive,
                    3D jelly-like elements — blending nostalgia with a modern touch. Clickable
                    "file" buttons in the corner triggered pop-ups showing the schedule for each day.
                  </p>
                </div>
                <div className="proj-row-content">
                  <img src={FA24HEXLogo} alt="FA24 HEX logo" />
                </div>
              </div>
            </div>
            <div className="proj-page-preview">
              <span className="proj-page-preview-label">Scroll to see full page</span>
              <div className="proj-scroll-container">
                <img src={FA24HEX} alt="FA24 HEX full page design" />
              </div>
            </div>
          </section>

          {/* ── FA24 CMYK ── */}
          <section id="fa24-cmyk" className="proj-chapter">
            <div className="proj-text-block">
              <div className="proj-row">
                <div className="proj-row-label">
                  <div className="proj-heading">
                    <span className="proj-chapter-label">Fall 2024</span>
                    <h2>Come Make Your Mark</h2>
                  </div>
                  <p>
                    CMYK is a designathon and speaker series where students compete in a design
                    challenge set by an industry partner — this year, Problem Library. Workshops
                    from design professionals ran alongside the competition.
                  </p>
                  <p>Theme: KASAKII STORE-inspired — grid backgrounds, bold outlines, bright colors, maximalist energy.</p>
                </div>
                <div className="proj-row-content">
                  <img src={FA24CMYKLogo} alt="FA24 CMYK logo" />
                </div>
              </div>
            </div>
            <div className="proj-page-preview">
              <span className="proj-page-preview-label">Scroll to see full page</span>
              <div className="proj-scroll-container">
                <img src={FA24CMYK} alt="FA24 CMYK full page design" />
              </div>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default InnoDProject;