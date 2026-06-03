import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import PhoneHeader from '../assets/images/checkt/checkt header.jpg';
import ToDoList from '../assets/images/checkt/to do list.jpg';
import TasksVSHabits from '../assets/images/checkt/tasks vs habits.jpg';
import Visualization from '../assets/images/checkt/visualization.jpg';
import JourneyMap from '../assets/images/checkt/goal journey map.jpg';
import InfoHierarchy from '../assets/images/checkt/information hierarchy.jpg';
import Improvement1 from '../assets/images/checkt/improvement 1.jpg';
import Improvement2 from '../assets/images/checkt/improvement 2.jpg';
import Improvement3 from '../assets/images/checkt/improvement 3.jpg';
import Preview from '../assets/images/checkt/checkt preview.jpg';
import CreateHabit from '../assets/images/checkt/create habit.jpg';
import CategoryIcon from '../assets/images/checkt/category icon.png';
import FriendsIcon from '../assets/images/checkt/friends icon.png';
import BellIcon from '../assets/images/checkt/bell icon.png';
import CheckboxIcon from '../assets/images/checkt/checkbox icon.png';
import WidgetPreview from '../assets/images/checkt/widget preview.jpg';
import HabitPage from '../assets/images/checkt/habit page.png';
import ProgressViews from '../assets/images/checkt/progress views.jpg';
import TodaysActivity from '../assets/images/checkt/todays activity.jpg';
import ProgressSummary from '../assets/images/checkt/progress summary.jpg';
import TodaysPhotos from '../assets/images/checkt/todays photos.jpg';
import RecommendedText from '../assets/images/checkt/recommended text.jpg';
import CompletedToday from '../assets/images/checkt/completed today.jpg';
import CalendarView from '../assets/images/checkt/calendar view.jpg';
import Learnings from '../assets/images/checkt/learnings.jpg';

const CHAPTERS = [
  { id: 'overview',   label: 'Overview'   },
  { id: 'research',   label: 'Research'   },
  { id: 'synthesis',  label: 'Synthesis'  },
  { id: 'solution',   label: 'Solution'   },
  { id: 'reflection', label: 'Reflection' },
];

