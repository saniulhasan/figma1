import React from 'react'
import './Navbar.css'
import ai from '../../assets/GPT-3.png';
function Navbar() {
  return (
    <div className="navbar_main">

    <div className="logo">

  <img src={ai}/>
    </div>
     <div className="nav_menu">
     <p><a href="#">Home</a></p>
     <p><a href="#">What is GPT?</a></p>
      <p><a href="#">Case Studies</a></p>
       <p><a href="#">Home</a></p>
        <p><a href="#">Home</a></p>
     
     </div>
    <div className="right_menu">
    <p><a href="#">SignIn</a></p>
      <button>signup</button>
    </div>
    </div>
  )
}

export default Navbar