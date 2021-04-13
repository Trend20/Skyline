import React from 'react'

import { FaChevronRight } from 'react-icons/fa';

import './Theme.css';
function Theme() {
    return (
        <div className="theme">
            <p>Set your own time of phone call and we`ll call you back</p>
            <button className="theme-btn">Buy theme now <i><FaChevronRight /></i></button>
        </div>
    )
}

export default Theme
