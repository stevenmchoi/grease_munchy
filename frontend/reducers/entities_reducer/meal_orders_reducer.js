import {
	RECEIVE_ALL_MEAL_ORDERS,
	RECEIVE_MEAL_ORDER,
	REMOVE_MEAL_ORDER,
} from '../../actions/meal_orders_actions';
import merge from 'lodash/merge';

const mealOrdersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = merge({}, oldState);

	switch (action.type) {
		case RECEIVE_ALL_MEAL_ORDERS:
			return merge(newState.mealOrders, action.mealOrders);
		case RECEIVE_MEAL_ORDER:
			return merge(newState, {
				[action.mealOrder.menu_item_id]: action.mealOrder,
			});
		case REMOVE_MEAL_ORDER:
			delete newState[action.mealOrderId];
			return newState;
		default:
			return oldState;
	}
};

export default mealOrdersReducer;
