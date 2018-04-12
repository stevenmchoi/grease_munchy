import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
	<div className="content-header">
		<h1>Your house is the drive-thru</h1>
		<Link to="/signup">
			<video
				preload="auto"
				autoPlay
				loop
				src="https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm"
				type="video/webm"
			/>
		</Link>
	</div>
);

export default Splash;
