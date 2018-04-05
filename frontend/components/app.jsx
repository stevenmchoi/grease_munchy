import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './signup/signup_container';

const App = () => (
	<div>
		<Route path="/" component={NavBarContainer} />
		<Route path="/signup" component={SignupContainer} />
	</div>
);

export default App;
