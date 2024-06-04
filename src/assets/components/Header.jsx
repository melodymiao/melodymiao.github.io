import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Resume from '../documents/Melody Miao - Resume.pdf'

const Header = () => {
  return (
    <>
    <div class="wrapper">
      <div id="header">
        <a href="/" class="flex-item"><h1>m!</h1></a>
        <ul class="navbar flex-item">
          <li class="nav-item">
            <Link to="/" class="nav-link">work</Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link">about me!</Link>
          </li>
          <li class="nav-item">
          <a href={Resume} target='_blank'class="nav-button">resume</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Header;
