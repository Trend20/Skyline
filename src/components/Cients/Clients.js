import React from 'react'

import './Clients.css';

function Clients() {
    return (
        <div className="clients">
            <div className="section-heading">
                <span></span>
                <h1>Our Clients</h1>
            </div>

            <div className="client-images">
                <img src="../../img/client1.png" alt="client1"/>
                <img src="../../img/client2.png" alt="client2"/>
                <img src="../../img/client3.png" alt="client3"/>
                <img src="../../img/client4.png" alt="client4"/>
            </div>
        </div>
    )
}

export default Clients
