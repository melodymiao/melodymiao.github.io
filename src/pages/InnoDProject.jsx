import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import DividerLine from '../assets/components/DividerLine'
import GradientCircles from '../assets/components/GradientCircles'
import InnoD from '../assets/images/innod/innod logo.png'
import InnoDPreview from '../assets/images/innod/innod preview.jpg'
import SP24RecruitLogo from '../assets/images/innod/sp24 recruitment logo.png'
import SP24RecruitPage from '../assets/images/innod/sp24 recruitment website.jpg'
import SP24RecruitColors from '../assets/images/innod/sp24 recruitment colors.png'
import SP24RGBLogo from '../assets/images/innod/sp24 rgb logo.png'
import SP24RGB from '../assets/images/innod/sp24 rgb.jpg'
import SP24HEXLogo from '../assets/images/innod/sp24 hex logo.png'
import SP24HEX from '../assets/images/innod/sp24 hex small.jpg'
import FA24RecruitLogo from '../assets/images/innod/fa24 recruitment logo.png'
import FA24RecruitPage from '../assets/images/innod/fa24 recruitment.jpg'
import FA24HEXLogo from '../assets/images/innod/fa24 hex logo.png'
import FA24HEX from '../assets/images/innod/fa24 hex.jpg'
import FA24CMYKLogo from '../assets/images/innod/fa24 cmyk logo.png'
import FA24CMYK from '../assets/images/innod/fa24 cmyk.jpg'


