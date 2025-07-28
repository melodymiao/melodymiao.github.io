import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import DividerLine from '../assets/components/DividerLine'
import GradientCircles from '../assets/components/GradientCircles'
import Dashboard from '../assets/images/augene/dashboard.png'
import AugeneLogoWhite from '../assets/images/augene/augene logo white.png'
import AugeneLogo from '../assets/images/augene/Augene Logo.png'
import SkinConcerns from '../assets/images/augene/skin concerns.png'
import AugeneMockup from '../assets/images/augene/augene mockup.png'
import SkincareProducts from '../assets/images/augene/skincare products.png'
import Competitors from '../assets/images/augene/augene competitors.png'
import CompetitiveAnalysis from '../assets/images/augene/competitive analysis.png'
import Persona1 from '../assets/images/augene/persona 1.png'
import Persona2 from '../assets/images/augene/persona 2.png'
import HMW from '../assets/images/augene/hmw.png'
import DashboardPreview from '../assets/images/augene/dashboard preview.jpg'
import Dashboard1 from '../assets/images/augene/dashboard 1.jpg'
import Dashboard2 from '../assets/images/augene/kap dashboard 2.gif'
import Dashboard3 from '../assets/images/augene/dashboard 3.gif'
import Dashboard4 from '../assets/images/augene/dashboard 4.gif'
import Picnic from '../assets/images/augene/augene picnic.jpg'


