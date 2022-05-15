import React from 'react';
import "./sidebar.scss";
import { BsInstagram} from 'react-icons/bs';
import { AiFillGithub} from 'react-icons/ai';

import { RiFacebookCircleFill} from 'react-icons/ri';

import { GrLinkedin} from 'react-icons/gr';


import { AiOutlineMedium} from 'react-icons/ai';
import { BiCodeAlt} from 'react-icons/bi';



const Sidebar = () => {
  return (
<>
<div className="icon-bar">
  <a href="https://github.com/itznihal" className="twitter cmnicncls"><AiFillGithub className="fa fa-twitter"/></a>
  <a href="https://leetcode.com/nihalparmar/" className="youtube cmnicncls"><BiCodeAlt className="fa fa-youtube"/></a>
  <a href="https://www.linkedin.com/in/nihal-parmar-2924411b7/" className="linkedin cmnicncls"><GrLinkedin className="fa fa-linkedin"/></a>
  
  <a href="https://itznihal.medium.com/" className="youtube cmnicncls"><AiOutlineMedium className="fa fa-medium"/></a>
  <a href="https://www.instagram.com/itz_____nihal/" className="facebook cmnicncls"><BsInstagram className="fa fa-instagram"/></a>
</div>



</>  )
}

export default Sidebar