import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Switch, Route, Redirect } from "react-router-dom";
 import Home from "./Client/HomePage/Home";
 import About from "./Client/AboutPage/About";
 import Articles from "./Client/ArticlesPage/Articles";
 import Certifications from "./Client/CertificationsPage/Certifications";
 import Cocarricular from "./Client/CocarricularPage/Cocarricular";
 import Contact from "./Client/ContactPage/Contact";
import Navbar from "./Client/NavbarPage/Navbar";
 import Projects from "./Client/ProjectsPage/Projects";
 import Sidebar from './Client/SideBarPage/Sidebar';
 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// NODE MODULE PATH
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// ANIMATED SCROLL LIBERARY
AOS.init();


function App() {
  return (
    <>
    {/* <h1>App.js</h1> */}
    <Navbar/>
    <Sidebar/>
    <Home/>
    <About/>
    <Projects/>
    {/* <About/>
    <Articles/>
    <Certifications/>
    <Cocarricular/>
    <Projects/>
    <Contact/> */}


    
 </>
  );
}

export default App;
