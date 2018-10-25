import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMeal } from '../../../actions/meals_actions';
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from '../../../actions/meal_orders_actions';
import MenuModal from './menu_item_modal';

const mapStateToProps = ({ entities: { mealOrders }, session: { currentUser } }, ownProps) => ({
	currentUser,
	mealOrders,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
	fetchMealOrders: () => dispatch(fetchMealOrders()),
	createMealOrder: (mealOrder) => dispatch(createMealOrder(mealOrder)),
	deleteMealOrder: (mealOrderId) => dispatch(deleteMealOrder(mealOrderId)),
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(MenuModal)
);
