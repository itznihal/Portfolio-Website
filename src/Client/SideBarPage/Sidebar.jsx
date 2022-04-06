import React from 'react';
import "./sidebar.scss";
import { BsInstagram} from 'react-icons/bs';
import { AiFillGithub} from 'react-icons/ai';

import { RiFacebookCircleFill} from 'react-icons/ri';

import { GrLinkedin} from 'react-icons/gr';




const Sidebar = () => {
  return (
<>
<div className="icon-bar">
  <a href="#" className="twitter cmnicncls"><AiFillGithub className="fa fa-twitter"/></a>
  <a href="#" className="facebook cmnicncls"><BsInstagram className="fa fa-facebook"/></a>
  <a href="#" className="linkedin cmnicncls"><GrLinkedin className="fa fa-linkedin"/></a>
  <a href="#" className="youtube cmnicncls"><RiFacebookCircleFill className="fa fa-youtube"/></a>
</div>



</>  )
}

export default Sidebar