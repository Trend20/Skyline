import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import './Timer.css';

function Timer() {
    return (
        <div className="timer">
            <div className="timer-text">
                <div className="head">
                    <span></span>
                    <h1>Get Time Limited Discount</h1>
                </div>
                <h3>For Any of Our Serviсes</h3>
                <p>
                Be the first to save big with our company. Participate in our contest to get the special offer at the special discounted price. Hurry up! You have less and less time to benefit. Leave your email address to get started. We will contact you soon.
                </p>
            </div>

            <div className="countdown">
                <div id="timer"></div>
                <form>
                    <input type="email" id="input" placeholder="Email Address*" required/>
                    <br/>
                    <button className="form-btn">Get Now <i><FaChevronRight /></i></button>
                </form>
            </div>
        </div>
    )
}

export default Timer
