import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import RecipeModal from './recipe_modal';

class RecipesIndex extends React.Component {
	componentDidMount() {
		if (this.props.meals.length == 0) {
			this.props.fetchAllMeals();
		}
	}

	render() {
		const meals = this.props.meals;

		return (
			// <Slide bottom cascade>
			<ul className="recipes-list">
				{meals.map((meal, idx) => (
					<RecipeModal key={`recipe-${idx}`} meal={meal} idx={idx} />
				))}
			</ul>
			// </Slide>
		);
	}
}

export default RecipesIndex;
