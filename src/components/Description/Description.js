import React, { Component } from 'react';

// import component style
import './Description.css';

class Description extends Component {
    render() {
        return (
            <div className="our-description">
                <div className="desc-image">
                    <img src="../../img/about.png" alt="about"/>
                </div>

                {/* text contents */}

                <div className="desc-text">
                    <div className="heading">
                        <h1>Why Skyline?</h1>
                        <span></span>
                    </div>
                    <p>Our all-in-one platform gives you everything you need to run your business.
                       Whether you’re just getting started or are an established brand, our powerful platform helps your business grow.
                    </p>
                    <button className="desc-btn">Learn More</button>

                    <div className="desc-stats">
                        <div className="stat">
                            <h1>3+</h1>
                            <h5>Child Themes</h5>
                        </div>
                        <div className="stat">
                            <h1>20+</h1>
                            <h5>Subpages</h5>
                        </div>
                        <div className="stat">
                            <h1>40+</h1>
                            <h5>Hours of Work</h5>
                        </div>
                        <div className="stat">
                            <h1>32+</h1>
                            <h5>Cups of Coffee</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;