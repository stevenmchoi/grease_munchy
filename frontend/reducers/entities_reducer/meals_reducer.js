import { RECEIVE_ALL_MEALS, RECEIVE_MEAL } from '../../actions/meals_actions';
import merge from 'lodash/merge';

const mealsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = merge({}, oldState);

	switch (action.type) {
		case RECEIVE_ALL_MEALS:
			newState.meals = action.meals;
			return newState;
		case RECEIVE_MEAL:
			return merge(newState, { [action.meal.id]: action.meal });
		default:
			return oldState;
	}
};

export default mealsReducer;
