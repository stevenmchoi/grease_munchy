import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import Main from './main/main';

// TODO: FooterContainer
const App = () => (
	<div className="app-wrapper">
		<Route path="/" component={NavBarContainer} />

		<Route component={Main} />

		{/* <Route path='/' component={FooterContainer} /> */}
	</div>
);

export default App;
