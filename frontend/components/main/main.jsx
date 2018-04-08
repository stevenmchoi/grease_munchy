import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import SignupContainer from '../signup/signup_container';
import LoginContainer from '../login/login_container';
import AccountContainer from './account/account_container';

const Main = () => {
	return (
		<div className="main-wrapper">
			<div className="spacer-behind-nav" />

			<h1>Welcome to Grease Munchy!</h1>

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

			<p>
				owiejf owiejfweofjo<br />
				woiejfowiejfoiwejfwoei woiejfoiwejfoniwnofiej
				<br />owiej
			</p>
			<p>oiwjeoifjowiejf owjeof iwjeo fwoe fowiejfowje</p>
			<p>iwewoeijfo iowijef orijfowiejfowiefoifo</p>
			<p>soidufoiwjfowjefjwo owie</p>
			<p>
				foiej woiefo we fowieofiw eoifowe fiw efi woiejfowiejfoiwejfwoei
				oi
			</p>
			<p>jiw fowj oefjoie f jbfhjwlkej,</p>
			<p>wjrjgne,rjg n, rg oefijwoiehiuwhy48hi384y3984yo</p>
			<p>34o8 t3o 4to387 4 34to83 4</p>
		</div>
	);
};

export default Main;
