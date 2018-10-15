import * as MenuItemsApiUtil from '../util/menu_items_api_util';
import * as MealsApiUtil from '../util/meals_api_util';

export const RECEIVE_ALL_MENU_ITEMS = 'RECEIVE_ALL_MENU_ITEMS';
export const RECEIVE_MEAL = 'RECEIVE_MEAL';

const receiveAllMenuItems = (menuItems) => ({
	type: RECEIVE_ALL_MENU_ITEMS,
	menuItems,
});

const receiveMeal = (meal) => ({
	type: RECEIVE_MEAL,
	meal,
});

export const fetchAllMenuItems = () => (dispatch) =>
	MenuItemsApiUtil.fetchAllMenuItems().then((menuItems) =>
		dispatch(receiveAllMenuItems(menuItems))
	);

export const fetchMeal = (mealId) => (dispatch) =>
	MealsApiUtil.fetchMeal(mealId).then((meal) => dispatch(receiveMeal(meal)));
