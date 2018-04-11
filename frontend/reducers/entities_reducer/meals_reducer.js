import { RECEIVE_ALL_MEALS, RECEIVE_MEAL } from '../../actions/meals_actions';
import merge from 'lodash/merge';

const mealsReducer = (oldEntities = { meals: {} }, action) => {
	Object.freeze(oldEntities);

	let newEntities = merge({}, oldEntities);

	switch (action.type) {
		case RECEIVE_ALL_MEALS:
			newEntities = merge(newEntities, { meals: action.meals });
			return newEntities.meals;
		case RECEIVE_MEAL:
			const meal = action.meal;
			newEntities[meal.id] = meal;
			return newEntities;
		default:
			return oldEntities.meals;
	}
};

export default mealsReducer;
