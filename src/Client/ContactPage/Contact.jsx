import React, { useEffect, useState } from 'react';
import "./contactfile.scss";

// icons
import { CgMail} from 'react-icons/cg';
import { AiOutlineGithub} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { SiLeetcode} from 'react-icons/si';
import { AiFillMediumSquare} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';
import { AiOutlineShareAlt} from 'react-icons/ai';
import { BiPhoneCall} from 'react-icons/bi';





const Contact = () => {



  const [user, setUser] = useState({
     name: "", 
     email: "", 
     subject: "", 
     message: "" 
    });

// for storing data in states
let name, value;
const getUserData = (e) => {
  name = e.target.name;
  value =  e.target.value;

  setUser({ ...user, [name]: value });

}



// POST DATA TO BACKEND
const postData = async (e) => {
  e.preventDefault();

  const { name, email, subject, message } = user;

if( name && email && subject && message){

  const res = await fetch('https://nihalparmarportfolio-default-rtdb.firebaseio.com/reactcontactform.json', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, email, subject, message
    })
  });

  const data = await res.json();

  if (!data) {
    console.log(`message not send `);
  } else {
    // Message Send Success
    setUser({
      name: "", 
      email: "", 
      subject: "", 
      message: "" 
     });
    alert("Message Sent");
    setUser({...user , message: "" , subject: ""});
  }

}
else{
  alert("Invalid Credentials")
}





}



  return (
<>


<div  id="contact" className='contactcls'>


<div className="container-fluid nav_bg prjtcls">
      <div className='row'>
        <div className='col-10 mx-auto'>


{/* Heading */}
<section id="prjtcls" className="prjtcls">
    <div className="container">

      <div className="section-title">
        <span>CONTACT ME</span>
        <h2>CONTACT ME</h2>
        <p>Let's Get In Touch</p>
      </div>
      </div>
      </section>

{/* Heading Ends */}


{/* CONTACT ME SECTION */}
<section id="contact" className="contact contactfrmcontainercls">
      <div className="container">

       

        <div className="row">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  {/* <i className="bx bx-share-alt"></i> */}
                  <div className="maincontactcls">
                  <a href="#contact" className="githubicn"><AiOutlineShareAlt className="githubicn"/></a>
                                    <h3>Social Profiles</h3>
                                    </div>
                  <div className="social-links">

           <a href="https://github.com/itznihal" className="githubicn"><AiOutlineGithub className="githubicn"/></a>
          <a href="https://www.linkedin.com/in/nihal-parmar-2924411b7/" className="githubicn"><AiFillLinkedin className="githubicn"/></a>
          <a href="https://itznihal.medium.com/" className="githubicn"><AiFillMediumSquare className="githubicn"/></a>
          <a href="https://leetcode.com/nihalparmar/" className="githubicn"><SiLeetcode className="githubicn"/></a>
          
          <a href="https://www.instagram.com/itz_____nihal/" className="githubicn"><AiFillInstagram className="githubicn"/></a>








                   
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                
                <div className="info-box mt-4">
                <div className="maincontactcls">
                  <a href="mailto:itznihal143@gmail.com" className="githubicn"><CgMail className="githubicn"/></a>
                                    <h3>Email Me</h3>
                                    <p>itznihal143@gmail.com</p>
                                    </div>
                                    </div>


              </div>
              <div className="col-md-6">
              


                <div className="info-box mt-4">
                <div className="maincontactcls">
                  <a href="mailto:itznihal143@gmail.com" className="githubicn"><BiPhoneCall className="githubicn"/></a>
                                    <h3>Call Me</h3>
                                    <p>(+91)8980452333</p>
                                    </div>
                                    </div>

              </div>
            </div>

          </div>


{/* FORM SECTION START */}
          <div className="col-lg-6">
            <form method="POST" role="form" className="react-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  id="name" 
                  placeholder="Your Name"
                  value={user.name}
                  onChange={getUserData} 
                  required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  id="email" 
                  placeholder="Your Email" 
                  value={user.email}
                  onChange={getUserData}
                  required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input 
                type="text" 
                className="form-control" 
                name="subject" 
                id="subject" 
                placeholder="Subject" 
                value={user.subject}
                  onChange={getUserData}
                required/>
              </div>
              <div className="form-group mt-3">
                <textarea 
                className="form-control" 
                name="message" 
                rows="6" 
                placeholder="Message" 
                value={user.message}
                  onChange={getUserData}
                required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" onClick={postData}>Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    {/* CONTACT ME SECTION ENDS */}







        </div></div></div></div>






</>
  )
}

export default Contact