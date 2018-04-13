import { connect } from 'react-redux';
import {
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
} from '../../../../actions/meal_orders_actions';
import CreateMealPlan from './create_meal_plan';

const mapStateToProps = ({ entities: { mealOrder } }) => ({
	mealOrder,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMealOrders: () => dispatch(fetchMealOrders()),
	createMealOrder: (newMealOrder) => dispatch(createMealOrder(newMealOrder)),
	deleteMealOrder: (mealOrderId) => dispatch(deleteMealOrder(mealOrderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMealPlan);