const InnoDProject = () => {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
  return (
    <>
    <Header />

    <section id="innod-project-landing-section" className="project-landing-section">
        <div className='header-img-wrapper'>
            <img className='logo' src={InnoD} />
            <img className='header-preview' src={InnoDPreview} />
        </div>
    </section>

    <section className='project-overview-section'>
        <div className='project-overview-wrapper'>
            <div className='project-overview-description'>
                <h1 className='project-title'>Innovative Design</h1>
                <p className='project-overview'>
                As VP of Technology of UC Berkeley's Innovative Design club, I worked closely 
                with our marketing team to create unique web pages for various club events, often 
                under tight deadlines of 3-5 days. The marketing team provided the branding and the assets while
                the tech team (us!) would design and develop the webpage.
                </p>
            </div>
            <div className='project-overview-summaries'>
                <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>ROLE</h3>
                <p class='summary-text'>Web Design</p>
                <p class='summary-text'>Web Development</p>
            </div>
            <div class='summary-vertical-sections'>
                <h3 class='summary-titles'>TEAM</h3>
                <p class='summary-text'>Melody Miao (SP24 & FA24)</p>
                <p class='summary-text'>Eric Yang (SP24)</p>
                <p class='summary-text'>JR Garbe (FA24)</p>
            </div>
        </div>
      </div>
    </section>

    <body>

        <section className='innod-section'>
            <section className='two-column-text'>
                <div className='left-column'>
                    <h3 className='project-stage'>SPRING 2024</h3>
                    <h1 className='stage-title'>Club/DeCal Recruitment</h1>
                    <p class="project-text">
                    Every semester, our club opened applications to join the club and 
                    the student-led classes (known as DeCals at UC Berkeley) we offer.
                    This webpage provided the recruitment timeline as well as the links 
                    to applications for each team and course. This page showcases vibrant
                    artwork made by the marketing team and is often the first impression
                    that people have of the club.
                    </p>
                    <p class="project-text">
                    The theme for this recruitment season was a colorful, comic-book-inspired theme.
                    </p>
                </div>
                <div className='right-column'>
                    <img className='innod-logo' src={SP24RecruitLogo} />
                </div>
            </section>
            
            <div className='webpage-image-div'>
                <h3>
                    Scroll over image to see full page design
                </h3>
                <div className='image-scroll-container'>
                    <img className='webpage-design' src={SP24RecruitPage} />
                </div>
            </div>
        </section>

        <section className='innod-section'>
            <section className='two-column-text'>
                <div className='left-column'>
                    <h3 className='project-stage'>SPRING 2024</h3>
                    <h1 className='stage-title'>Reach Grow Build</h1>
                    <p class="project-text">
                    Reach Grow Build (RGB) is a speaker series where professionals artists and photographers
                    give workshops and speak about their experience, giving students learning and networking opportunities.
                    </p>
                    <p class="project-text">
                    This theme was casino-inspired and featured elements of well-loved games around the world including
                    chess, pool, roulette, mahjong, and more.
                    </p>
                </div>
                <div className='right-column'>
                    <img className='innod-logo' src={SP24RGBLogo} />
                </div>
            </section>
            
            <div className='webpage-image-div'>
                <h3>
                    Scroll over image to see full page design
                </h3>
                <div className='image-scroll-container'>
                    <img className='webpage-design' src={SP24RGB} />
                </div>
            </div>
        </section>

        <section className='innod-section'>
            <section className='two-column-text'>
                <div className='left-column'>
                    <h3 className='project-stage'>SPRING 2024</h3>
                    <h1 className='stage-title'>Hone and Explore</h1>
                    <p class="project-text">
                    Hone and Explore (HEX) is a weekend of free graphic design, photography, and website design workshops 
                    hosted by InnoD club members where students learn various creative skills.
                    </p>
                    <p class="project-text">
                    This theme was a chromecore, Y2K futurism aesthetic.
                    </p>
                </div>
                <div className='right-column'>
                    <img className='innod-logo' src={SP24HEXLogo} />
                </div>
            </section>
            
            <div className='webpage-image-div'>
                <h3>
                    Scroll over image to see full page design
                </h3>
                <div className='image-scroll-container'>
                    <img className='webpage-design' src={SP24HEX} />
                </div>
            </div>
        </section>

        <section className='innod-section'>
            <section className='two-column-text'>
                <div className='left-column'>
                    <h3 className='project-stage'>FALL 2024</h3>
                    <h1 className='stage-title'>Club/DeCal Recruitment</h1>
                    <p class="project-text">
                    Once again for our club's recruitment season, this webpage 
                    provided the timeline as well as the links 
                    to each team/Decal course application.
                    </p>
                    <p class="project-text">
                    The theme for this recruitment season was a cozy, Animal Crossing-inspired bakery theme.
                    </p>
                </div>
                <div className='right-column'>
                    <img className='innod-logo' src={FA24RecruitLogo} />
                </div>
            </section>
            
            <div className='webpage-image-div'>
                <h3>
                    Scroll over image to see full page design
                </h3>
                <div className='image-scroll-container'>
                    <img className='webpage-design' src={FA24RecruitPage} />
                </div>
            </div>
        </section>

        <section className='innod-section'>
            <section className='two-column-text'>
                <div className='left-column'>
                    <h3 className='project-stage'>FALL 2024</h3>
                    <h1 className='stage-title'>Hone and Explore</h1>
                    <p class="project-text">
                    Hone and Explore (HEX) is a weekend of free graphic design, photography, and website design workshops 
                    hosted by InnoD club members where students learn various creative skills.
                    </p>
                    <p class="project-text">
                    This theme featured a throwback 90s Windows theme with interactive, 3D jelly-like elements, 
                    blending the nostalgic theme with a modern touch. The webpage also had clickable "file" buttons on the 
                    upper-left corner of the design which displayed pop-ups of the schedule for each day.
                    </p>
                </div>
                <div className='right-column'>
                    <img className='innod-logo' src={FA24HEXLogo} />
                </div>
            </section>
            
            <div className='webpage-image-div'>
                <h3>
                    Scroll over image to see full page design
                </h3>
                <div className='image-scroll-container'>
                    <img className='webpage-design' src={FA24HEX} />
                </div>
            </div>
        </section>

        <section className='innod-section'>
            <section className='two-column-text'>
                <div className='left-column'>
                    <h3 className='project-stage'>FALL 2024</h3>
                    <h1 className='stage-title'>Come Make Your Mark</h1>
                    <p class="project-text">
                    Come Make Your Mark (CMYK) is a designathon and speaker series. Students have the opportunity
                    to participate in workshops given by professionals in the design industry and compete in a 
                    design competition with a design challenge created by a company/business. This year's designathon
                    was in partnership with Problem Library.
                    </p>
                    <p class="project-text">
                    This theme was inspired by KASAKII STORE graphics, featuring a grid background, bold black outlines
                    and lettering, bright colors, and a mixture of minimalist and maximalist elements.
                    </p>
                </div>
                <div className='right-column'>
                    <img className='innod-logo' src={FA24CMYKLogo} />
                </div>
            </section>
            
            <div className='webpage-image-div'>
                <h3>
                    Scroll over image to see full page design
                </h3>
                <div className='image-scroll-container'>
                    <img className='webpage-design' src={FA24CMYK} />
                </div>
            </div>
        </section>

        <section className='next-project-section'>
            <div className='link-wrapper'>
                <Link className='next-project-link' to="/augene" onClick={handleLinkClick}>
                    <span className="left-arrow">←</span>
                    <div className='previous-project-text'>
                    <h3 className='project-stage'>PREVIOUS PROJECT</h3>
                    <h1 className='project-title'>AUGENE BEAUTY</h1>
                    </div>
                </Link>

                <div>
                </div>
            </div>
        </section>
    </body>

    <Footer />
      
    </>
  );
}

export default InnoDProject;