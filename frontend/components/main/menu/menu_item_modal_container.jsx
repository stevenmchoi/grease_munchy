import { connect } from 'react-redux';
import { fetchMeal } from '../../../actions/meals_actions';
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from '../../../actions/meal_orders_actions';
import MenuModal from './menu_item_modal';

const mapStateToProps = (
	{ entities: { meals, mealOrders }, session: { currentUser } },
	ownProps
) => ({
	currentUser,
	meals,
	mealOrders,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
	fetchMealOrders: () => dispatch(fetchMealOrders()),
	createMealOrder: (mealOrder) => dispatch(createMealOrder(mealOrder)),
	deleteMealOrder: (mealOrderId) => dispatch(deleteMealOrder(mealOrderId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuModal);
