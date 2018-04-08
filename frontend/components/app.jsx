import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
// import MainContainer from './main/main_container';
import Main from './main/main';

const App = () => (
	<div className="app-container">
		<Route path="/" component={NavBarContainer} />

		<Route component={Main} />

		{/* <Route path='/' component={FooterContainer} /> */}

		{/* <Switch>
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Route component={Main} />
		</Switch> */}
	</div>
);

export default App;
