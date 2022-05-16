import React from 'react';
import "./homepage.scss";
import { FaChevronDown } from 'react-icons/fa';

import 'font-awesome/css/font-awesome.min.css';



const Home = () => {
  return (
<>
<div className='homepge'>


<section id="hero">
    <div className="hero-container">
      <h1>
        <span>Nihal Parmar</span>
      </h1>



      {/* Transition Text */}
{/* <div className='wrapper'>
<div className='static-txt'>I'm a</div>
<ul className='dynamic-txts'>
<li><span>Youtuber</span></li>
<li><span>Crickter</span></li>
<li><span>Web Developer</span></li>
  <li><span>Designer</span></li>
</ul>


</div>
       */}
      {/* Transitions Text Emds */}
      <h2 data-aos="fade-up" data-aos-delay="100">I'm a Software Developer</h2>

      <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
      <FaChevronDown className='homeicncls'/>
      </a>
    </div>
  </section>



    </div>
</>  )
}

export default Home