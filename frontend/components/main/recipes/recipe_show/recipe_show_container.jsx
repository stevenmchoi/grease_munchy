import { connect } from 'react-redux';
import RecipeShow from './recipe_show';
import { fetchMeal } from '../../../../actions/meals_actions';

const mapDispatchToProps = (dispatch) => ({
	fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
});

export default connect(null)(RecipeShow);