const AugeneProject = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <Header />
    <section id="augene-project-landing-section" className="project-landing-section">
      <div className='header-img-wrapper'>
        <img id='augene-logo-white' className='logo' src={AugeneLogoWhite} />
        <img id='augene-dashboard' className='preview' src={Dashboard} />
      </div>
    </section>

    <section className='project-overview-section'>
      <div className='project-overview-description'>
        <h1 className='project-title'>Augene Beauty</h1>
        <p className='project-overview'>
          During my 10-week internship at Augene Beauty, I designed a new website and 
          created a comprehensive dashboard to allow clinicians and 
          patients to view results about their skin, learn about specific skincare ingredients 
          for their skin concerns, and discover the most optimal skincare regimen catered to 
          their skin microbiome and lifestyle.
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
          <p class='summary-text'>June 2024 - August 2024</p>
          <p class='summary-text'>(10 weeks)</p>
        </div>
      </div>
    </section>

    <DividerLine />

    <section className='section'>
        <section className='two-column-text'>
            <div className='left-column'>
                <h2 className='large-description'>
                    Augene Beauty is a skin-testing company that helps clinics make the 
                    <span className='augene-blue-text'> best skincare recommendations</span>.
                </h2>
            </div>
            <div className='right-column'>
              <img id='augene-logo' src={AugeneLogo} />
            </div>
        </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>BACKGROUND</h3>
          <h1 className='stage-title'>The 23andMe for your skin.</h1>
          <p class="project-text">
            Augene Beauty is the "23 and Me" for the facial microbiome. They aim to help clinicians make 
            informed skincare recommendations by utilizing their microbiome analysis to recommend the 
            optimal skincare routine for their patients.
          </p>
        </div>
        <div className='right-column'>
          <img id='skin-concerns' src={SkinConcerns} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>PROBLEM</h3>
          <h1 className='stage-title'>Skincare is Tough</h1>
          <p class="project-text">
            The internet is filled with skincare advice. However, it can become difficult for 
            people to find the right product for their skin concerns. Skincare recommendations 
            are often generic and fail to consider the unique microbiome of an individual’s skin, 
            leading to ineffective treatments and frustration for users. 
          </p>
        </div>
        <div className='right-column'>
          <img id='competitors' src={SkincareProducts} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>RESEARCH</h3>
          <h1 className='stage-title'>Competitor Analysis</h1>
          <p class="project-text">
            To understand the market of other skin testing companies, I analyzed multiple 
            businesses that offered a similar skin testing kit. I specifically researched 
            their skin testing methods and how they delivered results to their users.
          </p>
        </div>
        <div className='right-column'>
          <img id='skin-products' src={Competitors} />
        </div>
      </section>
      <div className='centered-image-div'>
        <img id='competitive-analysis' src={CompetitiveAnalysis} />
      </div>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>SYNTHESIS</h3>
          <h1 className='stage-title'>Personas</h1>
          <p class="project-text">
            To understand the perspectives of clinicians and patients interacting with the Augene app,
            I created personas to represent these users and understand their needs.
          </p>
        </div>
        <div className='right-column'>
          <img className='persona' src={Persona1} />
          <img className='persona' src={Persona2} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>SYNTHESIS</h3>
          <h1 className='stage-title'>Research Takeaways</h1>
          <p class="project-text">
            From my research, I pinpointed competitors' strengths and weaknesses to implement
             in my design. I identified three pain points and formulated corresponding 
             'How Might We' questions to guide my design choices.
          </p>
        </div>
        <div className='right-column'>
        <img id='hmw' src={HMW} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='section'>
      <div className='centered-text'>
        <h3 className='project-stage'>HYPOTHESIS</h3>
        <h1 className='stage-title'>More than Just a Test Kit</h1>
        <p class="project-text">
          By offering a place to view skin health results, easily navigate a skincare routine, 
          and learn about recommendations, Augene Beauty can stand out among its competitors.
        </p>
        <img id='augene-mockup' src={AugeneMockup} />
      </div>
    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>IDEATION</h3>
          <h1 className='stage-title'>Developing a Solution</h1>
          <p class="project-text">
            To make test results easily understandable and effective, we can create a prototyped 
            dashboard for clinicians and patients to access test results, learn about specific 
            skincare ingredients, and discover the perfect product for each step of their skincare 
            regimen.
          </p>
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h3 className='project-stage'>SOLUTION</h3>
        <h1 className='app-name'>Augene Dashboard</h1>
        <h2 class="solution-subtitle augene-blue-text">
          Skincare, simplified
        </h2>
      </section>
      <div className='centered-img-text'>
        <img id='checkt-preview' src={DashboardPreview} />
      </div>

    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='augene-blue-text'>Home</h2>
        <h1 className='stage-title'>Skin Health Summary</h1>
      </section>
      <div className='centered-img-text'>
        <img id='widget-preview' src={Dashboard1} />
        <p class="project-text">
          View skin diagnostics, top skincare ingredients, and notes from clinician to understand 
          the skin's needs
        </p>
      </div>

    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='augene-blue-text'>Skin Analysis</h2>
        <h1 className='stage-title'>Learn About Your Skin</h1>
      </section>
      <div className='centered-img-text'>
        <img id='widget-preview' src={Dashboard2} />
        <p class="project-text">
          Understand your skin's risks and how you can protect it from potential diseases
        </p>
      </div>

    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='augene-blue-text'>Products for You</h2>
        <h1 className='stage-title'>The Best Products for Your Skin</h1>
      </section>
      <div className='centered-img-text'>
        <img id='widget-preview' src={Dashboard3} />
        <p class="project-text">
          Compare and select the products you want in your skincare routine
        </p>
      </div>

    </section>

    <section className='solution-section'>

      <section className='solution-header-text'>
        <h2 className='augene-blue-text'>Build Your Routine</h2>
        <h1 className='stage-title'>Your Personalized Routine</h1>
      </section>
      <div className='centered-img-text'>
        <img id='widget-preview' src={Dashboard4} />
        <p class="project-text">
          See your step-by-step, personalized skincare routine
        </p>
      </div>

    </section>

    <DividerLine />

    <section className='section'>
      <section className='two-column-text'>
        <div className='left-column'>
          <h3 className='project-stage'>REFLECTION</h3>
          <h1 className='stage-title'>Empathizing with the User</h1>
          <p class="project-text">
          Designing this dashboard required me to deeply empathize with the struggles of skincare users. 
          For instance, instead of offering a rigid routine, 
          I designed a routine builder that allows users the freedom to 
          balance their budget and preferences.
          </p>
          <p class="project-text">
          I also remembered my own confusion as a skincare beginner, which led me to design 
          clear AM/PM labeling and routine ordering. Without my own experience navigating 
          these frustrations, I likely would have 
          overlooked these details and delivered something far less helpful to real users.
          </p>
        </div>
        <div className='right-column'>
          <img id='picnic' src={Picnic} />
        </div>
      </section>
    </section>

    <DividerLine />

    <section className='next-project-section'>

      <Link className='next-project-link' to="/checkt" onClick={handleLinkClick}>
        <span className="left-arrow">←</span>
        <div className='previous-project-text'>
          <h3 className='project-stage'>PREVIOUS PROJECT</h3>
          <h1 className='project-title'>CHECKT</h1>
        </div>
      </Link>
  
      <Link className='next-project-link' to="/checkt" onClick={handleLinkClick}>
        <div className='next-project-text'>
          <h3 className='project-stage'>NEXT PROJECT</h3>
          <h1 className='project-title'>INNOVATIVE DESIGN</h1>
        </div>
        <span className="right-arrow">→</span>
      </Link>
      
    </section>



    <Footer />
      
    </>
  );
}

export default AugeneProject;