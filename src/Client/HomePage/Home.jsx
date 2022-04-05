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
      <h2 data-aos="fade-up" data-aos-delay="100">I'm a Passoniate Developer in India</h2>
      <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
      <FaChevronDown className='homeicncls'/>
      </a>
    </div>
  </section>



    </div>
</>  )
}

export default Home