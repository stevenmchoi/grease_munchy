import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const Main = () => {
	return (
		<main>
			<Switch>
				{/* <Route path="/pages/sample-recipes" component={MenuContainer} /> */}
				{/* <Route path="/account#upcoming" component={MenuContainer} /> */}
				{/* <Route path="/pages/pricing#plan-selector" component={MealPlanContainer} /> */}
				{/* <Route path="/pages/pricing" component={MealPlanContainer} /> */}
				{/* <Route path='/recipes/' component={RecipesIndexSearchContainer} */}
				{/* <Route path='/recipes/:recipeId' component={RecipeShowContainer} */}

				{/* <Route exact path="/" component={SplashContainer} /> */}
				{/* <ProtectedRoute
					exact
					path="/account#current"
					component={CurrentContainer}
				/> */}
			</Switch>
		</main>
	);
};

export default Main;
