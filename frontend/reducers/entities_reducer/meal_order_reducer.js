import {
	RECEIVE_ALL_MEAL_ORDERS,
	RECEIVE_MEAL_ORDER,
	REMOVE_MEAL_ORDER,
} from '../../actions/meal_orders_actions';
import merge from 'lodash/merge';

const mealOrderReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = merge({}, oldState);

	switch (action.type) {
		case RECEIVE_ALL_MEAL_ORDERS:
			newState.mealOrders = action.mealOrders;
			// Should already be filtered out in 'view/index.json.jbuilder'
			return newState;
		case RECEIVE_MEAL_ORDER:
			return action.mealOrder;
		case REMOVE_MEAL_ORDER:
			delete newState[action.mealOrderId];
			return newState;
		default:
			return oldState;
	}
};

export default mealOrderReducer;
