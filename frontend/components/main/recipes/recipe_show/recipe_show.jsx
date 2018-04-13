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
					<li className="restaurant">
						<strong>Restaurant:</strong> {meal.restaurant}
					</li>
					<li className="servings">
						<strong>Servings:</strong> {meal.servings}
					</li>
					<li className="description">
						<strong>Description:</strong> {meal.description}
					</li>
				</ul>

				<img className="recipe-img" src={meal.imageUrl} />

				<ul className="recipe-ingredients">
					<strong>Ingredients:</strong>
					{meal.ingredients.map((ingredient) => (
						<li>{ingredient}</li>
					))}
				</ul>

				<ol className="recipe-instructions">
					<strong>Instructions:</strong>
					{meal.instructions.map((instruction) => (
						<li>{instruction}</li>
					))}
				</ol>
			</div>
		);
	}
};

export default RecipeShow;
