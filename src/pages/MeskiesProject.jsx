import React from 'react';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import GradientCircles from '../assets/components/GradientCircles';
import MeskiesHeader from '../assets/images/meskies/meskies header.png'
import Home from '../assets/images/meskies/home page.png'
import Menu from '../assets/images/meskies/menu.png'

const MeskiesProject = () => {
  return (
    <>
      <section id="meskies-project-landing-section" class="project-landing-section">
        <div class="section-body">
          <Header />
          <div class='header-img-wrapper'>
            <img id='meskies-header' src={MeskiesHeader} />
          </div>
        </div>
      </section>

      <section id="checkt-project-title" class="project-title-section">
        <div class="section-body">
            <h1 class='project-title'>Meskies</h1>
            <h2 class='project-subtitle'>Redesigning a modernized and user-friendly website for a local restaurant</h2>
            <div class='summary'>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>role</h3>
                <p class='summary-text'>Designer</p>
                <p class='summary-text'>Developer</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>timeline</h3>
                <p class='summary-text'>1 week</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>skills</h3>
                <p class='summary-text'>Wireframing</p>
                <p class='summary-text'>Visual design</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>tools</h3>
                <p class='summary-text'>Figma</p>
                <p class='summary-text'>HTML/CSS</p>
              </div>
            </div>
        </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">PROJECT DETAILS COMING SOON...</h2>
          <h2 class="divider-text">BUT SEE MY DESIGN BELOW!</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
        <div class='space-btn-flexbox flex-start-flexbox'>
          <img id='meskies-design' src={Home} />
          <img id='meskies-design' src={Menu} />
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

export default MeskiesProject;