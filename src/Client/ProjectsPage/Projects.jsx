import React from 'react';
import "./projectpage.scss";
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


// PROJECT - COVID
import map from "../Images/Portfolio-Collection/Projects/Corona Virus Case Detector/1.png";
import covidhomepage from "../Images/Portfolio-Collection/Projects/Covid Project/covid-Homepage.png";
import main2 from "../Images/Portfolio-Collection/Projects/Covid Project/2.png";
import main3 from "../Images/Portfolio-Collection/Projects/Covid Project/3.png";
import main4 from "../Images/Portfolio-Collection/Projects/Covid Project/4.png";
import main5 from "../Images/Portfolio-Collection/Projects/Covid Project/5.png";

// PROJECT FITBIT
import fitbit1 from "../Images/FitBit/1.png";
import fitbit2 from "../Images/FitBit/createexercise.png";
import fitbit3 from "../Images/FitBit/logged exercises.png";
import fitbit4 from "../Images/FitBit/features.png";
import fitbit5 from "../Images/FitBit/recommendedexercises.png";
import fitbit6 from "../Images/FitBit/ourvalues.png";





// PROJECT - E COMMERCE UI
import Ecommerce1 from "../Images/Portfolio-Collection/Projects/Ecommerce UI/1.png";
import Ecommerce2 from "../Images/Portfolio-Collection/Projects/Ecommerce UI/2.png";
import Ecommerce3 from "../Images/Portfolio-Collection/Projects/Ecommerce UI/3.png";


// PROJECT - STARTUP
import ssu1 from "../Images/Portfolio-Collection/Projects/Startup Project Template/1.png";
import ssu2 from "../Images/Portfolio-Collection/Projects/Startup Project Template/3.png";


// PROJECT - GYM
import Gym1 from "../Images/Portfolio-Collection/Projects/Gymwebsite/1.png";
import Gym2 from "../Images/Portfolio-Collection/Projects/Gymwebsite/2.png";
import Gym3 from "../Images/Portfolio-Collection/Projects/Gymwebsite/3.png";
import Gym4 from "../Images/Portfolio-Collection/Projects/Gymwebsite/4.png";
import Gym5 from "../Images/Portfolio-Collection/Projects/Gymwebsite/5.png";
import Gym6 from "../Images/Portfolio-Collection/Projects/Gymwebsite/6.png";


// PROJECT - EXERCISE TRACKER
import ExerciseTracker from "../Images/Portfolio-Collection/Projects/Exercise Tracker/1.png";
import ExerciseTracker2 from "../Images/Portfolio-Collection/Projects/Exercise Tracker/2.png";
import ExerciseTracker3 from "../Images/Portfolio-Collection/Projects/Exercise Tracker/3.png";
import ExerciseTracker4 from "../Images/Portfolio-Collection/Projects/Exercise Tracker/4.png";


// PROJECT - TODO
import TODO from "../Images/Portfolio-Collection/Projects/TO DO APP/1.png";



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



