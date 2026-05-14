import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import PortfolioGrid from '../assets/components/PortfolioGrid'
import GradientCircles from "../assets/components/GradientCircles"
import oski from '../assets/images/home/oski.png'
import './Home.css'

const Home = () => {
    return (
    <>
    <Header />
    <section id="landing-section" className="sections">
        <div className='landing-text'>
            <div className='landing-large'>
                <h1 className='gray-landing-text fade-in delay-1'>
                    Hi! I'm <span id='miao-hover'>
                        <span id='miao'>缪</span>
                        <span id='miao-text'>Miao,</span>
                    </span> Melody.
                </h1>
                
                <h1 className='dark-text fade-in delay-2'>
                    Product Designer creating <span id='blue-purple-text'>simple</span> &amp; <span id='yellow-orange-text'>enjoyable</span> user experiences
                </h1>
            </div>
            
            <p className='fade-in delay-3'>Currently <span className='italic'>open to work</span>.</p>
        </div>
        
    </section>

    <section id="work" className="section">
        <div className='center-flexbox'>
            <HashLink className='nav-button' to="/#work" smooth>
                <div className='project-arrow fade-in delay-4'>
                    <p className='project-arrow-text'>
                        Projects
                    </p>
                    <span className="arrow">↓</span>
                </div>
            </HashLink>
        </div>
        
        <PortfolioGrid />
    </section>
    
    <Footer />

    
    <div class='background'>
        <GradientCircles />
    </div>
    </>
);
}
  
  export default Home;