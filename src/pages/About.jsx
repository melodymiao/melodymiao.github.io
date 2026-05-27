import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Portrait from '../assets/images/about/portrait.jpg'
import Balboa from '../assets/images/about/balboa.jpg'
import BTS from '../assets/images/about/bts concert.jpg'
import Wagon from '../assets/images/about/wagon.jpg'
import './About.css'

const About = () => {
    return (
    <>
    <Header />
    <main>
        <section className='about-section'>

            {/* ── Left column ── */}
            <div className='about-left'>

                <div className='about-intro'>
                    <h1 className='about-headline'>
                    I'm a designer who builds what I design.
                    </h1>
                    <p className='about-subtext'>
                        UC Berkeley grad, Data Science + Cognitive Science
                    </p>
                    <div className='about-status'>
                        <span className='status-dot' />
                        <span>Open to work</span>
                    </div>
                </div>

                <div className='about-block'>
                    <ul className='about-list'>
                        <li>Grew up in San Diego around beaches and perpetual sunshine</li>
                        <li>Exploring AI tools throughout my process: wireframing, rapid iteration, and pushing ideas faster</li>
                        <li>Got into design because it combines empathy and craft</li>
                    </ul>
                </div>

                <div className='about-block'>
                    <p className='about-subtext'>
                        Outside of design, I also enjoy...
                    </p>
                    <ul className='about-list'>
                        <li>💃 Dancing (take my classes @ <a href="https://www.haappydaance.com/book-a-class" target='_blank' rel='noreferrer' className='haappy-link'>Haappy Daance</a>!)</li>
                        <li>🎬 Videography & video editing</li>
                        <li>🎤 Going to K-pop concerts</li>
                    </ul>
                </div>

                <div className='about-block'>
                    <div className='about-links'>
                        <a href="mailto:melodymiao001@gmail.com" className='about-link'>Email ↗</a>
                        <a href="https://www.linkedin.com/in/melody-miao/" target='_blank' rel='noreferrer' className='about-link'>LinkedIn ↗</a>
                    </div>
                </div>

            </div>

            {/* ── Right column: photos ── */}
            <div className='about-right'>
                <div className='photo-grid'>
                    <img className='photo-main' src={Portrait} alt="me!" />
                    {/* swap these src values for additional photos when you have them */}
                    <img className='photo-secondary' src={Wagon} alt="beach day :)" />
                    <img className='photo-secondary' src={BTS} alt="me @ BTS Arirang Tour in Vegas" />
                </div>
            </div>

        </section>
    </main>
    <Footer />
    </>
);
}

export default About;