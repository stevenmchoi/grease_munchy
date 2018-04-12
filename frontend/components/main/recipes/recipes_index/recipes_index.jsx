import React from 'react';
import Fade from 'react-reveal/Fade';
import RecipeModal from './recipe_modal';

class RecipesIndex extends React.Component {
	componentDidMount() {
		this.props.fetchAllMeals();
	}

	render() {
		const meals = this.props.meals;

		return (
			<div>
				<Fade bottom cascade>
					<ul className="recipes-list">
						{meals.map((meal, idx) => (
							<RecipeModal
								key={`recipe-${idx}`}
								meal={meal}
								idx={idx}
							/>
						))}
					</ul>
				</Fade>
			</div>
		);
	}
}

export default RecipesIndex;
