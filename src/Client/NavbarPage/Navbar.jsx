import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./navbar.scss";


const Navbar = () => {
  return (
    <>

   

    <div className='navcls container-fluid'>
        <header id="header" className="fixed-top  d-flex justify-content-center align-items-center  header-transparent ">

        <nav className="navbar navbar-expand-lg my-auto mx-auto ">

  <div className="container-fluid">
    
    <button className="navbar-toggler mx-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


   


      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item"><a className="nav-link scrollto active" href="#hero">Home</a></li>
    <li className="nav-item"><a className="nav-link scrollto" href="#about">About</a></li>
    <li className="nav-item"><a className="nav-link scrollto" href="#services">Projects</a></li>
    <li className="nav-item"><a className="nav-link scrollto" href="#services">Certificates</a></li>
    <li className="nav-item"><a className="nav-link scrollto" href="#services">Articles</a></li>
   <li className="nav-item"><a className="nav-link scrollto" href="#resume">Resume</a></li>
    <li className="nav-item"><a className="nav-link scrollto " href="#portfolio">Co-curricular</a></li>
    <li className="nav-item"><a className="resumeFont scrollto" href="#contact">Contact</a></li>
      </ul>
     
    </div>
  </div>
</nav>
</header>
</div>
    </>
  )
}

export default Navbar