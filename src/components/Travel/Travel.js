import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import './Travel.css';

function Travel() {
    return (
        <div className="travel">
            <div className="travel-image">
                <img src="../../img/travel.png" alt="travel"/>
            </div>

            <div className="travel-text">
                <div className="heading">
                    <h1>One More Child Page Included</h1>
                    <span></span>
                </div>
                <h3>Travel Home Page</h3>
                <p>
                  Are you a travel agent who lacks a professional and responsive website? Use Skyline with its travel child home page to start and promote your online business on the Web with no professional skills.
                </p>
                <button className="travel-btn">Buy theme now <i><FaChevronRight /></i></button>
            </div>
        </div>
    )
}

export default Travel
