import React from 'react';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import GradientCircles from '../assets/components/GradientCircles';
import RecWellHeader from '../assets/images/recwell/recwell header.png'
import Award from '../assets/images/recwell/nirsa award.png'
import A from '../assets/images/recwell/socmed-1.png'
import B from '../assets/images/recwell/socmed-2.png'
import C from '../assets/images/recwell/socmed-3.png'
import D from '../assets/images/recwell/socmed-4.png'
import E from '../assets/images/recwell/socmed-5.png'
import F from '../assets/images/recwell/socmed-6.png'
import G from '../assets/images/recwell/socmed-7.png'
import H from '../assets/images/recwell/socmed-8.png'
import I from '../assets/images/recwell/socmed-9.png'
import J from '../assets/images/recwell/socmed-10.png'
import K from '../assets/images/recwell/socmed-11.png'
import L from '../assets/images/recwell/socmed-12.png'
import M from '../assets/images/recwell/socmed-13.png'
import N from '../assets/images/recwell/socmed-14.png'
import O from '../assets/images/recwell/socmed-15.png'
import P from '../assets/images/recwell/socmed-16.png'
import Q from '../assets/images/recwell/socmed-17.png'
import R from '../assets/images/recwell/socmed-18.png'
import S from '../assets/images/recwell/socmed-19.png'
import T from '../assets/images/recwell/socmed-20.png'
import U from '../assets/images/recwell/socmed-21.png'
import V from '../assets/images/recwell/socmed-22.png'
import W from '../assets/images/recwell/socmed-23.png'
import X from '../assets/images/recwell/socmed-24.png'
import Y from '../assets/images/recwell/socmed-portrait1.png'
import Z from '../assets/images/recwell/socmed-portrait2.png'
import AA from '../assets/images/recwell/socmed-portrait3.png'
import FW1 from '../assets/images/recwell/fw-1.png'
import FW2 from '../assets/images/recwell/fw-2.png'
import FW3 from '../assets/images/recwell/fw-3.png'
import FW4 from '../assets/images/recwell/fw-4.png'
import FW5 from '../assets/images/recwell/fw-5.png'
import FW6 from '../assets/images/recwell/fw-6.png'
import FW7 from '../assets/images/recwell/fw-7.png'
import FW8 from '../assets/images/recwell/fw-8.png'
import S1 from '../assets/images/recwell/sign-1.png'
import S2 from '../assets/images/recwell/sign-2.png'
import S3 from '../assets/images/recwell/sign-3.png'
import S4 from '../assets/images/recwell/paper-1.png'
import S5 from '../assets/images/recwell/paper-2.png'
import S6 from '../assets/images/recwell/paper-3.png'
import S7 from '../assets/images/recwell/paper-4.png'
import S8 from '../assets/images/recwell/paper-5.png'
import S9 from '../assets/images/recwell/paper-6.png'

