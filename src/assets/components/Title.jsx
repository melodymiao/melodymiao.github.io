import React from 'react';
import './Title.css';
import melody from '../images/home/melody miao.png'

const Title = () => {
  return (
    <>
    <div id="title">
        <img id='melody-miao' src={melody} />
        <h1 class='subtitle orange'>PRODUCT DESIGNER + FRONT-END ENGINEER</h1>
        <h1 class="subtitle black">creating <u>simple</u> and <u>enjoyable</u> user experiences.</h1>
    </div>
    </>
  );
}

export default Title;