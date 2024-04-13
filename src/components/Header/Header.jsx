import React from 'react';
import './Header.css';
import Group from '../../assets/Group 81.png';

import Heading from '../../assets/Heading.png';
import Head from '../../assets/Head.png';
function Header() {
  return (
    <div className="Header">

  <div className='header_left'>

  <img src={Heading} />

  <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
<div className="inputitem">
<input type="text" placeholder="Inter your name"/>

<button>signup</button>
</div>
 <div className="people">


 <img src={Group} />
 <p>1,600 people requested access a visit in last 24 hours</p>
 
 </div>
  </div>

  <div className='header_right'>
   <img src={Head}/>

</div>

    </div>
  )
}

export default Header