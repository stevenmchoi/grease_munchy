import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';

// TODO: Get rid of error:
//   Warning: Hash history cannot PUSH the same path;
//     a new entry will not be added to the history stack

const App = () => (
	<div>
		<Route path="/" component={NavBarContainer} />

		{/* <MainContainer> */}
		{/* <Switch> */}
		<AuthRoute path="/signup" component={SignupContainer} />
		<AuthRoute path="/login" component={LoginContainer} />

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