const Projects = () => {
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
        I love to code ideas into reality , also I have great interest in learning and working on Javascript frameworks and building efficient and modular projects.Here is a glimpse of some of my top projects, also checkout other interesting projects in my github repository.
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
					
						<p>
            <a href="https://github.com/itznihal/ONLINE-AUCTION" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">React</a></li>
  <li><a href="#" class="tag">Redux</a></li>
  <li><a href="#" class="tag">Node JS</a></li>
  <li><a href="#" class="tag">Express JS</a></li>
  <li><a href="#" class="tag">Mongo DB</a></li>
  <li><a href="#" class="tag">Stripe</a></li>
  <li><a href="#" class="tag">Cloudinary</a></li>
  
</ul>

                      



						<h2>BestBid is a fully functional Online Auction Platform. It allows users to register or log in as a seller or bidder. Seller can add his product for auction with starting price, End date ,time. Also, the seller can update, delete his product while the auction is running. Bidders can find auctions(search and filters) and can make a bid on running auctions with given constraints. After Action ended Bid history is provided and the winner will be announced, the winner can make payment, as well as winner and seller contacts are provided to each other.BestBid also inlcuding features like Featured auction,  Edit Profile, Change Password, and logout.</h2>


                     

                         
 




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
      <SwiperSlide>     <img className='img-fluid' src={portfolioimg}  alt="auction img" /></SwiperSlide>
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



{/* THIRD SECTION  */}



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
      <SwiperSlide>     <img className='img-fluid' src={covidhomepage}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={main2}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={main3}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={map}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={main4}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={main5}  alt="auction img" /></SwiperSlide>


      
                       </Swiper>

</div>

                       

					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
						<h3>Covid Guide</h3>
					
						<p>
            <a href="https://github.com/itznihal/CoviGuide" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">Angular</a></li>
  <li><a href="#" class="tag">Bootstrap</a></li>
  <li><a href="#" class="tag">Sass</a></li>
  <li><a href="#" class="tag">Java Script</a></li>
  
  
</ul>
						<h2>Covi guide is a web-app tracks the ongoing COVID-19 pandemic in all Countries.
It maintains a daily-updates(counts of the number of
cases, tests, hospitalizations, and deaths).
User can Search by county for pendemic information of country</h2>

					</div>
				</div>
			</div>
		</div>
    </div>






{/* FitBit Section  */}



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
      <SwiperSlide>     <img className='img-fluid' src={fitbit1}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={fitbit2}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={fitbit3}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={fitbit4}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={fitbit5}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={fitbit6}  alt="auction img" /></SwiperSlide>


      
                       </Swiper>

</div>

                       

					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
						<h3>FitBit - Workout Assistant</h3>
					
						<p>
            <a href="https://github.com/itznihal/FitBit-Fitness-Assistant" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">React</a></li>
  <li><a href="#" class="tag">Bootstrap</a></li>
  <li><a href="#" class="tag">Sass</a></li>
  <li><a href="#" class="tag">Node JS</a></li>

  <li><a href="#" class="tag">Express JS</a></li>
  <li><a href="#" class="tag">Mongo DB</a></li>
  <li><a href="#" class="tag">AOS</a></li>

  <li><a href="#" class="tag">Java Script</a></li>
  
  
</ul>
						<h2>FitBit is a webapp allows Users to register and creates schedules on specific date time.
User can View workout schedules , update and delete.
Also FitBit recommends schedules to users according to physique.</h2>

					</div>
				</div>
			</div>
		</div>
    </div>








{/* Ecommerce Section */}


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
      <SwiperSlide>     <img className='img-fluid' src={Ecommerce1}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={Ecommerce2}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={Ecommerce3}  alt="auction img" /></SwiperSlide>
 


      
                       </Swiper>

</div>

                       

					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
						<h3>E-Commerce UI</h3>
					
						<p>
            <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">React</a></li>
  <li><a href="#" class="tag">Scss</a></li>
  <li><a href="#" class="tag">Figma</a></li>
  <li><a href="#" class="tag">Aos</a></li>
  <li><a href="#" class="tag">Swiper</a></li>
  
  
</ul>
						<h2>An E-Commerce webapp design and basic functionalities designed using React.Aim to create interfaces which users find easy to use and pleasurable.</h2>

					</div>
				</div>
			</div>
		</div>
    </div>





{/* Start Up Section */}


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
      <SwiperSlide>     <img className='img-fluid' src={ssu1}  alt="auction img" /></SwiperSlide>
      <SwiperSlide>     <img className='img-fluid' src={ssu2}  alt="auction img" /></SwiperSlide>
 


      
                       </Swiper>

</div>

                       

					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
						<h3>Blog Website - Venue Perl</h3>
					
						<p>
            <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">Html</a></li>
  <li><a href="#" class="tag">Css</a></li>
  <li><a href="#" class="tag">JavaScript</a></li>
  <li><a href="#" class="tag">Bootstrap</a></li>
  <li><a href="#" class="tag">Aos</a></li>
  
  
</ul>
						<h2>Venue Perl - A blog website to share their creativity and ideas to a wider audience. This task is given to me during my internship at Girl-Script</h2>

					</div>
				</div>
			</div>
		</div>
    </div>


    
   
{/* PROJECT - EXERCISE TRACKER */}


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
      <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker}  alt="auction img" /></SwiperSlide>
      {/* <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker2}  alt="auction img" /></SwiperSlide>
      <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker3}  alt="auction img" /></SwiperSlide>
      <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker4}  alt="auction img" /></SwiperSlide> */}
 


      
                       </Swiper>

</div>

                       

					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
						<h3>Exercise Tracker</h3>
					
						<p>
            <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">React</a></li>
  <li><a href="#" class="tag">Scss</a></li>
  <li><a href="#" class="tag">Node JS</a></li>
  <li><a href="#" class="tag">Express JS</a></li>
  <li><a href="#" class="tag">Mongo DB</a></li>
  <li><a href="#" class="tag">Mongoose</a></li>
  
  
</ul>
						<h2>Exercise Tracker Webapp for monitoring and tracking Exercise for users .</h2>

					</div>
				</div>
			</div>
		</div>
    </div>



{/* PROJECT - TODO */}


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
      <SwiperSlide >     <img className='img-fluid' src={TODO}  alt="auction img" /></SwiperSlide>
      {/* <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker2}  alt="auction img" /></SwiperSlide>
      <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker3}  alt="auction img" /></SwiperSlide>
      <SwiperSlide >     <img className='img-fluid' src={ExerciseTracker4}  alt="auction img" /></SwiperSlide> */}
 


      
                       </Swiper>

</div>

                       

					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text" data-aos="fade-up-left" data-aos-delay="100 ">
						<h3>To Do App</h3>
					
						<p>
            <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
            
                        </p>

                        <h1 className='toolscls'>Tools</h1>
                        

                        <ul class="tags">
  <li><a href="#" class="tag">React</a></li>
  <li><a href="#" class="tag">React Hooks</a></li>
  <li><a href="#" class="tag">Bootstrap</a></li>
  <li><a href="#" class="tag">Aos</a></li>
  
  
</ul>
						<h2>A to-do Website lets you write, organize, and reprioritize your tasks more efficiently</h2>

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

export default Projects