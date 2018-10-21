import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		console.log('MenuItemModal props: ', props);

		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidMount() {
	// 	this.props.fetchMeal(1);
	// }

	handleClick(menuItemId) {
		if (this.props.currentUser) {
			const userId = this.props.currentUser.id;

			return (e) => {
				e.preventDefault();

				this.props.createMealOrder({ userId, menuItemId });
			};
		} else {
			this.props.history.push('/login');
		}
	}

	render() {
		if (this.props.menuItems && this.props.meals && this.props.meals[this.props.mealId]) {
			const meal = this.props.meals[this.props.mealId];
			const menuItemId = this.props.menuItems.id;

			return (
				<div className="menu-modal">
					<h3>{meal.name}</h3>

					<img className="recipe-index-img" src={meal.imageUrl} />

					<p>{meal.restaurant}</p>

					<div className="modal-buttons">
						<button className="add-remove-button" onClick={() => this.handleClick(menuItemId)}>
							<p>Add / Remove</p>
						</button>

						<Link
							className="details-button"
							to={{
								pathname: `/recipes/${meal.name}-${meal.id}`,
								state: { hash: location.hash },
							}}
						>
							<p>Details</p>
						</Link>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default withRouter(MenuItemModal);
