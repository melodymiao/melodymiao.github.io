import { useEffect, useState } from 'react'
import HomeNav from '../assets/components/HomeNav'
import HomeFooter from '../assets/components/HomeFooter'
import PortfolioGrid from '../assets/components/PortfolioGrid'
import GradientCircles from "../assets/components/GradientCircles"
import GradientToggle from '../assets/components/GradientToggle'
import CityRotator from '../assets/components/CityRotator'
import { useWeather } from '../assets/lib/useWeather'
import { PRESET_CITIES } from '../assets/lib/cities'
import './Home.css'

const GRADIENT_PREF_KEY = 'gradientEnabled'

const readStoredPreference = () => {
  if (typeof window === 'undefined') return true
  const stored = window.localStorage.getItem(GRADIENT_PREF_KEY)
  return stored === null ? true : stored === 'true'
}

const Home = () => {
  const [gradientOn, setGradientOn] = useState(readStoredPreference)
  const [city, setCity] = useState(PRESET_CITIES[0])
  const activeWeather = useWeather(city)
  const theme = gradientOn ? 'theme-gradient' : 'theme-plain'

  useEffect(() => {
    window.localStorage.setItem(GRADIENT_PREF_KEY, String(gradientOn))
  }, [gradientOn])

  return (
    <div className={`home-page ${theme}`}>
      <HomeNav />

      <section id="landing-section" className="fade-in delay-1">
        <CityRotator onSelect={setCity} activeWeather={activeWeather} />

        <h1 className="landing-headline">
          <span>I&apos;m Melody, a Product Designer</span>
          <span>making designs that come to life.</span>
        </h1>

        <GradientToggle checked={gradientOn} onChange={setGradientOn} />
      </section>

      <section id="work">
        <div className="work-card">
          <PortfolioGrid />
        </div>
      </section>

      <HomeFooter />

      {gradientOn && (
        <div className='background'>
          <GradientCircles />
        </div>
      )}
    </div>
  )
}

export default Home
