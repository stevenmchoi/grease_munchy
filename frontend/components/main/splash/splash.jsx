import React from 'react';
import { Link } from 'react-router-dom';
import EasySteps1 from '../../../../app/assets/images/easysteps1.svg';

const Splash = () => (
	<div className="splash">
		<section className="splash-header">
			<div className="spacer-behind-nav-splash" />

			<video
				className="home-video"
				preload="auto"
				autoPlay
				loop
				src="https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm"
				type="video/webm"
				muted
			/>

			<div className="splash-header-container">
				<h2 className="splash-header-text">Your house is the drive-thru!</h2>
				<Link className="signup-btn" to="/signup">
					GET STARTED
				</Link>
			</div>
		</section>

		<section className="splash-easy-steps">
			<EasySteps1 width="320" height="329" />
		</section>

		<section className="splash-look-inside" />

		<section className="splash-simple-pitch" />
	</div>
);

export default Splash;
