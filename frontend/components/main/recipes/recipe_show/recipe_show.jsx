import React from 'react';
import { Link } from 'react-router-dom';

const RecipeShow = ({ meal, mealId, fetchMeal }) => {
	if (!meal || meal.instructions === undefined) {
		fetchMeal(mealId);
		return null;
	} else {
		return (
			<div className="recipe-show">
				<Link to="/recipes">{`< Back`}</Link>

				<ul className="recipe">
					<h3>{meal.name}</h3>
					<li>Description: {meal.description}</li>
					<img className="recipe-img" src={meal.imageUrl} />
					<li>Restaurant: {meal.restaurant}</li>
					<li>Ingredients: {meal.ingredients}</li>
					<li>Instructions: {meal.instructions}</li>
					<li>Servings: {meal.servings}</li>
				</ul>
			</div>
		);
	}
};

export default RecipeShow;
