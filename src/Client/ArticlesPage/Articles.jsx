import React, { useReducer } from 'react';
import "./articlesfile.scss";
import Img1 from "../Images/hero-img.png";
// PROJECT - BESTBID 
import bb1 from "../Images/Portfolio-Collection/Projects/Best-Bid/Screenshot (967).png";
import bb2 from "../Images/Portfolio-Collection/Projects/Best-Bid/Screenshot (969).png";
import bb3 from "../Images/Portfolio-Collection/Projects/Best-Bid/demo44.png";
import bb4 from "../Images/Portfolio-Collection/Projects/Best-Bid/demo1.png";
import bb5 from "../Images/Portfolio-Collection/Projects/Best-Bid/payment.png";
import article from "../Images/Articles/articles.png";
import github from "../Images/Articles/github.jpeg";
import mearn from "../Images/Articles/mearn.png";
import usereducer from "../Images/Articles/useReducer.jpeg";
import myvideo from "../Images/Articles/video.mp4";




// PROJECT - PORTFOLIO 
import portfolioimg from "../Images/Portfolio-Collection/Projects/Portfolio/portfolio 2.png";
import portfolioimg2 from "../Images/Portfolio-Collection/Projects/Portfolio/Screenshot (288).png";


import { AiOutlineGithub} from 'react-icons/ai';



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



const Articles = () => {
  return (
<>


<div  id="articles" className='projectpge'>


<div className="container-fluid nav_bg prjtcls">
      <div className='row'>
        <div className='col-10 mx-auto'>


<section id="prjtcls" className="prjtcls">
    <div className="container">

      <div className="section-title">
        <span>Articles</span>
        <h2>Articles</h2>
        <p>My recently published Articles</p>
      </div>
      </div>
      </section>



      {/* Project Section */}
      <section id='header1' className='d-flex align-items-center'>









<div className="container-fluid nav_bg">
<div className='row firstele'>
  <div className='col-10 mx-auto'>
    <div className='row srvccls'>
    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column articlebgimage' data-aos="fade-right" data-aos-delay="100">
    <h1> Articles</h1>
      <h2 className="my-3">
      I like to explore new technologies and build innovative things , along with I'm also love to transforming my learning and researches into easy and understaning way as a blog to help other peoples to learn and also improves my understaning and proficiency in Tech.
      </h2>
     
      

    </div>

    <div className='col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc' data-aos="fade-left" data-aos-delay="200">

   
        <img src={article} className='img-fluid animated imgabt' alt="auction img" />

    </div>
    </div>

  </div>
</div>
</div>


</section>



{/* First Article Section Added  */}
<div className="product_image_area " data-aos="fade-up" data-aos-delay="100" >
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
    <SwiperSlide>     <img className='img-fluid' src={usereducer}  alt="auction img" /></SwiperSlide>
    
                     </Swiper>

</div>

                     

        </div>


      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100">
          <h3>An Easy Way to Understanding React useReducer Hook</h3>
        
          {/* <p>
          <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
          
                      </p>

                      <h1 className='toolscls'>Tools</h1> */}
                      
          <h2>This  Article is regarding to React Hooks. Here I  explaind a very important and useful topic: React Hooks. This will be a brief explanation about useReducer Hook.</h2>

                      <ul className="tags">
<li><a href="#" className="tag">React</a></li>
<li><a href="#" className="tag">Redux</a></li>
<li><a href="#" className="tag">useReducer</a></li>
<li><a href="#" className="tag">MERN</a></li>


</ul>

<div className='artclebtn'>
<a href="https://itznihal.medium.com/an-easy-way-to-understanding-react-usereducer-hook-5f34f990c247" className="cta">
  <span>Read More</span>
  
</a>
</div>
          



        </div>
      </div>
    </div>
  </div>
  </div>



{/* Second Article */}





<div className="product_image_area " data-aos="fade-up" data-aos-delay="100" >
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
    <SwiperSlide>     <img className='img-fluid' src={github}  alt="auction img" /></SwiperSlide>
    
                     </Swiper>

</div>

                     

        </div>


      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100">
          <h3>Beautify Your GitHub Profile like a Pro</h3>
        
        
                      
          <h2>If you have ever used GitHub, you must have come across some impressive-looking profiles and thought “Damn! I want my profile to look like that.” Well, this article will help you with precisely that.</h2>

                      <ul className="tags">
<li><a href="#" className="tag">Github</a></li>
<li><a href="#" className="tag">Profile Readme</a></li>


</ul>

<div className='artclebtn'>
<a href="https://itznihal.medium.com/beautify-your-github-profile-like-a-pro-93f2a3dacaf5" className="cta">
  <span>Read More</span>
  
</a>
</div>
        
        </div>
      </div>
    </div>
  </div>
  </div>

{/* Second Article Ends */}





{/* Third Article */}





<div className="product_image_area " data-aos="fade-up" data-aos-delay="100" >
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
    <SwiperSlide>     <img className='img-fluid' src={mearn}  alt="auction img" /></SwiperSlide>
    
                     </Swiper>

</div>

                     

        </div>


      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100">
          <h3>MEAN vs MERN Stack Development</h3>
        
        
                      
          <h2>This article is brief on the popularity of Angular vs React drives the popularity of MEAN vs MERN stacks, respectively. Angular has been a very popular framework for quite some time now, however, React is overtaking it in recent years.Read more for clear understanding about mean and mern.</h2>

                      <ul className="tags">
<li><a href="#" className="tag">MEAN</a></li>
<li><a href="#" className="tag">MERN</a></li>
<li><a href="#" className="tag">Web Development</a></li>


</ul>

<div className='artclebtn'>
<a href="https://itznihal.medium.com/mean-vs-mern-stack-development-be7ed079ce3a" className="cta">
  <span>Read More</span>
  
</a>
</div>
        
        </div>
      </div>
    </div>
  </div>
  </div>

{/* Third Article Ends */}








{/* READ MORE SECTION  */}



<section id='header1article' className='d-flex align-items-center'>









<div className="container-fluid nav_bg">
<div className='row firstele'>
  <div className='col-10 mx-auto'>
    <div className='row srvccls'>
    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column canvaarticleimg' data-aos="fade-right" data-aos-delay="100">
    <h1> Have a look at all my articles? </h1>
      
    <a href="https://itznihal.medium.com/" >
    <div className='badge'>
    
  <div className='text'>
  Read
  </div>
</div>
</a>



      

    </div>

    <div className='col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc houseeffect d-flex justify-content-center align-items-center' data-aos="fade-left" data-aos-delay="200">

   

{/* Read More Animation Effect */}









        <img src={article} className='img-fluid animated imgabt' alt="auction img" />


{/* Ends */}
    </div>
    </div>

  </div>
</div>
</div>


</section>








{/* READ MORE SECTION ENDS  */}







        </div>
        </div>
        </div>


</div>






</>  )
}

export default Articles