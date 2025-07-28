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
    <div className='project-div'>
      <div className='tags'>
        <div className='blue tag'>Product Design</div>
        <div className='green tag'>Mobile App</div>
      </div>
      <Link className='project-link' to="/checkt" onClick={handleLinkClick}>
        <div className='project-div-text'>
          <div className='project-name-arrow'>
            <h2 className='name'>Checkt</h2>
            <span className="arrow">→</span>
          </div>
          <p className='project-description'>Habit tracking with accountability</p>
        </div>
        <img className='project-img' id='innod' src={checkt} />
      </Link>
    </div>

    <div className='project-div'>
      <div className='tags'>
        <div className='blue tag'>Product Design</div>
        <div className='orange tag'>Web App</div>
      </div>
      <Link className='project-link' to="/augene" onClick={handleLinkClick}>
        <div className='project-div-text'>
          <div className='project-name-arrow'>
            <h2 className='name'>Augene Beauty</h2>
            <span className="arrow">→</span>
          </div>
          <p className='project-description'>Simplifying skincare for clinics and their patients</p>
        </div>
        <img className='project-img' id='augene' src={augene} />
      </Link>
    </div>

    <div className='project-div'>
      <div className='tags'>
        <div className='orange tag'>Web Design</div>
        <div className='pink tag'>Web Development</div>
      </div>
      <Link className='project-link' to="/innod" onClick={handleLinkClick}>
        <div className='project-div-text'>
          <div className='project-name-arrow'>
            <h2 className='name'>Innovative Design</h2>
            <span className="arrow">→</span>
          </div>
          <p className='project-description'>Fun and engaging webpages for club events</p>
        </div>
        <img className='project-img' id='innod' src={innod} />
      </Link>
    </div>
    </>
  );
}

export default PortfolioGrid;