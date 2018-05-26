import React from "react";
import { Switch, Route } from "react-router-dom";

const AccountMain = ({ currentUser }) => {
	return (
		<div className="content-header">
			<h1>Get your fast food faster, {currentUser.username}!</h1>
			<img src="https://farm3.staticflickr.com/2572/3932344564_c03b7326c1_o.jpg" />
		</div>
	);
};

export default AccountMain;
