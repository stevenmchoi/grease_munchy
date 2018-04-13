import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import RecipeModal from './recipe_modal';

class RecipesIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { meals, numMeals, ownProps, fetchAllMeals } = this.props;

		if (meals.length <= numMeals) {
			fetchAllMeals();
		}

		return (
			<Fade bottom cascade>
				<ul className="recipes-list">
					{meals.map((meal) => (
						<li key={`recipe-${meal.id}`}>
							<RecipeModal meal={meal} id={meal.id} />
						</li>
					))}
				</ul>
			</Fade>
		);
	}
}

export default RecipesIndex;
