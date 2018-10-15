import React, { Component } from 'react';

class RecipeShow extends Component {
	constructor(props) {
		super(props);
		this.renderBackButton = this.renderBackButton.bind(this);
	}

	componentDidMount() {
		this.props.fetchMeal(this.props.mealId);
	}

	renderBackButton() {
		if (this.props.location.state) {
			return (
				<button className="back-button" onClick={this.props.history.goBack}>
					{'<'}
				</button>
			);
		}
	}

	render() {
		const meal = this.props.meal;

		if (!meal || meal.instructions === undefined) {
			this.props.fetchMeal(this.props.mealId);
			return null;
		} else {
			return (
				<div className="recipe-show">
					{this.renderBackButton()}

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

						{meal.ingredients.map((ingredient, idx) => (
							<li key={`ingredient-${idx}`}>{ingredient}</li>
						))}
					</ul>

					<ol className="recipe-instructions">
						<strong>Instructions:</strong>

						{meal.instructions.map((instruction, idx) => (
							<li key={`instruction-${idx}`}>{instruction}</li>
						))}
					</ol>
				</div>
			);
		}
	}
}

export default RecipeShow;
