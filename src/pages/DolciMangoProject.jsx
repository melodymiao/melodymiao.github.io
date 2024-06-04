import React from 'react';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import GradientCircles from '../assets/components/GradientCircles';
import DolciHeader from '../assets/images/dolci/dolci mango header.png'
import DolciLogo from '../assets/images/dolci/dolci mango logo.png'
import Taiyaki from '../assets/images/dolci/taiyaki.png'
import DolciPersonas from '../assets/images/dolci/dolci persona figures.png'
import DolciPersona1 from '../assets/images/dolci/persona amanda.png'
import DolciPersona2 from '../assets/images/dolci/persona tom.png'
import SomiSomi from '../assets/images/dolci/somisomi.png'
import Everbowl from '../assets/images/dolci/everbowl.jpg'
import Cursor from '../assets/images/dolci/cursor.png'
import Menu from '../assets/images/dolci/menu.png'
import Photo from '../assets/images/dolci/photo.png'
import DolciLofis from '../assets/images/dolci/dolci lofis.png'
import DolciMidfis from '../assets/images/dolci/dolci midfis.png'

const DolciMangoProject = () => {
  return (
    <>
    <section id="dolci-project-landing-section" class="project-landing-section">
      <div class="section-body">
        <Header />
        <div class='header-img-wrapper'>
          <img id='dolci-header' src={DolciHeader} />
        </div>
      </div>
    </section>

    <section id="dolci-project-title" class="project-title-section">
        <div class="section-body">
            <h1 class='project-title'>Dolci Mango</h1>
            <h2 class='project-subtitle'>Redesigning a more playful and friendly website for a local frozen yogurt shop</h2>
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
          <h2 class="divider-text">1</h2>
          <h2 class="divider-text">OVERVIEW</h2>
        </div>
      </div>
    </section>

    <section id="overview-section" class="text-sections">
      <div class="section-body">
        <div class='space-btn-flexbox'>
          <div class='text-wrapper'>
            <h2 class="section-topic">OVERVIEW</h2>
            <h1 class="section-title">What's Dolci Mango?</h1>
            <p class="project-text">
            Dolci Mango is a family-owned frozen yogurt shop in San Diego. Alongside their frozen yogurt, 
            they specialize in “fish ice cream,” a Korean ice cream dessert with a fish-shaped cone. 
            I redesigned their site to better reflect their branding and create a friendlier user experience.
            </p>
          </div>
          <img id='dolci-logo' src={DolciLogo} />
        </div>
        <div class="horizontal-line"></div>
            <h1 class="section-title">The Problem:</h1>
            <p class="project-text">
              The "fish ice cream" is a trendy and unique dessert. There are a
              limited number of shops that sell them. Dolci Mango is a small shop, tucked away in a busy plaza 
              with very little advertising and online presence. While people want to enjoy their treats, very few 
              people know about Dolci Mango.
            </p>
            <p class="project-text">
              A professional website that highlights the shop's unique desserts could help gain more visibility.
            </p>
      </div>
    </section>

    <section id="hmw" class="color-section yellow-section">
      <div class="section-body">
        <div class='space-btn-flexbox'>
          <img id='taiyaki' src={Taiyaki} />
          <div class='text-wrapper'>
            <p class="orange hmw-lead">
              To frame the problem statement, I asked:
            </p>
            <h1 class="black hmw-title">
              How Might We...
            </h1>
            <h1 class="black hmw-text">create an <u>engaging digital presence</u> to 
            help <u>local customers</u> easily <u>discover and enjoy</u> the 
            unique desserts offered?
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section id="user-research-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">2</h2>
          <h2 class="divider-text">USER RESEARCH</h2>
        </div>
      </div>
    </section>

    <section class="user-research-section text-sections">
      <div class="section-body">
        <div class='space-btn-flexbox persona-intro-flexbox'>
          <div class='text-wrapper'>
            <h2 class="section-topic">USER RESEARCH</h2>
            <h1 class="section-title">Understanding the User</h1>
            <p class="project-text">
            To better understand the website's users, I utilized personas representing the real customers 
            and conversations I’ve observed at the store. By creating the personas, I better understood 
            the motivations and goals different customers may have.
            </p>
          </div>
          <img id='dolci-persona-figures' class='persona-figures' src={DolciPersonas} />
        </div>
        <div class='space-btn-flexbox'>
          <img class='dolci-persona persona' src={DolciPersona1} />
          <img class='dolci-persona persona' src={DolciPersona2} />
        </div>
        <div class="horizontal-line"></div>
        <h1 class="section-title">Competitive Analysis</h1>
        <p class="project-text">
        I analyzed the websites of two of Dolci Mango’s competitors to find their strengths and weaknesses 
        to aid my design choices.
        </p>
        <div class='space-btn-flexbox'>
          <img id='somisomi' class='competitor-logo' src={SomiSomi} />
          <div class='comp-analysis'>
            <h1 class="section-title">SomiSomi</h1>
            <p class="competitor-description">
            Somi Somi, the direct competitor I analyzed, is an ice cream shop that 
            specifically sells fish ice cream.
            </p>
            <div class='comp-analysis-strength-weakness'>
              <div class='comp-analysis-side strengths'>
                <h2 class='orange comp-analysis-side-title'>+ Strengths</h2>
                <ul class='black comp-analysis-text'>
                  <li>“Fish ice cream” is the main thing sold by Somi Somi and is clearly marketed on website</li>
                  <li>Different colors for the menu of different ice cream flavors is a strong visual</li>
                  <li>Front page’s banner announcements are very clear and in season</li>
                </ul>
              </div>
              <div class='comp-analysis-side weaknesses'>
                <h2 class='orange comp-analysis-side-title'>- Weaknesses</h2>
                <ul class='black comp-analysis-text'>
                  <li>Too many colors on the page which is distracting</li>
                  <li>Despite displaying colors for different flavors, it may still be difficult to recognize what each flavor is since some flavors are similar colors</li>
                  <li>Menu does not show topping options (only flavors)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class='space-btn-flexbox'>
          <img id='everbowl' class='competitor-logo' src={Everbowl} />
          <div class='comp-analysis'>
            <h1 class="section-title">Everbowl</h1>
            <p class="competitor-description">
            Everbowl, the indirect competitor I analyzed, is an acai bowl 
            shop across the street from Dolci Mango.
            </p>
            <div class='comp-analysis-strength-weakness'>
              <div class='comp-analysis-side strengths'>
                <h2 class='orange comp-analysis-side-title'>+ Strengths</h2>
                <ul class='black comp-analysis-text'>
                  <li>Emphasis on fresh ingredients with visually appealing fresh fruits</li>
                  <li>Clear bowls that display ingredients and layers well</li>
                  <li>“Steps” in menu are well laid out</li>
                </ul>
              </div>
              <div class='comp-analysis-side weaknesses'>
                <h2 class='orange comp-analysis-side-title'>- Weaknesses</h2>
                <ul class='black comp-analysis-text'>
                  <li>Menu takes a lot of scrolling</li>
                  <li>Each menu item has a lot of wordy text</li>
                  <li>Although the “customizable” bowl has easy-to-read text, the ingredients of this menu are not as visual</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="horizontal-line"></div>
        <h1 class="section-title">Summarizing the Research</h1>
        <p class="project-text">
          These were the biggest takeaways from the user research conducted:
        </p>
        <div class='space-btn-flexbox research-summary-flexbox'>
            
            <div class='img-text-vertical-wrapper'>
              <img id='cursor' class='research-summary-img' src={Cursor} />
              <p class="research-summary-point">Customers want to easily discover what is being sold</p>
            </div>
              
            <div class='img-text-vertical-wrapper'>
              <img id='menu' class='research-summary-img' src={Menu} />
              <p class="research-summary-point">Menu items and ingredients should be clearly defined</p>
            </div>
              
            <div class='img-text-vertical-wrapper'>
              <img id='photo' class='research-summary-img' src={Photo} />
              <p class="research-summary-point">Use of real pictures helps visualize products</p>
            </div>
        </div>
      </div>
    </section>

    <section id="user-research-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">3</h2>
          <h2 class="divider-text">IDEATION</h2>
        </div>
      </div>
    </section>

    <section id="ideation-section" class="text-sections">
      <div class="section-body">
        <h2 class="section-topic">IDEATION</h2>
        <h1 class="section-title">Low-Fidelity Design and Ideas</h1>
        <p class="project-text">
          I defined several goals and ideated possible solutions for each.
        </p>
        <div class='space-btn-flexbox'>
          <div class='text-wrapper ideation-goals-solutions'>
            <h2 class='number'>1.</h2>
            <h2 class='ideation-goals'>Improve <u>accessibility</u> of information</h2>
            <p class='ideation-solutions'>Separate content across multiple pages</p>
          </div>
          <div class='text-wrapper ideation-goals-solutions'>
          <h2 class='number'>2.</h2>
            <h2 class='ideation-goals'>Make website more engaging to <u>younger audiences</u></h2>
            <p class='ideation-solutions'>Create an interactive, gameified menu</p>
          </div>
          <div class='text-wrapper ideation-goals-solutions'>
            <h2 class='number'>3.</h2>
            <h2 class='ideation-goals'>Encourage <u>social media engagement</u></h2>
            <p class='ideation-solutions'>Dedicate a page to user's creations</p>
          </div>
        </div>
        <img id='dolci-lofis' class='full-img' src={DolciLofis} />
      </div>
    </section>

    <section id="user-research-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">4</h2>
          <h2 class="divider-text">MID-FIDELITY DESIGN</h2>
        </div>
      </div>
    </section>

    <section id="ideation-section" class="text-sections">
      <div class="section-body">
        <h2 class="section-topic">MID-FIDELITY DESIGN</h2>
        <h1 class="section-title">Mid-Fidelity Design</h1>
        <p class="project-text">
          I then moved on to create mid-fidelity designs from my initial low-fidelity ideas.
        </p>
        <img id='dolci-midfis' class='full-img' src={DolciMidfis} />
      </div>
    </section>

    <section id="user-research-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">5</h2>
          <h2 class="divider-text">FEEDBACK & ITERATIONS</h2>
        </div>
      </div>
    </section>

    <section id="ideation-section" class="text-sections">
      <div class="section-body">
        <h2 class="section-topic">FEEDBACK & ITERATIONS</h2>
        <h1 class="section-title">User Feedback & Iterations</h1>
        <p class="project-text">
          I presented my ideas to 4 individuals to see their feedback. I then utilized their feedback to make iterations of the design.
        </p>
      </div>
    </section>

    <section id="user-research-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">6</h2>
          <h2 class="divider-text">THE REDESIGN</h2>
        </div>
      </div>
    </section>

    <section id="ideation-section" class="text-sections">
      <div class="section-body">
        <h2 class="section-topic">THE REDESIGN</h2>
        <h1 class="section-title">The Redesigned Website</h1>
        <p class="project-text">
          Here is a closer look at the redesigned website:
        </p>
      </div>
    </section>

    <section id="user-research-section-divider" class="section-divider">
      <div class="section-body">
        <div class="section-div-text-wrapper">
          <h2 class="divider-text">THIS PAGE IS UNDER CONSTRUCTION</h2>
          <h2 class="divider-text">PLEASE COME BACK LATER!</h2>
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

export default DolciMangoProject;