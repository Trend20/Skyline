import React from 'react'

import './Construction.css';

function Construction() {
    return (
        <div className="construction">
            <div className="const-text">
                <h1>Simplify your life with <b> Skyline Construction Child Page</b></h1>
                <p>
                 If you work in architecture or construction business, then you should take advantage of this amazing child home page in Skyline. Just add your personal content and set this page as the home one and enjoy.
                </p>

                <div className="methods">
                    <h5>
                        <img src="../../img/flash.png" alt="flash"/>
                        Quick as a flash
                    </h5>
                    <h5>
                        <img src="../../img/design.png" alt="flash"/>
                        Professional Design
                    </h5>
                    <h5>
                        <img src="../../img/satisfaction.png" alt="flash"/>
                        Satisfaction Guarantee
                    </h5>
                </div>

                <button className="const-btn">Learn More</button>
            </div>

            <div className="const-image">
                <img src="../../img/simplify.png" alt="simplify"/>
            </div>
        </div>
    )
}

export default Construction
