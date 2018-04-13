import React from 'react';
import { Link } from 'react-router-dom';

const RecipeShow = ({ meal, mealId, fetchMeal }) => {
	if (!meal || meal.instructions === undefined) {
		fetchMeal(mealId);
		return null;
	} else {
		return (
			<div className="recipe-show">
				<Link className="back-link" to="/recipes">
					{'<'}
				</Link>

				<ul className="recipe-overview">
					<h3 className="title">{meal.name}</h3>
					<li>Restaurant: {meal.restaurant}</li>
					<li>Description: {meal.description}</li>
					<li>Servings: {meal.servings}</li>
				</ul>

				<img className="recipe-img" src={meal.imageUrl} />

				<ul>
					<li>Ingredients: {meal.ingredients}</li>
					<li>Instructions: {meal.instructions}</li>
				</ul>
			</div>
		);
	}
};

export default RecipeShow;
