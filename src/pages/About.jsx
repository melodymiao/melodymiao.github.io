import { useLayoutEffect, useRef, useState } from 'react'
import HomeNav from '../assets/components/HomeNav'
import SiteFooter from '../assets/components/SiteFooter'
import Portrait from '../assets/images/about/portrait.jpg'
import Balboa from '../assets/images/about/balboa.jpg'
import BTS from '../assets/images/about/bts concert.jpg'
import Wagon from '../assets/images/about/wagon.jpg'
import './About.css'

const About = () => {
    const leftColumnRef = useRef(null)
    const [photoHeight, setPhotoHeight] = useState(null)

    // Photos should stand as tall as the text column next to them — measured
    // live (instead of a guessed pixel value) so it stays correct as copy
    // changes. Below the 1100px breakpoint the layout switches to a
    // shorter/auto-height photo arrangement (see About.css), so we stop
    // forcing a height there and let CSS take over.
    useLayoutEffect(() => {
        const leftEl = leftColumnRef.current
        if (!leftEl) return

        const updateHeight = () => {
            setPhotoHeight(window.innerWidth > 1100 ? leftEl.offsetHeight : null)
        }

        updateHeight()
        const observer = new ResizeObserver(updateHeight)
        observer.observe(leftEl)
        window.addEventListener('resize', updateHeight)
        return () => {
            observer.disconnect()
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    return (
    <div className="about-page theme-plain">
    <HomeNav />
    <main>
        <section className='about-section'>

            {/* ── Left column ── */}
            <div className='about-left' ref={leftColumnRef}>

                <div className='about-intro'>
                    <h1 className='about-headline'>
                    I'm a designer who builds what I design.
                    </h1>
                    <p className='about-subtext'>
                        UC Berkeley grad, Data Science B.A. + Cognitive Science B.A.
                    </p>
                </div>

                <div className='about-block'>
                    <ul className='about-list'>
                        <li>Born and raised in the San Diego sun</li>
                        <li>Tinkering with Figma motion and generative plugins</li>
                        <li>Vibecoding new, fun projects</li>
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
                    <p className='about-subtext'>
                        Reach out about my projects, your projects, or a good conversation.
                    </p>
                    <div className='about-links'>
                        <a href="mailto:melodymiao001@gmail.com" className='about-link'>Email ↗</a>
                        <a href="https://www.linkedin.com/in/melody-miao/" target='_blank' rel='noreferrer' className='about-link'>LinkedIn ↗</a>
                    </div>
                </div>

            </div>

            {/* ── Right column: photos ── */}
            <div className='about-right'>
                <div className='photo-grid' style={photoHeight ? { height: `${photoHeight}px` } : undefined}>
                    <img className='photo-main' src={Portrait} alt="me!" />
                    <img className='photo-secondary' src={Wagon} alt="beach day :)" />
                    <img className='photo-secondary' src={BTS} alt="@ BTS Arirang Tour in Vegas" />
                </div>
            </div>

        </section>
    </main>
    <SiteFooter />
    </div>
);
}

export default About;