import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		this.fetchMealOrders = props.fetchMealOrders;
		this.createMealOrder = props.createMealOrder;
		this.deleteMealOrder = props.deleteMealOrder;
		this.currentUser = props.currentUser;
		this.meal = props.meal;
		this.menuItem = props.menuItem;

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(menuItemId) {
		console.log('menuItemId:');
		console.log(menuItemId);

		if (this.currentUser) {
			const userId = this.currentUser.id;
			console.log('userId:');
			console.log(userId);

			return (e) => {
				e.preventDefault();

				this.createMealOrder({ userId, menuItemId });
			};
		} else {
			this.props.history.push('/login');
		}
	}

	render() {
		console.log('this.props.history:');
		console.log(this.props.history);

		const menuItemId = this.menuItem.id;

		return (
			<div className="menu-modal">
				<h3>{this.meal.name}</h3>

				<img className="recipe-index-img" src={this.meal.imageUrl} />

				<p>{this.meal.restaurant}</p>

				<div className="modal-buttons">
					<button className="add-remove-button" onClick={() => this.handleClick(menuItemId)}>
						<p>Add / Remove</p>
					</button>

					<Link
						className="details-button"
						to={{
							pathname: `/recipes/${this.meal.name}-${this.meal.id}`,
							state: { hash: location.hash },
						}}
					>
						<p>Details</p>
					</Link>
				</div>
			</div>
		);
	}

	// return currentUser ? (
	// 	<button
	// 		className="modal"
	// 		onClick={handleClick(createMealOrder, menuItem.id, currentUser.id)}>
	// 		<h3>{meal.name}</h3>
	// 		<img className="recipe-index-img" src={meal.imageUrl} />
	// 		<p>{meal.restaurant}</p>
	// 	</button>
	// ) : (
	// 	<div className="modal">
	// 		<h3>{meal.name}</h3>
	// 		<img className="recipe-index-img" src={meal.imageUrl} />
	// 		<p>{meal.restaurant}</p>
	// 	</div>
	// );
}

export default MenuItemModal;
