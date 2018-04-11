import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllMeals, fetchMeal } from './actions/meals_actions';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');

	let preloadedState = undefined;
	if (window.currentUser) {
		preloadedState = {
			session: {
				currentUser: window.currentUser,
			},
		};
	}

	const store = configureStore(preloadedState);

	// Test fetchMeal after finishing RecipesIndex, to make RecipeShow
	window.dispatch = store.dispatch;
	window.fetchMeal = fetchMeal;
	window.fetchAllMeals = fetchAllMeals;

	ReactDOM.render(<Root store={store} />, root);
});
