import React from 'react';
import { Link } from 'react-router-dom';

const RecipeModal = ({ meal, idx }) => {
	return (
		<Link to={`/recipes/${meal.name}`}>
			<li className="recipe-modal">
				{meal.name}
				<video
					className="index-video"
					preload="auto"
					autoPlay
					loop
					src={meal.imageUrl}
					type="video/webm"
				/>
			</li>
		</Link>
	);
};

export default RecipeModal;
