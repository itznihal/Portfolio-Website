import React from 'react';
import "./about.scss";
import { FiChevronRight } from 'react-icons/fi';
import { BsAward} from 'react-icons/bs';
import { FaLaptopCode} from 'react-icons/fa';
import { MdWorkOutline} from 'react-icons/md';
import { BsCodeSlash} from 'react-icons/bs';






const About = () => {
  return (
<>

<div className='abtcls'>
<section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <span>About Me</span>
          <h2>About Me</h2>
          <p>A tech enthusiast with a passion for learning and building things.</p>
        </div>

        <div className="row mt-5">
          
        <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
{/* Working */}


<div className="col-lg-8 d-flex flex-column align-items-stretch justify-content-center card">
            <div className="content ps-lg-4 d-flex flex-column justify-content-center">

            <div className="row titlerow">
            <div class="section-title-second">
        <p>Nihal Parmar</p>
        <h2>Information Technology Student</h2>
      </div>
              </div>

              <div className="row abtparagraph">
               <p>
               
               <FiChevronRight className="icncls"/> I am a pre-final year B.Tech student from Dharmsinh Desai University, Gujarat.  I love exploring and learning new technologies and frameworks to solve real-life problems. I have tried my hands on  React, Angular , Express JS , Node JS , Next JS, Blockchain , App development with React Native. I am always ready to have new experiences, meet new people and learn new things. I love playing musical instruments as well as sketching and painting.I like pushing myself and taking up new challenges.
               </p>
              </div>


            </div>


          </div>




          
        </div>


        <div className="row  rewardcls">

        <div class="col-md-6 mt-5 mb-5 d-md-flex align-items-md-stretch card">
                  <div class="count-box card-body">
                  <FaLaptopCode class="bi bi-code-slash abtglogo" />
                    {/* <i class="bi bi-code-slash" style="color: rgb(0, 204, 0);"></i> */}
                    <span > <strong>8+ </strong></span>
                    <p><strong>Projects:</strong> Personal and group projects I have worked on. </p>
                    
                  </div>
                </div>

                <div class="col-md-6 mt-5  mb-5 d-md-flex align-items-md-stretch card">
                  <div class="count-box card-body">
                  <BsAward class="bi bi-code-slash abtglogo"/>
                    {/* <i class="bi bi-briefcase-fill" style="color: #8a1ac2;"></i> */}
                    <span ><strong>12+ </strong></span>
                    <p><strong>Awards & Certificates: </strong>Certificate or Award achived in projects, competetion,
                      Quizes and Events</p>

                    
                  </div>
                </div>

                <div class="col-md-6 mt-5 mb-5 d-md-flex align-items-md-stretch card">
                  <div class="count-box card-body">
                  <MdWorkOutline class="bi bi-code-slash abtglogo" />
                    {/* <i class="bi bi-clock" style="color: #2cbdee;"></i> */}
                    <span > <strong>2 </strong></span>
                    <p><strong>Trainee/Internships: </strong>Good hands on experince in Web technologies.</p>
                  </div>
                </div>

                <div class="col-md-6 mt-5 mb-5 d-md-flex align-items-md-stretch card">
                  <div class="count-box card-body">
                  <BsCodeSlash class="bi bi-code-slash abtglogo" />
                    {/* <i class="bi bi-award" style="color: #ffb459;"></i> */}
                    <span ><strong>1544 </strong></span>
                    <p><strong>@CodeChef </strong> Secure Decent Rating</p>
                  </div>
                </div>
          
        </div>





      </div>
    </section>
</div>
</>  )
}

export default About