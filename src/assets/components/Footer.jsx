import React from 'react';
import './Footer.css';
import linkedin from '../images/home/linkedin.png';
import Resume from '../documents/Melody Miao - Resume.pdf'

const Footer = () => {
  return (
    <>
    <div class='footer'>
      <div class="footer-left">
        <h1 class="logo orange">m!</h1>
        <div class='small-text'>
            <p class='orange'>Design</p>
            <p class='black'>and</p>
            <p class='orange'>&lt; &gt;</p>
            <p class='black'>by me!</p>
        </div>
      </div>
      <div class="footer-right">
        <p class="orange">Let's create something amazing.</p>
        <div class="footer-icons">
          <a href={Resume} target='_blank'><p class="icon resume-text">Resume</p></a>
          <a href="https://www.linkedin.com/in/melody-miao/" target='_blank'><img id='linkedin-logo' class="icon" src={linkedin} /></a>
          <a href="mailto:melodymiao001@gmail.com" target='_blank'><i class="gg-mail icon"></i></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;