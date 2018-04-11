import React from 'react';
import Slide from 'react-reveal/Slide';

// Might be good enough just to be a functional component
class RecipesIndex extends React.Component {
	componentDidMount() {
		this.props.fetchAllMeals();
	}

	render() {
		const meals = this.props.meals;
		console.log(meals);

		return (
			<div>
				<Slide>
					<ul className="recipes-list">
						{meals.map((meal, idx) => (
							<li key={`recipe-${idx}`}>{meal.name}</li>
						))}
					</ul>
				</Slide>
			</div>
		);
	}
}

// import RecipeShowContainer from '../recipe_show/recipe_container';
// {
// 	/* <Route path="/recipes/:recipeId" component={RecipeShowContainer} />; */
// }

export default RecipesIndex;
