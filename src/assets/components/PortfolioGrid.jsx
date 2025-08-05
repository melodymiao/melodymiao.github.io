import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioGrid.css';
import checkt from '../images/portfolio-grid/checkt thumbnail.png'
import augene from '../images/portfolio-grid/augene thumbnail.png'
import innod from '../images/portfolio-grid/innod thumbnail.png'

const PortfolioGrid = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div className='project-div fade-in delay-1'>
      <Link className='project-link' to="/checkt" onClick={handleLinkClick}>
        <img className='project-img' id='innod' src={checkt} />
        <div>
          <div className='project-div-text'>
            <div className='project-name-arrow'>
              <h2 className='name'>Checkt</h2>
              <span className="left-arrow">→</span>
            </div>
            <p className='project-description'>Habit tracking with accountability</p>
          </div>
          <p>UX Design, Mobile App</p>
        </div>
      </Link>
    </div>

    <div className='project-div fade-in delay-1'>
      <Link className='project-link' to="/augene" onClick={handleLinkClick}>
        <img className='project-img' id='innod' src={augene} />
        <div>
          <div className='project-div-text'>
            <div className='project-name-arrow'>
              <h2 className='name'>Augene Beauty</h2>
              <span className="left-arrow">→</span>
            </div>
            <p className='project-description'>Simplifying skincare for clinics and their patients</p>
          </div>
          <p>UX Design, Web App</p>
        </div>
      </Link>
    </div>

    <div className='project-div fade-in delay-1'>
      <Link className='project-link' to="/innod" onClick={handleLinkClick}>
        <img className='project-img' id='innod' src={innod} />
        <div>
          <div className='project-div-text'>
            <div className='project-name-arrow'>
              <h2 className='name'>Innovative Design</h2>
              <span className="left-arrow">→</span>
            </div>
            <p className='project-description'>Fun and engaging webpages for club events</p>
          </div>
          <p>Web Design, Web Development</p>
        </div>
      </Link>
    </div>
    </>
  );
}

export default PortfolioGrid;