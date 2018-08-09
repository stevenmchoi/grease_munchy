import { combineReducers } from "redux";
import mealsReducer from "./meals_reducer";
import mealOrdersReducer from "./meal_orders_reducer";
import menuItemsReducer from "./menu_items_reducer";

const entitiesReducer = combineReducers({
	meals: mealsReducer,
	mealOrders: mealOrdersReducer,
	menuItems: menuItemsReducer
});

export default entitiesReducer;
