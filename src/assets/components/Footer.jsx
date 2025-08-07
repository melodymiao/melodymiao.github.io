import React from 'react';
import './Footer.css';
import Resume from '../documents/Melody Miao - Product Designer.pdf'
const Footer = () => {
  return (
    <>
    <footer class='footer'>
      <div className='footer-wrap'>
        <div class="footer-left">
            <p className='copyright'>&#169; 2025 · Designed & coded with the help of my cat</p>
        </div>

        <div class="footer-links">
          <a href="mailto:melodymiao001@gmail.com" target='_blank' className="footer-link"><p>Email</p></a>
          <a href="https://www.linkedin.com/in/melody-miao/" className="footer-link"><p>LinkedIn</p></a>
        </div>
      </div>
      
    </footer>
    </>
  );
}

export default Footer;