import Header from '../assets/components/Header'
import Title from '../assets/components/Title'
import PortfolioGrid from '../assets/components/PortfolioGrid'
import Footer from '../assets/components/Footer'
import GradientCircles from "../assets/components/GradientCircles"
import './Home.css'

const Home = () => {
    return (
    <>
    <section id="landing-section" class="sections">
        <div class="section-body">
            <Header />
            <Title />
        </div>
    </section>

    <section id="portfolio-section" class="sections">
        <div class="wrapper">
            <div class="marquee">
                <p>
                PARDON THE DUST, THIS WEBSITE IS UNDER CONSTRUCTION. &nbsp; THANK YOU FOR VISITING! &nbsp; &nbsp;
                PARDON THE DUST, THIS WEBSITE IS UNDER CONSTRUCTION. &nbsp; THANK YOU FOR VISITING! &nbsp; &nbsp;
                </p>
                <p>
                PARDON THE DUST, THIS WEBSITE IS UNDER CONSTRUCTION. &nbsp; THANK YOU FOR VISITING! &nbsp; &nbsp;
                PARDON THE DUST, THIS WEBSITE IS UNDER CONSTRUCTION. &nbsp; THANK YOU FOR VISITING! &nbsp; &nbsp;
                </p>
            </div>
        </div>
        <div class="section-body">
            <PortfolioGrid />
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
  
  export default Home;