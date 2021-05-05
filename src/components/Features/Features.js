import React from 'react';

// importing styles
import './Features.css';

function Features() {
	return (
		<div className="features" id="services">
			{/* <h1>Features</h1> */}

			<div className="feature-container">
				<div className="f-details">
					<img src="../../img/drag.png" alt="drag" />
					<h3>Drag&Drop Editor</h3>
					<p>Use our user-friendly website builder with drag and drop functionality to edit your site.</p>
				</div>
				<div className="f-details">
					<img src="../../img/ready-made.png" alt="drag" />
					<h3>Ready-Made Blocks</h3>
					<p>There are 100 + blocks with made-up design for customizing your website design.</p>
				</div>
				<div className="f-details">
					<img src="../../img/responsive.png" alt="drag" />
					<h3>Fully Responsive</h3>
					<p>Skyline is a 100% responsive website template, adapted to any possible mobile device.</p>
				</div>
				<div className="f-details">
					<img src="../../img/presets.png" alt="drag" />
					<h3>Presets Builder</h3>
					<p>Change the appearance of your widgets in just several clicks of your mouse.</p>
				</div>
				<div className="f-details">
					<img src="../../img/widgets.png" alt="drag" />
					<h3>Facinating Widgets</h3>
					<p>Take advantage of the full collection of widgets to upgrade your website functionality.</p>
				</div>
				<div className="f-details">
					<img src="../../img/fonts.png" alt="drag" />
					<h3>Google Fonts</h3>
					<p>Use the set of attracive typography from Google to attract more eyes to your site.</p>
				</div>
				<div className="f-details">
					<img src="../../img/blog.png" alt="drag" />
					<h3>Blog Functionality</h3>
					<p>Become a professional blogger by creating a fully-featured blog on your site.</p>
				</div>
				<div className="f-details">
					<img src="../../img/social.png" alt="drag" />
					<h3>Social Media</h3>
					<p>Let your website audience mention your online brand with special social media widgets.</p>
				</div>
				<div className="f-details">
					<img src="../../img/contact.png" alt="drag" />
					<h3>Contact Form</h3>
					<p>Get emails right to your inbox with the Contact Form widget to get feedback of any kind.</p>
				</div>
				<div className="f-details">
					<img src="../../img/parallax.png" alt="drag" />
					<h3>Parallax & Animation</h3>
					<p>Enliven your site design with more than forty types of animation and parallax effect.</p>
				</div>
				<div className="f-details">
					<img src="../../img/seo.png" alt="drag" />
					<h3>SEO-friendly</h3>
					<p>Grow your search engine rankings with a full set of basic tools for SEO.</p>
				</div>
				<div className="f-details">
					<img src="../../img/label.png" alt="drag" />
					<h3>White Label</h3>
					<p>Retail Skyline at your own cost and under your personal branding.</p>
				</div>
			</div>
		</div>
	);
}

export default Features;
