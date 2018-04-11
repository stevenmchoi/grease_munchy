import * as MealsApiUtil from '../util/meals_api_util';

export const RECEIVE_ALL_MEALS = 'RECEIVE_ALL_MEALS';
export const RECEIVE_MEAL = 'RECEIVE_MEAL';

export const RECEIVE_ALL_MEAL_ORDERS = 'RECEIVE_ALL_MEAL_ORDERS';
export const RECEIVE_MEAL_ORDER = 'RECEIVE_MEAL_ORDER';

const receiveAllMeals = (meals) => ({
	type: RECEIVE_ALL_MEALS,
	meals,
});

const receiveMeal = (meal) => ({
	type: RECEIVE_MEAL,
	meal,
});

const receiveAllMealOrders = (mealOrders) => ({
	type: RECEIVE_ALL_MEAL_ORDERS,
	mealOrders,
});

const receiveMealOrder = (mealOrders) => ({
	type: RECEIVE_MEAL_ORDER,
	mealOrders,
});

export const fetchAllMeals = () => (dispatch) =>
	MealsApiUtil.fetchAllMeals().then((meals) =>
		dispatch(receiveAllMeals(meals))
	);

export const fetchMeal = (mealId) => (dispatch) =>
	MealsApiUtil.fetchMeal(mealId).then((meal) => dispatch(receiveMeal(meal)));

export const fetchMealOrders = () => (dispatch) =>
	MealsApiUtil.fetchMealOrders().then((mealOrders) =>
		dispatch(receiveAllMealOrders(mealOrders))
	);

export const createMealOrder = (newMealOrder) => (dispatch) =>
	MealsApiUtil.createMealOrder(newMealOrder).then((mealOrder) =>
		dispatch(receiveMealOrder)
	);

export const deleteMealOrder = (mealOrderId) => (dispatch) =>
	MealsApiUtil.deleteMealOrder(mealOrderId).then((mealOrder) =>
		dispatch(receiveMealOrder(null))
	);
