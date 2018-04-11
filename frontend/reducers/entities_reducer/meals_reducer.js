import { RECEIVE_ALL_MEALS, RECEIVE_MEAL } from '../../actions/meals_actions';
import merge from 'lodash/merge';

const mealsReducer = (oldState = { meals: {} }, action) => {
	Object.freeze(oldState);
	let newState = merge({}, oldState);

	switch (action.type) {
		case RECEIVE_ALL_MEALS:
			return action.meals;
		// Test fetchMeal after finishing RecipesIndex, to make RecipeShow
		case RECEIVE_MEAL:
			return merge(newState, { [action.meal.id]: action.meal });
		default:
			return oldState.meals;
	}
};

export default mealsReducer;
