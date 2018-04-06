import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';

const App = () => (
	<div>
		<Route path="/" component={NavBarContainer} />

		{/* <MainContainer> */}
		{/* <Switch> */}
		<Route path="/signup" component={SignupContainer} />
		<Route path="/login" component={LoginContainer} />

		{/* <Route exact path='/' component={SplashContainer} /> // logged out */}
		{/* <Route exact path='/account' component={SplashContainer} /> // logged in */}

		{/* <Route path="/pages/sample-recipes" component={MenuContainer} /> */}
		{/* <Route path="/account#upcoming" component={MenuContainer} /> */}

		{/* <Route path="/pages/pricing#plan-selector" component={MealPlanContainer} /> */}
		{/* <Route path="/pages/pricing" component={MealPlanContainer} /> */}

		{/* <Switch> */}
		{/* </ MainContainer> */}

		{/* <Route path='/' component={FooterContainer} /> */}
	</div>
);

export default App;
