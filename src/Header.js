import React, { Component } from 'react';
import './static/css/header.css';

function Header() {
    return (
            <div className="navbar">
              <img src= "https://raw.githubusercontent.com/Dr-andai/portfolio/master/src/static/images/DA%20logo-01.png" className ="logo" />
                  <ul>
                    <li><a href="#" className="header-link">Home</a></li>
                    <li><a href="#" className="header-link">Projects</a></li>
                    <li><a href="#" className="header-link">Blog</a></li>
                    <li><a href="#" className="header-link">About Me</a></li>
                  </ul> 
              </div>
    )
  }

export default Header