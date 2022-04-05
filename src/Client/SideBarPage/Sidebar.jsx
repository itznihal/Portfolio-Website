import React from 'react';
import "./sidebar.scss";
import { BsInstagram} from 'react-icons/bs';
import { AiFillGithub} from 'react-icons/ai';

import { RiFacebookCircleFill} from 'react-icons/ri';

import { GrLinkedin} from 'react-icons/gr';




const Sidebar = () => {
  return (
<>
<div class="icon-bar">
  <a href="#" class="twitter cmnicncls"><AiFillGithub class="fa fa-twitter"/></a>
  <a href="#" class="facebook cmnicncls"><BsInstagram class="fa fa-facebook"/></a>
  <a href="#" class="linkedin cmnicncls"><GrLinkedin class="fa fa-linkedin"/></a>
  <a href="#" class="youtube cmnicncls"><RiFacebookCircleFill class="fa fa-youtube"/></a>
</div>



</>  )
}

export default Sidebar