import React, { Component } from 'react';
import "/frontend/static/css/header.css"

function Header() {
    return (
            <div className="navbar">
              <img src= "https://github.com/TheSPIDERshadow/Haem/blob/master/frontend/static/images/Haem%20Logo-07.png?raw=true" className ="logo" />
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