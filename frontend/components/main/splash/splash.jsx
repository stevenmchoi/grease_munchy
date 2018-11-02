import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
	<div className="splash-header">
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
	</div>
);

export default Splash;
