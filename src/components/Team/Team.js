import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';

import './Team.css';

function Team() {
	return (
		<div className="team">
			{/* <h1>Team</h1> */}

			<div className="team-members">
				<div className="member">
					<h3>Nicholas Bell</h3>
					<p>Founder & CEO</p>

					<div className="team-links">
						<i>
							<FaFacebookF />
						</i>
						<i>
							<FaTwitter />
						</i>
						<i>
							<FaGooglePlusG />
						</i>
					</div>
					<img src="../../img/team1.png" alt="nick" />
				</div>

				<div className="member">
					<h3>Gregory Ramos</h3>
					<p>Head of Development</p>

					<div className="team-links">
						<i>
							<FaFacebookF />
						</i>
						<i>
							<FaTwitter />
						</i>
						<i>
							<FaGooglePlusG />
						</i>
					</div>
					<img src="../../img/team2.png" alt="ramos" />
				</div>

				<div className="member">
					<h3>Craig Dean</h3>
					<p>Marketing Director</p>

					<div className="team-links">
						<i>
							<FaFacebookF />
						</i>
						<i>
							<FaTwitter />
						</i>
						<i>
							<FaGooglePlusG />
						</i>
					</div>
					<img src="../../img/team3.png" alt="dean" />
				</div>
			</div>
		</div>
	);
}

export default Team;
