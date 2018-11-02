import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import RecipeModal from './recipe_modal';

// TODO: Add live search bar
class RecipesIndex extends Component {
	componentDidMount() {
		this.props.fetchAllMeals();
	}

	render() {
		const meals = this.props.meals;

		return (
			<Fade bottom cascade>
				<div className="spacer-behind-nav" />

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
