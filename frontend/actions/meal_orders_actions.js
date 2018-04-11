import * as MealOrdersApiUtil from '../util/meal_orders_api_util';

export const RECEIVE_ALL_MEAL_ORDERS = 'RECEIVE_ALL_MEAL_ORDERS';
export const RECEIVE_MEAL_ORDER = 'RECEIVE_MEAL_ORDER';
export const REMOVE_MEAL_ORDER = 'REMOVE_MEAL_ORDER';

const receiveAllMealOrders = (mealOrders) => ({
	type: RECEIVE_ALL_MEAL_ORDERS,
	mealOrders,
});

const receiveMealOrder = (mealOrder) => ({
	type: RECEIVE_MEAL_ORDER,
	mealOrder,
});

const removeMealOrder = (mealOrderId) => ({
	type: REMOVE_MEAL_ORDER,
	mealOrderId,
});

export const fetchMealOrders = () => (dispatch) =>
	MealOrdersApiUtil.fetchMealOrders().then((mealOrders) =>
		dispatch(receiveAllMealOrders(mealOrders))
	);

export const createMealOrder = (newMealOrder) => (dispatch) =>
	MealOrdersApiUtil.createMealOrder(newMealOrder).then((mealOrder) =>
		dispatch(receiveMealOrder(mealOrder))
	);

export const deleteMealOrder = (mealOrderId) => (dispatch) =>
	MealOrdersApiUtil.deleteMealOrder(mealOrderId).then((mealOrder) =>
		dispatch(removeMealOrder(mealOrderId))
	);
