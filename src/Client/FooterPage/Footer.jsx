import React from 'react';
import "./footerfile.scss";

// icons
import { CgMail} from 'react-icons/cg';
import { AiOutlineGithub} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { SiLeetcode} from 'react-icons/si';
import { AiFillMediumSquare} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';
import { AiOutlineShareAlt} from 'react-icons/ai';
import { BiPhoneCall} from 'react-icons/bi';




const Footer = () => {
  return (


    <>



<div  id="footer" className='footer footercls'>


<div className="container-fluid nav_bg ">
      <div className='row'>


      <footer id="footer" background>
    <div className="container">
      <h3>Copyright © 2022 | Nihal Parmar</h3>
      {/* <p>Built with React</p> */}
      <div className="social-links">

           <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
          <a href="https://www.linkedin.com/in/nihal-parmar-2924411b7/" className="githubicn"><AiFillLinkedin className="githubicn"/></a>
          <a href="https://itznihal.medium.com/" className="githubicn"><AiFillMediumSquare className="githubicn"/></a>
          <a href="https://leetcode.com/nihalparmar/" className="githubicn"><SiLeetcode className="githubicn"/></a>
          
          <a href="https://www.instagram.com/itz_____nihal/" className="githubicn"><AiFillInstagram className="githubicn"/></a>                  
                  </div>




                

      
    </div>
  </footer>




</div></div></div>


   


    </>
  )
}

export default Footer