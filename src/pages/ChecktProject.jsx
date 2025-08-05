import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import DividerLine from '../assets/components/DividerLine'
import GradientCircles from '../assets/components/GradientCircles';
import PhoneHeader from '../assets/images/checkt/checkt header.jpg'
import ChecktLogo from '../assets/images/checkt/checkt logo.png'
import ToDoList from '../assets/images/checkt/to do list.png'
import TasksVSHabits from '../assets/images/checkt/tasks vs habits.png'
import Visualization from '../assets/images/checkt/visualization.png'
import JourneyMap from '../assets/images/checkt/goal journey map.png'
import InfoHierarchy from '../assets/images/checkt/information hierarchy.png'
import Improvement1 from '../assets/images/checkt/improvement 1.png'
import Improvement2 from '../assets/images/checkt/improvement 2.png'
import Improvement3 from '../assets/images/checkt/improvement 3.png'
import Preview from '../assets/images/checkt/checkt preview.jpg'
import CreateHabit from '../assets/images/checkt/create habit.png'
import CategoryIcon from '../assets/images/checkt/category icon.png'
import FriendsIcon from '../assets/images/checkt/friends icon.png'
import BellIcon from '../assets/images/checkt/bell icon.png'
import CheckboxIcon from '../assets/images/checkt/checkbox icon.png'
import WidgetPreview from '../assets/images/checkt/widget preview.jpg'
import HabitPage from '../assets/images/checkt/habit page.png'
import ProgressViews from '../assets/images/checkt/progress views.png'
import TodaysActivity from '../assets/images/checkt/todays activity.png'
import ProgressSummary from '../assets/images/checkt/progress summary.png'
import TodaysPhotos from '../assets/images/checkt/todays photos.jpg'
import RecommendedText from '../assets/images/checkt/recommended text.jpg'
import CompletedToday from '../assets/images/checkt/completed today.jpg'
import CalendarView from '../assets/images/checkt/calendar view.jpg'
import Learnings from '../assets/images/checkt/learnings.jpg'

