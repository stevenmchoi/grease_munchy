import * as MealsApiUtil from "../util/meals_api_util";

export const RECEIVE_ALL_MEALS = "RECEIVE_ALL_MEALS";
export const RECEIVE_MEAL = "RECEIVE_MEAL";

const receiveAllMeals = meals => ({
	type: RECEIVE_ALL_MEALS,
	meals
});

const receiveMeal = meal => ({
	type: RECEIVE_MEAL,
	meal
});

export const fetchAllMeals = () => dispatch =>
	MealsApiUtil.fetchAllMeals().then(meals => dispatch(receiveAllMeals(meals)));

export const fetchMeal = mealId => dispatch =>
	MealsApiUtil.fetchMeal(mealId).then(meal => dispatch(receiveMeal(meal)));