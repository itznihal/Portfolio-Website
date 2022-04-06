import React from 'react';
import "./articlesfile.scss";
import Img1 from "../Images/hero-img.png";
// PROJECT - BESTBID 
import bb1 from "../Images/Portfolio-Collection/Projects/Best-Bid/Screenshot (967).png";
import bb2 from "../Images/Portfolio-Collection/Projects/Best-Bid/Screenshot (969).png";
import bb3 from "../Images/Portfolio-Collection/Projects/Best-Bid/demo44.png";
import bb4 from "../Images/Portfolio-Collection/Projects/Best-Bid/demo1.png";
import bb5 from "../Images/Portfolio-Collection/Projects/Best-Bid/payment.png";

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


<div  id="projectss" className='projectpge'>


<div className="container-fluid nav_bg prjtcls">
      <div className='row'>
        <div className='col-10 mx-auto'>


<section id="prjtcls" className="prjtcls">
    <div className="container">

      <div className="section-title">
        <span>Projects</span>
        <h2>Projects</h2>
        <p>Here is a glimpse of some of my top projects:</p>
      </div>
      </div>
      </section>



      {/* Project Section */}
      <section id='header1' className='d-flex align-items-center'>


<div className="container-fluid nav_bg">
<div className='row firstele'>
  <div className='col-10 mx-auto'>
    <div className='row srvccls'>
    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' data-aos="fade-right" data-aos-delay="100">
    <h1> Projects</h1>
      <h2 className="my-3">
      I have great interest in learning and working on Javascript frameworks and building efficient and modular projects.Here is a glimpse of some of my top projects, also checkout other interesting projects in my github repository.
      </h2>
      
      

    </div>

    <div className='col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc' data-aos="fade-left" data-aos-delay="200">


    
        <img src={Img1} className='img-fluid animated imgabt' alt="auction img" />

    </div>
    </div>

  </div>
</div>
</div>


</section>



{/* Project Description Section Added  */}
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
    <SwiperSlide>     <img className='img-fluid' src={bb1}  alt="auction img" /></SwiperSlide>
    <SwiperSlide> <img className='img-fluid' src={bb2}  alt="auction img" /></SwiperSlide>
    <SwiperSlide> <img className='img-fluid' src={bb3}  alt="auction img" /></SwiperSlide>
    <SwiperSlide> <img className='img-fluid' src={bb4}  alt="auction img" /></SwiperSlide>
    <SwiperSlide> <img className='img-fluid' src={bb5}  alt="auction img" /></SwiperSlide>
                     </Swiper>

</div>

                     

        </div>


      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100">
          <h3>Best-Bid</h3>
        
          {/* <p>
          <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
          
                      </p>

                      <h1 className='toolscls'>Tools</h1> */}
                      
          <h2>An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.</h2>

                      <ul class="tags">
<li><a href="#" class="tag">React</a></li>
<li><a href="#" class="tag">Redux</a></li>
<li><a href="#" class="tag">Node JS</a></li>
<li><a href="#" class="tag">Express JS</a></li>
<li><a href="#" class="tag">Mongo DB</a></li>
<li><a href="#" class="tag">Stripe</a></li>
<li><a href="#" class="tag">Cloudinary</a></li>

</ul>

<div className='artclebtn'>
<a href="#" class="cta">
  <span>Read More</span>
  
</a>
</div>
                    





                   

                       





        </div>
      </div>
    </div>
  </div>
  </div>





{/* Second Project */}

<div className="product_image_area " >
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
   
    <SwiperSlide>     <img className='img-fluid' src={portfolioimg2}  alt="auction img" /></SwiperSlide>
    
                     </Swiper>

</div>

                     

        </div>


      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
          <h3>Portfolio</h3>
        
          <p>
          <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
          
                      </p>

                      <h1 className='toolscls'>Tools</h1>
                      

                      <ul class="tags">
<li><a href="#" class="tag">React JS</a></li>
<li><a href="#" class="tag">Scss</a></li>
<li><a href="#" class="tag">Swiper</a></li>
<li><a href="#" class="tag">Aos</a></li>


</ul>
          <h2>A portfolio website made with React for presenting my work, as well as  skills and experiences in an organized and decorated way.</h2>

        </div>
      </div>
    </div>
  </div>
  </div>


















        </div>
        </div>
        </div>


</div>






</>  )
}

export default Articles