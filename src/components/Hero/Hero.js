import React from 'react';
import { FaChevronRight, FaGooglePlusG } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';

import './Hero.css';

function Hero() {
	return (
		<div className="hero">
			<div className="hero-text">
				<header>
					<div className="logo">
						<img src="logo.png" alt="logo" />
					</div>
					<nav>
						<ul>
							<li>
								<a href="#" className="active">
									Home
								</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Pages</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className="hero-description">
					<h1>
						Skyline - The Best <b> MotoCMS Template</b>
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
