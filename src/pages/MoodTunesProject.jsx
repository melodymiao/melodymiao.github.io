import React from 'react';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import GradientCircles from '../assets/components/GradientCircles';
import MoodTunesHeader from '../assets/images/moodtunes/moodtunes header.png'

const MoodTunesProject = () => {
  return (
    <>
      <section id="moodtunes-project-landing-section" class="project-landing-section">
        <div class="section-body">
          <Header />
          <div class='header-img-wrapper'>
            <img id='moodtunes-header' src={MoodTunesHeader} />
          </div>
        </div>
      </section>

      <section id="moodtunes-project-title" class="project-title-section">
        <div class="section-body">
            <h1 class='project-title'>MoodTunes</h1>
            <h2 class='project-subtitle'>Full-stack project that curates a Spotify playlist from user's music taste and mood</h2>
            <div class='summary'>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>role</h3>
                <p class='summary-text'>Designer</p>
                <p class='summary-text'>Developer</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>timeline</h3>
                <p class='summary-text'>3 weeks</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>skills</h3>
                <p class='summary-text'>Visual design</p>
                <p class='summary-text'>Front-end development</p>
                <p class='summary-text'>Back-end development</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>tools</h3>
                <p class='summary-text'>Figma</p>
                <p class='summary-text'>React.js</p>
              </div>
            </div>
        </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">PROJECT DETAILS COMING SOON...</h2>
          <h2 class="divider-text"></h2>
        </div>
      </div>
    </section>
      
    <section id="footer-section" class="sections">
      <div class="section-body">
        <Footer />
      </div>
    </section>

    <div class='background'>
        <GradientCircles />
    </div>
    </>
  );
}

export default MoodTunesProject;