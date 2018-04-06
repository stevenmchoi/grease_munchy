import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';
// import MainContainer from './main/main_container';
import Main from './main/main';

const App = () => (
	<div>
		<Route path="/" component={NavBarContainer} />

		<Switch>
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Route component={Main} />
		</Switch>

		{/* <Route path='/' component={FooterContainer} /> */}
	</div>
);

export default App;
