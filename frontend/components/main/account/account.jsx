import React from 'react';
import { Switch, Route } from 'react-router-dom';

const AccountMain = ({ currentUser }) => {
	return (
		<div className="splash">
			<section className="splash-header">
				<div className="spacer-behind-nav-splash" />

				<video
					className="home-video"
					preload="auto"
					autoPlay
					loop
					src="https://www.videvo.net/videvo_files/converted/2013_11/preview/Clip14271013Videvo.mov99304.webm"
					type="video/webm"
					muted
				/>

				<div className="splash-header-container">
					<h2 className="splash-header-text">Get your fast food faster, {currentUser.username}!</h2>
				</div>
			</section>
		</div>
	);
};

export default AccountMain;
