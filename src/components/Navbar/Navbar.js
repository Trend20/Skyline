import React, { Component } from 'react'

import logo from '../../assets/logo.png';

// react icons
import {FaFacebookF, FaGooglePlusG, FaTwitter} from 'react-icons/fa';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="hero">
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

            <div className="hero-description">
                <h3>Skyline - The Best <b> MotoCMS Template</b></h3>
                <p>Create and edit your business website with our responsive website builder.</p>
                <button className="sub-btn">Subscribe</button>

                <h1>Great</h1>
            </div>

            <div className="social-media">
                <FaFacebookF />
                <FaGooglePlusG />
                <FaTwitter />
            </div>
            </div>
        )
    }
}
