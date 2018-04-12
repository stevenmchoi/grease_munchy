import React from 'react';
import { Link } from 'react-router-dom';

const RecipeModal = ({ meal, id }) => {
	return (
		<Link className="recipe-modal" to={`/recipes/${meal.name}-${id}`}>
			<h3>{meal.name}</h3>
			<img className="recipe-index-img" src={meal.imageUrl} />
			<p>{meal.restaurant}</p>
		</Link>
	);
};

export default RecipeModal;
