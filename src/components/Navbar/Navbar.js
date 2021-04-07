import React, { Component } from 'react'

import logo from '../../assets/logo.png';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
               <div className="logo">
                   <img src={logo} alt="logo"/>
               </div>

               <nav className="nav">
                   <ul>
                       <li><a href="#" className="active">Home</a></li>
                       <li><a href="#">About Us</a></li>
                       <li><a href="#">Pages</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Contact</a></li>
                   </ul>
               </nav>
            </div>
        )
    }
}