const ChecktProject = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <Header />
    <section id="checkt-project-landing-section" className="project-landing-section">
      <div className='header-img-wrapper'>
        <img id='checkt-logo' className='logo' src={ChecktLogo} />
        <img className='header-preview' src={PhoneHeader} />
      </div>
    </section>

    <section className='project-overview-section'>

      <div className='project-overview-description'>
        <h1 className='project-title'>Checkt</h1>
        <p className='project-overview'>
        I've always been fascinated by self-improvement, inspired by productivity YouTubers like 
        Matt D’Avella and Ali Abdaal. But no matter how motivated I felt, I struggled to make new 
        habits stick. After years of self-criticism and frustration, I began imagining a system that 
        would make building habits both functional and genuinely motivating.
        </p>
      </div>
      <div className='project-overview-summaries'>
        <div class='summary-vertical-sections'>
          <h3 class='summary-titles'>ROLE</h3>
          <p class='summary-text'>Research</p>
          <p class='summary-text'>Design</p>
          <p class='summary-text'>Prototype</p>
        </div>
        <div class='summary-vertical-sections'>
          <h3 class='summary-titles'>TIMELINE</h3>
          <p class='summary-text'>June 2025 - July 2025</p>
          <p class='summary-text'>(5 weeks)</p>
        </div>
      </div>
    </section>

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>PROBLEM</h3>
          <h1 className='stage-title'>Never-ending to-do lists.</h1>
          <p class="project-text">
            From homework to coffee chats to taking out the trash when it’s your turn, students 
            are constantly juggling to-do lists. Some tasks, like submitting assignments or finishing 
            your part of a group project, reliably get done. Others, like going to the gym or 
            meditating, somehow never get checked off. But why is there such a difference?
          </p>
        </div>
        <div className='right-column'>
          <img src={ToDoList} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='centered-text dark-big-statement-section'>
        <p class="project-text">
          Through research, I discovered that:
        </p>
        <h1 className='big-statement'>
          While tasks are easier to complete, <span className='checkt-purple-text'> habits are difficult</span> to stick to.
        </h1>
      </section>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>RESEARCH TAKEAWAY #1</h3>
          <h1 className='stage-title'>Habits are hard.</h1>
          <p class="project-text">
          Through a survey of 19 responses, most participants rated completing day-to-day tasks with a 
          difficulty of 2-3 (easy-neutral), but rated building habits with a difficulty of 4 (difficult).
          </p>
        </div>
        <div className='right-column'>
          <img src={TasksVSHabits} />
        </div>
      </section>
      <section className='two-column-text'>
        <div className='right-column'>
          <img src={Visualization} />
        </div>
        <div className='left-column'>
          <h3 className='project-stage'>RESEARCH TAKEAWAY #2</h3>
          <h1 className='stage-title'>Visualization and Progress</h1>
          <p class="project-text">
          People feel successful when they see progress and complete tasks, but habits lack deadlines. 
          Without a clear sense of time or measurable progress, motivation fades and habits are easily 
          forgotten.
          </p>
        </div>
      </section>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>RESEARCH TAKEAWAY #3</h3>
          <h1 className='stage-title'>Accountability</h1>
          <p class="project-text">
          Most habits are personal, which means they often lack accountability. But according to the 
          American Society of Training and Development (ASTD), committing to a goal with someone 
          increases your chances of success to 65%, and up to 95% when you schedule regular check-ins. 
          Accountability from friends creates healthy peer pressure and reminders that you're not alone 
          in your goals.
          </p>
        </div>
        <div className='right-column'>
          <img src={JourneyMap} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>IDEATION</h3>
          <h1 className='stage-title'>Sharing habits with friends.</h1>
          <p class="project-text">
          Based on my research, I began ideating a design for a mobile app that makes habit-building 
          more social, visual, and motivating. I focused on three core features:
          </p>
          <p class="project-text">
          1. At-a-glance habit tracking through clear visuals
          </p>
          <p class="project-text">
          2. Habit sharing with friends for accountability
          </p>
          <p class="project-text">
          3. Photo sharing for progress visualization
          </p>
        </div>
        <div className='right-column'>
          <img src={InfoHierarchy} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>DESIGN IMPROVEMENT #1</h3>
          <h1 className='stage-title'>Habit Display</h1>
          <p class="project-text">
          From the original design, I improved the habit display to provide a cleaner design that 
          emphasizes personal progress for a simpler at-a-glance experience.
          </p>
        </div>
        <div className='right-column'>
          <img src={Improvement1} />
        </div>
      </section>
      <section className='two-column-text'>
        <div className='right-column'>
          <img src={Improvement2} />
        </div>
        <div className='left-column'>
          <h3 className='project-stage'>DESIGN IMPROVEMENT #2</h3>
          <h1 className='stage-title'>Progress and Social Pages</h1>
          <p class="project-text">
          Originally, the "habit page" included both personal progress trackers and social features.
          To separate personal and social functions, I separated these into two different pages which
          allowed for more in-depth personalized progress analysis as well as a group chat made for the
          habit group.
          </p>
        </div>
      </section>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>DESIGN IMPROVEMENT #3</h3>
          <h1 className='stage-title'>Post vs Chat Format</h1>
          <p class="project-text">
          I explored two formats for social interaction: a social media–style feed with posts, reactions, 
          and comments, and a more casual chat-based format. I chose the chat approach because while 
          a feed can create pressure to perform or be judged, a chat feels more personal and equal. 
          It encourages open conversation and support without the social anxiety of public posts and 
          reactions.
          </p>
        </div>
        <div className='right-column'>
          <img src={Improvement3} />
        </div>
      </section>
    </section>

    <DividerLine />


    <section className='solution-section'>

      <section className='solution-header-text'>
        <h3 className='project-stage'>SOLUTION</h3>
        <h1 className='app-name'>Checkt</h1>
        <h2 class="solution-subtitle purple-h2">
          Where habits meet accountability
        </h2>
      </section>
      <div className='centered-img-text'>
        <img id='checkt-preview' src={Preview} />
      </div>

    </section>

    <section className='solution-section'>
      <section className='solution-header-text'>
        <h2 className='purple-h2'>Create</h2>
        <h1 className='stage-title'>Customize Your Habits</h1>
      </section>

      <section className='two-column-solution'>
        <div className='preview-column'>
          <img src={CreateHabit} />
        </div>
        <div className='text-column top-bottom-text'>
          <div>
            <h2 className='gray-h2'>
            <span className='bold-h2'>Customize your habits to fit your lifestyle.</span> Choose categories, set reminders, 
            personalize how you track progress, and decide who to share it with.
            </h2>
          </div>
          <div className='two-rows'>
            <div className='two-columns'>
              <div className='icon-text'>
                <img className='summary-icon' src={CategoryIcon} />
                <p class="project-text">
                  Organize your habits into custom categories to keep things clear and focused.
                </p>
              </div>
              <div className='icon-text'>
                <img className='summary-icon' src={BellIcon} />
                <p class="project-text">
                  Set the days you want to complete each habit and schedule reminders.
                </p>
              </div>
            </div>
            <div className='two-columns'>
              <div className='icon-text'>
                <img className='summary-icon' src={CheckboxIcon} />
                <p class="project-text">
                  Choose how each habit is tracked: from checkboxes to numbers and custom units.
                </p>
              </div>

              <div className='icon-text'>
                <img className='summary-icon' src={FriendsIcon} />
                <p class="project-text">
                  Keep habits private or share them with friends for added support and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>


    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='purple-h2'>View</h2>
        <h1 className='stage-title'>Watch Your Progress</h1>
      </section>

      <div className='three-columns'>
        <div className='side-column'>
          <div className='img-caption'>
            <img src={ProgressViews} />
            <p className='caption'>
              Look back at your progress across the past month, year-to-date, or full year
            </p>
          </div>
        </div>

        <div className='preview-column'>
          <img id='habit-page' src={HabitPage} />
        </div>

        <div className='side-column'>
          <div className='img-caption'>
            <img src={TodaysActivity} />
            <p className='caption'>
              Log your daily activity with tags and notes
            </p>
          </div>
          <div className='img-caption'>
            <img src={ProgressSummary} />
            <p className='caption'>
              See an overview of your efforts over time
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='purple-h2'>Chat</h2>
        <h1 className='stage-title'>Discuss with Friends</h1>
      </section>

      <div className='centered-img-caption'>
        <img id='todays-photos' src={TodaysPhotos} />
        <p class="long-caption">
          See your group’s daily activity at a glance with a highlight of today’s shared photos
        </p>
      </div>

      <div className='two-columns'>
        <div className='img-caption'>
          <img src={RecommendedText} />
          <p className='caption'>
            Use recommended comments that promote a growth mindset and positive support
          </p>
        </div>
        <div className='img-caption'>
          <img src={CompletedToday} />
          <p className='caption'>
            Stay motivated by seeing which friends have completed the habit today
          </p>
        </div>
      </div>
    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='purple-h2'>Calendar</h2>
        <h1 className='stage-title'>Your Habit History</h1>
      </section>
      <div className='centered-img-text'>
        <img id='widget-preview' src={CalendarView} />
        <p class="project-text">
          Look back at your day-to-day progress and monthly summaries
        </p>
      </div>

    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='purple-h2'>Widgets</h2>
        <h1 className='stage-title'>Habits at a Glance</h1>
      </section>
      <div className='centered-img-text'>
        <img id='widget-preview' src={WidgetPreview} />
        <p class="project-text">
          Complete habits from your home screen
        </p>
      </div>

    </section>
    
    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>LEARNINGS</h3>
          <h1 className='stage-title'>Design with Intention</h1>
          <p class="project-text">
          This was the first project where I conducted real user research, and it completely changed 
          how I approached design. While I had some of my own design ideas initially, by listening to users, 
          I was able to move beyond assumptions and make intentional, research-backed design choices. 
          I learned that even small insights from users can lead to meaningful design improvements
          and that the best ideas often come from understanding real needs, not just designing in a vacuum.
          </p>
        </div>
        <div className='right-column'>
          <img src={Learnings} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='next-project-section'>
    <div>

    </div>

    <Link className='next-project-link' to="/augene" onClick={handleLinkClick}>
      <div className='next-project-text'>
        <h3 className='project-stage'>NEXT PROJECT</h3>
        <h1 className='project-title'>AUGENE BEAUTY</h1>
      </div>
      <span className="right-arrow">→</span>
    </Link>
      
    </section>

    <Footer />
    </>
  );
}

export default ChecktProject;