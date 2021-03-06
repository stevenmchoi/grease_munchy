import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';

import MenuContainer from './menu/menu_index_container';

import RecipesIndexContainer from './recipes/recipes_index/recipes_index_container';
import RecipeShowContainer from './recipes/recipe_show/recipe_show_container';

import AccountContainer from './account/account_container';
import SplashContainer from './splash/splash_container';

const Main = () => {
	return (
		<div className="main-wrapper">
			<Switch>
				<AuthRoute path="/signup" component={SignupContainer} />
				<AuthRoute path="/login" component={LoginContainer} />

				<Route path="/menu" component={MenuContainer} />

				<Route path="/recipes/:recipeNameId" component={RecipeShowContainer} />
				<Route path="/recipes" component={RecipesIndexContainer} />

				<ProtectedRoute path="/account" component={AccountContainer} />
				<AuthRoute path="/" component={SplashContainer} />
			</Switch>
		</div>
	);
};

export default Main;
