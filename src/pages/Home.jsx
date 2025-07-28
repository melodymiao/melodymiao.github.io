import Header from '../assets/components/Header'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import PortfolioGrid from '../assets/components/PortfolioGrid'
import Footer from '../assets/components/Footer'
import GradientCircles from "../assets/components/GradientCircles"
import oski from '../assets/images/home/oski.png'
import './Home.css'

const Home = () => {
    return (
    <>
    <Header />
    <section id="landing-section" className="sections">
        <div className='landing-text'>
            <h1 className='gray-text'>
                Hi, I'm <span id='miao-hover'><span id='miao'>缪</span><span id='miao-text'>Miao,</span></span> Melody.
            </h1>
            
            <h1 className='dark-text'>
                Product Designer creating simple and enjoyable user experiences
            </h1>
        </div>
        
    </section>

    <section id="work" class="sections">
        <div className='center-flexbox'>
            <HashLink className='nav-button' to="/#work" smooth>
                <div className='project-arrow'>
                    <p className='project-text'>
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