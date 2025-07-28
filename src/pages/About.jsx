import Header from '../assets/components/Header'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import PortfolioGrid from '../assets/components/PortfolioGrid'
import Footer from '../assets/components/Footer'
import Portrait from '../assets/images/about/portrait.jpg'
import './About.css'

const About = () => {
    return (
    <>
    <Header />

    <section className='about-section'>
        <section className='two-column-text'>
        <div className='right-column'>
            <img id='about-portrait' src={Portrait} />
        </div>
        <div className='left-column'>
            <h1 className='stage-title'>Hi, I'm Melody!</h1>
            <p class="project-text">
                I’m a recent UC Berkeley graduate with a degree in Data Science and Cognitive Science, 
                passionate about understanding how people interact with the world around them.
            </p>
            <p class="project-text">
            I grew up in sunny San Diego, taco capital and surf city of America. I’ve always been 
            fascinated by human behavior, always curious about the “why” behind the ways people think, 
            feel, and act.
            </p>
            <p class="project-text">
            When I discovered product design, I realized design could be more than just aesthetics. 
            It could be a bridge between empathy and innovation, creating solutions that genuinely
            improve people’s lives.
            </p>
            <p class="project-text">
            Outside of design, I like to stay inspired through other creative outlets such as 
            dancing, videography, and video editing
            </p>
        </div>
        </section>
    </section>  

    <Footer />
    </>
);
}
  
  export default About;