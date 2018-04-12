import React from 'react';
import { Link } from 'react-router-dom';

const RecipeModal = ({ meal, idx }) => {
	return (
		<Link to={`/recipes/${meal.name}`}>
			<li className="recipe-modal">
				{meal.name}
				<img className="recipe-img" src={meal.imageUrl} />
			</li>
		</Link>
	);
};

export default RecipeModal;
