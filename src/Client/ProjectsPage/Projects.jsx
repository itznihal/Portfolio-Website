import React from 'react';
import "./projectpage.scss";
import Img1 from "../Images/hero-img.png";

const Projects = () => {
  return (
<>
<div className='projectpge'>


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









          </div>
          </div>
          </div>


</div>



</>  )
}

export default Projects