import { RECEIVE_ALL_MEALS, RECEIVE_MEAL } from '../../actions/meals_actions';
import merge from 'lodash/merge';

const mealsReducer = (oldEntities = {}, action) => {
	Object.freeze(oldEntities);

	let newEntities = merge({}, oldEntities);

	switch (action.type) {
		case RECEIVE_ALL_MEALS:
			newEntities = merge(newEntities, action.meals);
			return newEntities;
		// const newObject = Object.assign({}, newEntities);
		// return newObject;
		case RECEIVE_MEAL:
			const meal = action.meal;
			newEntities[meal.id] = meal;
			return newEntities;
		default:
			return oldEntities;
	}
};

export default mealsReducer;
