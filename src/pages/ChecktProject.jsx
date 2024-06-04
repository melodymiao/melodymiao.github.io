import React from 'react';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import GradientCircles from '../assets/components/GradientCircles';
import ChecktHeader from '../assets/images/checkt/checkt header.png'
import Prototype from '../assets/images/checkt/checkt prototype.gif'
import Components1 from '../assets/images/checkt/checkt components 1.png'
import Components2 from '../assets/images/checkt/checkt components 2.png'

const ChecktProject = () => {
  return (
    <>
      <section id="checkt-project-landing-section" class="project-landing-section">
        <div class="section-body">
          <Header />
          <div class='header-img-wrapper'>
            <img id='checkt-header' src={ChecktHeader} />
          </div>
        </div>
      </section>

      <section id="checkt-project-title" class="project-title-section">
        <div class="section-body">
            <h1 class='project-title'>Checkt</h1>
            <h2 class='project-subtitle'>Creating a comprehensive to-do list and schedule management platform</h2>
            <div class='summary'>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>role</h3>
                <p class='summary-text'>Designer</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>timeline</h3>
                <p class='summary-text'>2 weeks</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>skills</h3>
                <p class='summary-text'>User research</p>
                <p class='summary-text'>Wireframing</p>
                <p class='summary-text'>Visual design</p>
              </div>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>tools</h3>
                <p class='summary-text'>Figma</p>
              </div>
            </div>
        </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">PROJECT DETAILS COMING SOON...</h2>
          <h2 class="divider-text">BUT SEE MY PROTOTYPED DESIGN BELOW!</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
        <div class='space-btn-flexbox'>
          <img id='checkt-components' src={Components1} />
          <img id='checkt-prototype' src={Prototype} />
          <img id='checkt-components' src={Components2} />
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

export default ChecktProject;