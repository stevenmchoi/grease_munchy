import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllMeals, fetchMeal } from './util/meals_api_util';

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

	// Test meals
	window.fetchAllMeals = fetchAllMeals;
	window.fetchMeal = fetchMeal;

	const store = configureStore(preloadedState);

	ReactDOM.render(<Root store={store} />, root);
});
