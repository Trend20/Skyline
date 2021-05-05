import React, { useState } from 'react';
import { FaChevronRight, FaGooglePlusG, FaBars } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

import './Hero.css';

function Hero() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<div className="hero" id="home">
			<div className="hero-text">
				<header>
					<div className="logo">
						<img src="logo.png" alt="logo" />
					</div>
					<nav className={click ? 'nav-options active' : 'nav-options'} id="navbar">
						<ul>
							<li>
								<Link to="home" spy={true} smooth={true}>
									<a href="#" className="active">
										Home
									</a>
								</Link>
							</li>
							<li onClick={closeMobileMenu}>
								<Link to="about" spy={true} smooth={true}>
									<a href="#">About Us</a>
								</Link>
							</li>
							<li onClick={closeMobileMenu}>
								<Link to="services" spy={true} smooth={true}>
									<a href="#">Services</a>
								</Link>
							</li>
							<li onClick={closeMobileMenu}>
								<Link to="team" spy="true" smooth={true}>
									<a href="#">Team</a>
								</Link>
							</li>
							<li onClick={closeMobileMenu}>
								<Link to="contact" spy={true} smooth={true}>
									<a href="#">Contact</a>
								</Link>
							</li>
						</ul>
					</nav>
					<div className="toggle mobile-menu" onClick={handleClick}>
						{click ? <AiOutlineClose className="menu-icon" /> : <FaBars className="menu-icon" />}
					</div>
				</header>
				<div className="hero-description">
					<h1>
						Skyline - We offer <b> 24hr Services</b>
					</h1>
					<p>Create and edit your business website with our responsive website builder.</p>
					<button>
						Subscribe
						<FaChevronRight />
					</button>
					{/* <h1 id="absolute">Great</h1> */}

					<div className="section-icons">
						<i>
							<TiSocialFacebook />
						</i>
						<i>
							<TiSocialTwitter />
						</i>
						<i>
							<FaGooglePlusG />
						</i>
					</div>
				</div>
			</div>

			<div className="hero-image">
				<img src="../../img/hero.jpg" alt="" />
			</div>
		</div>
	);
}

export default Hero;
