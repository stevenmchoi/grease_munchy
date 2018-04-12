import React from 'react';
import { Link } from 'react-router-dom';

const RecipeModal = ({ meal, idx }) => {
	return (
		<Link className="recipe-modal-link" to={`/recipes/${meal.name}`}>
			<li className="recipe-modal">
				<h3>{meal.name}</h3>
				<img className="recipe-img" src={meal.imageUrl} />
				<p>{meal.restaurant}</p>
			</li>
		</Link>
	);
};

export default RecipeModal;
