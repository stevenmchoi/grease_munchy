import { connect } from 'react-redux';
import RecipeShow from './recipe_show';
import { fetchMeal } from '../../../../actions/meals_actions';

const mapStateToProps = ({ entities: { meals } }, ownProps) => {
	const mealId = ownProps.match.params.recipeNameId.match(/\d+/)[0];
	return {
		meal: meals[mealId],
		mealId,
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
