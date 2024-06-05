import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioGrid.css';
import dolci from '../images/portfolio-grid/Dolci Mango.png'
import meskies from "../images/portfolio-grid/Meskie's.png"
import checkt from '../images/portfolio-grid/Checkt.png'
import moodtunes from '../images/portfolio-grid/Moodtunes.png'
import recwell from '../images/portfolio-grid/RecWell.png'
import kpg from '../images/portfolio-grid/KPG.png'

const PortfolioGrid = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div class='grid-container'>
      <Link to="/dolci-mango" onClick={handleLinkClick}><img id='dolci-mango' src={dolci} /></Link>
      <Link to="/checkt" onClick={handleLinkClick}><img id='checkt' src={checkt} /></Link>
      <Link to="/meskies-ethiopia-restaurant" onClick={handleLinkClick}><img id='meskies' src={meskies} /></Link>
      <Link to="/moodtunes" onClick={handleLinkClick}><img id='moodtunes' src={moodtunes} /></Link>
      <Link to="/recwell" onClick={handleLinkClick}><img id='recwell' src={recwell} /></Link>
      <Link to="/kpg" onClick={handleLinkClick}><img id='kpg' src={kpg} /></Link>
    </div>
    </>
  );
}

export default PortfolioGrid;