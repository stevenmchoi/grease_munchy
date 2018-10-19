import { connect } from 'react-redux';
import { fetchAllMenuItems } from '../../../actions/menu_items_actions';
import { fetchMeal, fetchAllMeals } from '../../../actions/meals_actions';
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from '../../../actions/meal_orders_actions';
import MenuIndex from './menu_index';

const mapStateToProps = (
	{ entities: { menuItems, meals }, session: { currentUser } },
	ownProps
) => ({
	currentUser,
	meals,
	menuItems: Object.values(menuItems),
});

const mapDispatchToProps = (dispatch) => ({
	fetchAllMeals: () => dispatch(fetchAllMeals()),
	fetchAllMenuItems: () => dispatch(fetchAllMenuItems()),
	fetchMealOrders: () => dispatch(fetchMealOrders()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuIndex);