const RecWellProject = () => {
  return (
    <>
      <section id="recwell-project-landing-section" class="project-landing-section">
        <div class="section-body">
          <Header />
          <div class='header-img-wrapper'>
            <img id='recwell-header' src={RecWellHeader} />
          </div>
        </div>
      </section>

      <section id="recwell-project-title" class="project-title-section">
        <div class="section-body">
            <h1 class='project-title'>Berkeley Recreation & Wellbeing</h1>
            <h2 class='project-subtitle'>NIRSA award-winning rebrand of Berkeley Rec Sports into Berkeley Recreation & Wellbeing</h2>
            <div class='summary'>
              <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>role</h3>
                <p class='summary-text'>Designer</p>
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
              </div>
            </div>
        </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">01</h2>
          <h2 class="divider-text">ABOUT</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
          <div class='text-wrapper'>
            <h2 class="section-topic">ABOUT</h2>
            <h1 class="section-title">About Berkeley RecWell</h1>
            <p class="project-text">
            Berkeley Recreation & Wellbeing is the department on UC Berkeley’s campus that offers many recreational 
            activities such as facilities (such as gyms, climbing wall, pools, etc.), intramural and club sports teams, 
            martial arts department, and more.
            </p>
          </div>
        <div class="horizontal-line"></div>
            <h1 class="section-title">An Award-Winning Rebrand</h1>
            <p class="project-text">
            Originally known as Berkeley Rec Sports, I helped the organization rebrand into Berkeley Recreation & Wellbeing. 
            I helped promote the brand’s new focus on wellness, in addition to recreation, by introducing ideas such as 
            “Wellness Wednesday” and “Fitness Friday.” Below are just some of the designs and templates I've created for 
            Berkeley RecWell.
            </p>
            <p class="project-text">
            The Recreation & Wellbeing Renaming and Brand Refresh, won 2nd place in the NIRSA Creative Excellence Awards’ 
            Integrated Marketing Campaign category for 2024. This award recognizes collegiate recreation in university campuses.
            </p>
      </div>
    </section>

    <section id="hmw" class="color-section berkeley-blue-section">
      <div class="section-body">
        <div class='flexbox'>
        <img id='nirsa-award' src={Award} />
          <div class='text-wrapper'>
            <p class="orange hmw-lead">
            In the announcement of the award, I received special recognition:
            </p>
            <h1 class="white hmw-title">
              “Special thank you to Melody Miao...
            </h1>
            <h1 class="white hmw-text">
              in designing many of our new brand templates. Congratulations and thanks for all you do!”
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">02</h2>
          <h2 class="divider-text">SOCIAL MEDIA DESIGNS</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
          <div class='text-wrapper'>
            <h2 class="section-topic">SOCIAL MEDIA DESIGNS</h2>
            <h1 class="section-title">Instagram Posts and Post Templates</h1>
          </div>
          <div class='grid-four'>
            <img class='recwell-design' src={A} />
            <img class='recwell-design' src={B} />
            <img class='recwell-design' src={C} />
            <img class='recwell-design' src={D} />
            <img class='recwell-design' src={E} />
            <img class='recwell-design' src={F} />
            <img class='recwell-design' src={G} />
            <img class='recwell-design' src={H} />
            <img class='recwell-design' src={I} />
            <img class='recwell-design' src={J} />
            <img class='recwell-design' src={K} />
            <img class='recwell-design' src={L} />
            <img class='recwell-design' src={M} />
            <img class='recwell-design' src={N} />
            <img class='recwell-design' src={O} />
            <img class='recwell-design' src={P} />
            <img class='recwell-design' src={Q} />
            <img class='recwell-design' src={R} />
            <img class='recwell-design' src={S} />
            <img class='recwell-design' src={T} />
            <img class='recwell-design' src={U} />
            <img class='recwell-design' src={V} />
            <img class='recwell-design' src={W} />
            <img class='recwell-design' src={X} />
            <img class='recwell-design' src={Y} />
            <img class='recwell-design' src={Z} />
            <img class='recwell-design' src={AA} />
          </div>
      </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">03</h2>
          <h2 class="divider-text">DIGITAL SIGNAGE</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
          <div class='text-wrapper'>
            <h2 class="section-topic">DIGITAL SIGNAGE</h2>
            <h1 class="section-title">Indoor Digital Gym Signage</h1>
          </div>
          <div class='grid-three'>
            <img class='recwell-design' src={FW1} />
            <img class='recwell-design' src={FW2} />
            <img class='recwell-design' src={FW3} />
            <img class='recwell-design' src={FW4} />
            <img class='recwell-design' src={FW5} />
            <img class='recwell-design' src={FW6} />
            <img class='recwell-design' src={FW7} />
            <img class='recwell-design' src={FW8} />
          </div>
      </div>
    </section>

    <section id="overview-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">04</h2>
          <h2 class="divider-text">POSTER SIGNAGE</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
          <div class='text-wrapper'>
            <h2 class="section-topic">POSTER SIGNAGE</h2>
            <h1 class="section-title">Physical Gym Signage</h1>
          </div>
          <div class='grid-four'>
            <img class='recwell-design' src={S1} />
            <img class='recwell-design' src={S2} />
            <img class='recwell-design' src={S3} />
            <img class='recwell-design' src={S4} />
            <img class='recwell-design' src={S5} />
            <img class='recwell-design' src={S6} />
            <img class='recwell-design' src={S7} />
            <img class='recwell-design' src={S8} />
            <img class='recwell-design' src={S9} />
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

export default RecWellProject;