const ChecktProject = () => {
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
      <div className="proj-hero">
        <img src={PhoneHeader} alt="Checkt project" />
      </div>

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
              ← Previous: Augene
            </Link>
            <Link className="proj-sidebar-project-link" to="/innod" onClick={handleLinkClick}>
              → Next: InnoD
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="proj-content">

          {/* ── OVERVIEW ── */}
          <section id="overview" className="proj-chapter">

            <div className="proj-project-intro">
              <div>
                <span className="proj-project-eyebrow">Checkt</span>
                <h1 className="proj-overview-title">Habit tracking with accountability</h1>
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
                  <p>June – July 2025</p>
                  <p>(5 weeks)</p>
                </div>
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Overview</span>
                <h2>Building habits is harder than it looks</h2>
              </div>
              <p>
                I've always been fascinated by self-improvement, inspired by productivity creators
                like Matt D'Avella and Ali Abdaal. But no matter how motivated I felt, I struggled
                to make new habits stick. After years of self-criticism and frustration, I began
                imagining a system that would make habit-building both functional and genuinely motivating.
              </p>
            </div>

          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Research</span>
                <h2>Never-ending to-do lists.</h2>
              </div>
              <p>
                From homework to coffee chats to taking out the trash, students are constantly
                juggling to-do lists. Some tasks reliably get done. Others — going to the gym,
                meditating — somehow never get checked off. But why is there such a difference?
              </p>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>The problem in practice</h2>
                </div>
                <p>Tasks with deadlines get done. Habits without them quietly fall off the list.</p>
              </div>
              <div className="proj-row-content">
                <img src={ToDoList} alt="To-do list illustration" />
              </div>
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Three research takeaways</h2>
              </div>
              <div className="proj-insight-list">
                <div className="proj-insight">
                  <span className="proj-insight-number">01</span>
                  <div>
                    <p className="proj-insight-title">Habits are hard.</p>
                    <p>Through a survey of 19 responses, most participants rated completing day-to-day tasks at a difficulty of 2–3 (easy–neutral), but rated building habits at a 4 (difficult).</p>
                  </div>
                </div>
                <div className="proj-insight">
                  <span className="proj-insight-number">02</span>
                  <div>
                    <p className="proj-insight-title">Visualization and Progress</p>
                    <p>People feel successful when they see progress and complete tasks, but habits lack deadlines. Without a clear sense of time or measurable progress, motivation fades and habits are easily forgotten.</p>
                  </div>
                </div>
                <div className="proj-insight">
                  <span className="proj-insight-number">03</span>
                  <div>
                    <p className="proj-insight-title">Accountability</p>
                    <p>Most habits are personal, which means they often lack accountability. According to ASTD, committing to a goal with someone increases your chances of success to 65%, and up to 95% with regular check-ins.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>Survey findings</h2>
                </div>
                <p>Tasks vs. habits — participants consistently found habit-building significantly harder than completing day-to-day tasks.</p>
              </div>
              <div className="proj-row-content">
                <img src={TasksVSHabits} alt="Tasks vs habits survey results" />
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>Progress visualization</h2>
                </div>
                <p>Without deadlines or visible milestones, the motivation to keep going quietly disappears.</p>
              </div>
              <div className="proj-row-content">
                <img src={Visualization} alt="Visualization research" />
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>Accountability gap</h2>
                </div>
                <p>Shared habits create healthy peer pressure and the reminder that you're not alone in your goals.</p>
              </div>
              <div className="proj-row-content">
                <img src={JourneyMap} alt="Goal journey map" />
              </div>
            </div>

          </section>

          {/* ── SYNTHESIS ── */}
          <section id="synthesis" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Synthesis</span>
                <h2>Sharing habits with friends.</h2>
              </div>
              <p>
                Based on my research, I began ideating a design for a mobile app that makes
                habit-building more social, visual, and motivating. I focused on three core features:
                at-a-glance habit tracking through clear visuals, habit sharing with friends for
                accountability, and photo sharing for progress visualization.
              </p>
            </div>

            <div className="proj-showcase">
              <img src={InfoHierarchy} alt="Information hierarchy exploration" />
            </div>

            <div className="proj-text-block">
              <div className="proj-heading">
                <h2>Three design improvements</h2>
              </div>
              <div className="proj-insight-list">
                <div className="proj-insight">
                  <span className="proj-insight-number">01</span>
                  <div>
                    <p className="proj-insight-title">Less clutter, more clarity</p>
                    <p>I redesigned the habit display to surface only what matters — personal progress at a glance — stripping away visual noise from the original layout.</p>
                  </div>
                </div>
                <div className="proj-insight">
                  <span className="proj-insight-number">02</span>
                  <div>
                    <p className="proj-insight-title">Separating the personal from the social</p>
                    <p>Splitting one overloaded page into two — a progress view and a group chat — gave each function room to breathe and made both experiences more useful.</p>
                  </div>
                </div>
                <div className="proj-insight">
                  <span className="proj-insight-number">03</span>
                  <div>
                    <p className="proj-insight-title">A group chat beats a public feed</p>
                    <p>A feed creates pressure to perform. A chat feels like a conversation — low-stakes, personal, and actually encouraging without the social anxiety of public posts and reactions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>Less clutter, more clarity</h2>
                </div>
                <p>Habit display redesigned to surface personal progress without the visual noise.</p>
              </div>
              <div className="proj-row-content">
                <img src={Improvement1} alt="Design improvement 1" />
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>Separating the personal from the social</h2>
                </div>
                <p>Progress tracking and group chat split into two dedicated pages.</p>
              </div>
              <div className="proj-row-content">
                <img src={Improvement2} alt="Design improvement 2" />
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-heading">
                  <h2>A group chat beats a public feed</h2>
                </div>
                <p>Chat chosen over a social feed for a more supportive, low-pressure dynamic.</p>
              </div>
              <div className="proj-row-content">
                <img src={Improvement3} alt="Design improvement 3" />
              </div>
            </div>

          </section>

          {/* ── SOLUTION ── */}
          <section id="solution" className="proj-chapter">

            <div className="proj-solution-intro">
              <span className="proj-chapter-label">Solution</span>
              <h1 className="proj-solution-name">Checkt</h1>
              <p className="proj-solution-tagline">Where habits meet accountability</p>
            </div>

            <div className="proj-showcase">
              <img src={Preview} alt="Checkt app overview" />
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-feature-title-row">
                  <span className="proj-feature-emoji">✏️</span>
                  <h2 className="proj-feature-title">Customize Your Habits</h2>
                </div>
                <p className="proj-feature-desc">
                  Choose categories, set reminders, personalize how you track progress, and decide
                  who to share it with. Customize your habits to fit your lifestyle.
                </p>
              </div>
              <div className="proj-row-content">
                <img src={CreateHabit} alt="Create habit screen" />
              </div>
            </div>

            <div className="proj-row">
              <div className="proj-row-label">
                <div className="proj-feature-title-row">
                  <span className="proj-feature-emoji">📈</span>
                  <h2 className="proj-feature-title">Watch Your Progress</h2>
                </div>
                <p className="proj-feature-desc">
                  At-a-glance progress views, today's activity, and monthly summaries give you a
                  complete picture of how far you've come.
                </p>
              </div>
              <div className="proj-row-content">
                <img src={HabitPage} alt="Habit progress page" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <span className="proj-feature-emoji">💬</span>
                <h2 className="proj-feature-title">Discuss with Friends</h2>
              </div>
              <p className="proj-feature-desc">
                Share progress photos and check in with your habit group in a low-pressure
                chat format — support without the social anxiety of public posts.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={TodaysPhotos} alt="Today's photos chat" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <span className="proj-feature-emoji">📅</span>
                <h2 className="proj-feature-title">Your Habit History</h2>
              </div>
              <p className="proj-feature-desc">
                Look back at your day-to-day progress and monthly summaries with a full
                calendar view of every habit you've tracked.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={CalendarView} alt="Calendar view" />
              </div>
            </div>

            <div className="proj-feature">
              <div className="proj-feature-title-row">
                <span className="proj-feature-emoji">📱</span>
                <h2 className="proj-feature-title">Habits at a Glance</h2>
              </div>
              <p className="proj-feature-desc">
                Complete habits directly from your home screen with iOS widgets — no need
                to open the app.
              </p>
              <div className="proj-feature-img-wrap">
                <img className="proj-feature-img" src={WidgetPreview} alt="Widget preview" />
              </div>
            </div>

          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="proj-chapter">

            <div className="proj-text-block">
              <div className="proj-heading">
                <span className="proj-chapter-label">Reflection</span>
                <h2>Design with Intention</h2>
              </div>
              <p>
                This was the first project where I conducted real user research, and it completely
                changed how I approached design. While I had some of my own ideas initially, by
                listening to users I was able to move beyond assumptions and make intentional,
                research-backed design choices.
              </p>
              <p>
                I learned that even small insights from users can lead to meaningful design
                improvements — and that the best ideas often come from understanding real needs,
                not just designing in a vacuum.
              </p>
            </div>

            <div className="proj-showcase">
              <img src={Learnings} alt="Learnings" />
            </div>

          </section>

        </main>
      </div>

      <Footer />
    </>
  );
};

export default ChecktProject;