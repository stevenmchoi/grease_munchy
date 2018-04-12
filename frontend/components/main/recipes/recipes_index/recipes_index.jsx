import React from 'react';
import Fade from 'react-reveal/Fade';

class RecipesIndex extends React.Component {
	componentDidMount() {
		this.props.fetchAllMeals();
	}

	render() {
		const meals = this.props.meals;
		console.log(meals);

		return (
			<div>
				<Fade bottom cascade>
					<ul className="recipes-list">
						{meals.map((meal, idx) => (
							<li className="recipe-modal" key={`recipe-${idx}`}>
								{meal.name}
							</li>
						))}
					</ul>
				</Fade>
			</div>
		);
	}
}

// import RecipeShowContainer from '../recipe_show/recipe_container';
// {
// 	/* <Route path="/recipes/:recipeId" component={RecipeShowContainer} />; */
// }

export default RecipesIndex;
