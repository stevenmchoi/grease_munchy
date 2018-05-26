import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from "./actions/meal_orders_actions";

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

	let preloadedState = undefined;
	if (window.currentUser) {
		preloadedState = {
			session: {
				currentUser: window.currentUser,
			},
		};
	}

	const store = configureStore(preloadedState);

	window.dispatch = store.dispatch;
	window.fetchMealOrders = fetchMealOrders;
	window.createMealOrder = createMealOrder;
	window.deleteMealOrder = deleteMealOrder;

	ReactDOM.render(<Root store={store} />, root);
});
