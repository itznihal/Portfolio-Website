import React from 'react'
import "./resumepage.scss";
import usereducer from "../Images/Articles/useReducer.jpeg";
import resumeimage from "../Images/Portfolio-Collection/Profile Pic/resumeimg.png";

import { CgMail} from 'react-icons/cg';
import { AiOutlineGithub} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { SiLeetcode} from 'react-icons/si';
import { AiFillMediumSquare} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';




// Swiper Imports
import { Swiper , SwiperSlide} from "swiper/react";
import SwiperCore , {Navigation, Pagination, Scrollbar, A11y , Autoplay , Thumbs} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';
import 'swiper/css/a11y';

// Swiper Tesing
SwiperCore.use([Navigation , Pagination , Thumbs , Autoplay]);






const Resume = () => {
  return (

    <>


{/* Resume section start */}


<div  id="resume" className='projectpge'>


<div className="container-fluid nav_bg prjtcls">
      <div className='row'>
        <div className='col-10 mx-auto'>

{/* Section Title */}
<section id="prjtcls" className="prjtcls mb-5">
    <div className="container">

      <div className="section-title">
        <span>Resume</span>
        <h2>Resume</h2>
        <p>Want to know more about me? </p>
      </div>
      </div>
      </section>
{/* Section Title Ends */}



{/* Resume Card Section */}
<div className="product_image_area margintopcls" data-aos="fade-up" data-aos-delay="100" >
<div className="container">
    <div className="row s_product_inner">
      <div className="col-lg-6">



        <div className="s_Product_carousel" data-aos="fade-up-right" data-aos-delay="100">
        
<div className='coursel-manage'>
                      <Swiper tag="section" wrapperTag="ul"
                      modules={[Navigation, Pagination , A11y , Autoplay]}
                     id="main"
                     slidesPerView={1}
                     navigation
                     pagination={{ clickable: true }}
                     autoplay
                     spaceBetween = {0}
                      
                     >
    <SwiperSlide>     <img className='img-fluid' src={resumeimage}  alt="auction img" /></SwiperSlide>
    
                     </Swiper>

</div>

                     

        </div>


      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100">
          <h3>Personal details and application.</h3>
        

          <p>
          
          <a href="mailto:itznihal143@gmail.com" className="githubicn"><CgMail className="githubicn"/></a>
           <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
          <a href="https://www.linkedin.com/in/nihal-parmar-2924411b7/" className="githubicn"><AiFillLinkedin className="githubicn"/></a>
          <a href="https://itznihal.medium.com/" className="githubicn"><AiFillMediumSquare className="githubicn"/></a>
          <a href="https://leetcode.com/nihalparmar/" className="githubicn"><SiLeetcode className="githubicn"/></a>
          
          <a href="https://www.instagram.com/itz_____nihal/" className="githubicn"><AiFillInstagram className="githubicn"/></a>
          
                      </p>
                      <h1 className='toolscls'>About Me:</h1>
                     
                      
          <h2>Myself , Nihal Parmar , sophomore at Dharmsinh Desai University , pursuing B. Tech in Information Technology .I have a passion for software development with a diverse skillset ranging from the MEARN stack to a stronghold on data structures and algorithms to solve real life problems. I love to code ideas into reality. Always passionate for new things to explore upon, looking for new opportunities to grow.</h2>
        
        
        {/* Roles Section */}
          <h1 className='toolscls'>Open For Roles:</h1>  
                      <ul className="tags">
<li><a href="#" className="tag">SDE Intern</a></li>
<li><a href="#" className="tag">Frontend Developer</a></li>
<li><a href="#" className="tag">Backend Developer</a></li>
<li><a href="#" className="tag">Full stack developer</a></li>
</ul>


<div className='artclebtn'>
<a href="https://drive.google.com/file/d/1NI5IKbM4AE8hJC1kiBDjWi5-bZYp2Zr9/view?usp=sharing" className="cta">
  <span>RESUME</span>
  
</a>
</div>
          



        </div>
      </div>
    </div>
  </div>
  </div>

  {/* Resume Card SectionEnds */}


    




        </div></div></div></div>







    </>
  )
}

export default Resume