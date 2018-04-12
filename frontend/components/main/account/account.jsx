import React from 'react';
import { Switch, Route } from 'react-router-dom';

const AccountMain = ({ currentUser }) => {
	return (
		<section className="content-header">
			<h1>Get your fast food faster, {currentUser.username}!</h1>
			<video
				className="home-video"
				preload="auto"
				autoPlay
				loop
				src="https://www.videvo.net/videvo_files/converted/2013_11/preview/Clip4271013Videvo.mov90234.webm"
				type="video/webm"
			/>
		</section>
	);
};

export default AccountMain;
