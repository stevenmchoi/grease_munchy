import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import AccountContainer from './account/account_container';

const Main = () => {
	return (
		<main>
			<h1>Welcome to Grease Munchy!</h1>
			<Switch>
				{/* <Route path="/pages/sample-recipes" component={MenuContainer} /> */}
				{/* <Route path="/account#upcoming" component={MenuContainer} /> */}

				{/* <AuthRoute path="/pages/pricing#plan-selector" component={CreateMealPlanContainer} /> */}
				{/* <AuthRoute path="/pages/pricing" component={CreateMealPlanContainer} /> */}

				{/* <Route path='/recipes/' component={RecipesIndexSearchContainer} */}
				{/* <Route path='/recipes/:recipeId' component={RecipeShowContainer} */}

				<ProtectedRoute path="/account" component={AccountContainer} />
				{/* <Route component={SplashContainer} /> */}
			</Switch>
		</main>
	);
};

export default Main;
