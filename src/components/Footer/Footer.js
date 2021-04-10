import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG} from 'react-icons/fa';

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
           <div className="footer-text">
               <p>©Copyright  |  Skyline 2021.</p>
               <p>All Right Reserved</p>
            </div> 
            <div className="footer-span">
               <span></span>
            </div>
            <div className="footer-icons">
                   <i><FaFacebookF /></i>
                   <i><FaTwitter /></i>
                   <i><FaGooglePlusG /></i>
            </div>
        </div>
    )
}

export default Footer
