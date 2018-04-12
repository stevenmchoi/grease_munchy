import { connect } from 'react-redux';
import RecipeShow from './recipe_show';
import { fetchMeal } from '../../../../actions/meals_actions';

const mapStateToProps = ({ entities: { meals } }) => ({
	meals,
	// meal: meals[] // TODO: see if I can get the meal here
});

const mapDispatchToProps = (dispatch) => ({
	fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
