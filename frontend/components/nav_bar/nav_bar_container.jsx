import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { clearMealOrders } from '../../actions/meal_orders_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
	currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	logout: (formUser) => dispatch(logout(formUser)),
	clearMealOrders: (mealOrders) => dispatch(clearMealOrders(mealOrders)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);
