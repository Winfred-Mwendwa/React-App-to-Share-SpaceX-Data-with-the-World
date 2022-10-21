import React from 'react';

import './Navbar.css';

function Navbar () {
   return (
      <header>
      <div class="container"> 
         <nav class="navbar">
            <a href="#" class="nav-branding">W.</a>
            <ul class="nav-menu">
               <li class="nav-item">
                  <a href="#home" class="nav-link">Home</a>
               </li>
               <li class="nav-item">
                  <a href="#search" class="nav-link">Search</a>
               </li>
               
            </ul>
            <div class="hamburger">
               <span class="bar"></span>
               <span class="bar"></span>
               <span class="bar"></span>
            </div>
         </nav>
      </div>
   </header>
    )
}

export default Navbar;