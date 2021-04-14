import React, { Component } from 'react'

import logo from '../../assets/logo.png';

// react icons
import {FaFacebookF, FaGooglePlusG, FaTwitter, FaChevronRight } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="hero">
            <Router>
            <div className="navbar">
               <div className="logo">
                   <img src={logo} alt="logo"/>
               </div>

               <nav className="nav">
                   <ul>
                       <li>
                          <Link to="/" className="active">Home</Link>
                       </li>
                       <li>
                           <Link to="/about">About Us</Link>
                       </li>
                       <li>
                           <Link to="/pages">Pages</Link>
                       </li>
                       <li>
                           <Link to="/blog">Blog</Link>
                       </li>
                       <li>
                           <Link to="/contacts">Contacts</Link>
                       </li>
                   </ul>
               </nav>
               {/* <Switch>
                   <Route>
                       <About />
                   </Route>
                   <Route>
                        <Pages />
                   </Route>
                   <Route>
                        <Blog />
                   </Route>
                   <Route>
                        <Contact />
                   </Route>
               </Switch> */}
            </div>
            </Router>



            <div className="hero-description">
                <h3>Skyline - The Best <b> MotoCMS Template</b></h3>
                <p>Create and edit your business website with our responsive website builder.</p>
                <button className="sub-btn">Subscribe <i><FaChevronRight /></i></button>

                <h1>Great</h1>
            </div>

            <div className="social-media">
               <i> <FaFacebookF /></i>
                <i><FaGooglePlusG /></i>
                <i><FaTwitter /></i>
            </div>
            </div>
        )
    }
}
