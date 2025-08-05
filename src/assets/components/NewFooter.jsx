import React from 'react';
import './NewFooter.css';
import Resume from '../documents/Melody Miao - Product Designer.pdf'
const NewFooter = () => {
  return (
    <>
    <footer class='footer'>
      <div className='footer-wrap'>
        <div class="footer-left">
            <p className='copyright'>&#169; 2025 · Design & code by Melody Miao</p>
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

export default NewFooter;