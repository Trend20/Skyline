import React, { Component } from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './Contact.css';
class Contact extends Component {
	render() {
		return (
			<div className="contact-us" id="contact">
				<div className="contact-image">
					<img src="../../img/contact.jpg" alt="" />
				</div>
				<form action="">
					<input type="text" placeholder="Name*" />
					<br />
					<input type="email" placeholder="Email*" />
					<br />
					<textarea name="message" id="message" cols="30" rows="5" placeholder="Message"></textarea>
					<br />
					<button className="submit-btn">
						Send Message{' '}
						<i>
							<FaChevronRight />
						</i>
					</button>
				</form>
			</div>
		);
	}
}

export default Contact;
