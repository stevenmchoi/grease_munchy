import { connect } from "react-redux";
import { fetchAllMeals } from "../../../../actions/meals_actions";
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from "../../../../actions/meal_orders_actions";
import CreateMealPlan from "./create_meal_plan";

const mapStateToProps = ({ entities: { mealOrders, meals } }) => ({
	mealOrders,
	meals,
});

const mapDispatchToProps = dispatch => ({
	fetchAllMeals: () => dispatch(fetchAllMeals()),

	fetchMealOrders: () => dispatch(fetchMealOrders()),
	createMealOrder: newMealOrder => dispatch(createMealOrder(newMealOrder)),
	deleteMealOrder: mealOrderId => dispatch(deleteMealOrder(mealOrderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMealPlan);
