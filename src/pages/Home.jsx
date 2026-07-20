import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import PortfolioGrid from '../assets/components/PortfolioGrid'
import GradientCircles from "../assets/components/GradientCircles"
import './Home.css'

const BouncingPhrase = ({ text }) =>
  text.split('').map((char, i) => (
    <span
      key={i}
      className="lift-letter"
      data-char={char === ' ' ? '\u00A0' : char}
      style={{ animationDelay: `${i * 0.04}s`, '--i': i }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

const Home = () => (
  <div className="home-page">
    <Header />

    <section id="landing-section" className="fade-in delay-1">
      <div className='landing-text'>

        <div className='landing-hi-row'>
          <span className='gray-landing-text'>Hi! I'm</span>
          <span id='miao'>缪</span>
          <span className='gray-landing-text'>Melody,</span>
        </div>

        <h1 className='landing-headline'>
          <span className='headline-first-line'>a Product Designer making</span>
          <span className='headline-second-line'>
            <strong className='headline-animated'>
              <BouncingPhrase text="designs that come to life" />
            </strong><span className='headline-period'>.</span>
          </span>
        </h1>

        <p className='landing-status'>
          Currently <em>open to work</em>.
        </p>

      </div>
    </section>

    <section id="work">
      <PortfolioGrid />
    </section>

    <Footer />

    <div className='background'>
      <GradientCircles />
    </div>
  </div>
)

export default Home