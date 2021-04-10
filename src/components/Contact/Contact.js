import React, { Component } from 'react';

import './Contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="contact-us">
                <div className="contact-image">
                    <img src="../../img/contact.jpg" alt=""/>
                </div>
                <form action="">
                    <input type="text" placeholder="Name*"/>
                    <br/>
                    <input type="email" placeholder="Email*"/>
                    <br/>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Message"></textarea>
                    <br/>
                    <button className="submit-btn">Send Message</button>
                </form>
            </div>
        );
    }
}

export default Contact;