import { combineReducers } from "redux";
import mealsReducer from "./meals_reducer";
import mealOrdersReducer from "./meal_orders_reducer";

const entitiesReducer = combineReducers({
	meals: mealsReducer,
	mealOrders: mealOrdersReducer,
});

export default entitiesReducer;
