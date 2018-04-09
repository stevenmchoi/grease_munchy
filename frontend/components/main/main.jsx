import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';
import AccountContainer from './account/account_container';

const Main = () => {
	return (
		<div className="main-wrapper">
			<div className="spacer-behind-nav" />

			<Switch>
				<AuthRoute path="/signup" component={SignupContainer} />
				<AuthRoute path="/login" component={LoginContainer} />

				{/* <Route
					path="/pages/sample-recipes"
					component={MenuContainer}
				/> */}
				{/* <Route
					path="/account#upcoming"
					component={MenuContainer}
				/> */}

				{/* <AuthRoute
					path="/pages/pricing#plan-selector"
					component={CreateMealPlanContainer}
				/> */}
				{/* <AuthRoute
					path="/pages/pricing"
					component={CreateMealPlanContainer}
				/> */}

				{/* <Route
					path="/recipes/"
					component={RecipesIndexSearchContainer}
				/> */}
				{/* <Route
					path="/recipes/:recipeId"
					component={RecipeShowContainer}
				/> */}

				<ProtectedRoute path="/account" component={AccountContainer} />

				{/* <Route component={SplashContainer} />  // default container */}
			</Switch>
		</div>
	);
};

export default Main;
