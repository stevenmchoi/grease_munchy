import { connect } from 'react-redux';
import { fetchAllMenuItems } from '../../../actions/menu_items_actions';
import { fetchMeal, fetchAllMeals } from '../../../actions/meals_actions';
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from '../../../actions/meal_orders_actions';
import MenuModal from './menu_item_modal';

const mapStateToProps = (
	{ entities: { menuItems, meals }, session: { currentUser } },
	ownProps
) => ({
	currentUser,
	meals,
	menuItems: Object.values(menuItems),
	numMenuItems: fetchAllMenuItems().length,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
	fetchAllMeals: () => dispatch(fetchAllMeals()),
	fetchAllMenuItems: () => dispatch(fetchAllMenuItems()),
	createMealOrder: (mealOrder) => dispatch(createMealOrder(mealOrder)),
	deleteMealOrder: (mealOrderId) => dispatch(deleteMealOrder(mealOrderId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuModal);
