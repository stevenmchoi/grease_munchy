import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import RecipeModal from './recipe_modal';

const RecipesIndex = ({ meals, fetchAllMeals }) => {
	if (meals.length == 0) {
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
};

export default RecipesIndex;
