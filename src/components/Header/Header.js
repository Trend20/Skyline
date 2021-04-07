import React from 'react'
import Navbar from '../Navbar/Navbar'

// styles
import './Header.css';

function Header() {
    return (
        <div className="header-container">
            <Navbar />

            <div className="image">
                <img src="../../img/hero.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Header
