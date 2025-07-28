import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Resume from '../documents/Melody Miao - Product Designer.pdf'
const Footer = () => {
  return (
    <>
    <footer class='footer'>
      <div className='footer-wrap'>
        <div class="footer-left">
          <p className='footer-text copyright dark-text'>&#169; 2025 Melody Miao</p>
          <p className='footer-text dark-text'>Designed and coded with a cat sitting on my lap.</p>
        </div>
        <div class="footer-icons">
          <a href={Resume} target='_blank' className='resume-link'><p className="icon resume-text">Resume</p></a>
          <a href="https://www.linkedin.com/in/melody-miao/" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} id='linkedin-logo' size="2x" />
          </a>
          <a href="mailto:melodymiao001@gmail.com" target='_blank'>
            <i class="gg-mail icon"></i>
          </a>
        </div>
      </div>
      
    </footer>
    </>
  );
}

export default Footer;