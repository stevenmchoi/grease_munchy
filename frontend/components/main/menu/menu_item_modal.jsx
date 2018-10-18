import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(menuItemId) {
		console.log('menuItemId:');
		console.log(menuItemId);

		if (this.props.currentUser) {
			const userId = this.props.currentUser.id;
			console.log('userId:');
			console.log(userId);

			return (e) => {
				e.preventDefault();

				this.props.createMealOrder({ userId, menuItemId });
			};
		} else {
			this.props.history.push('/login');
		}
	}

	render() {
		console.log('this.props.history:');
		console.log(this.props.history);

		const menuItemId = this.props.menuItem.id;

		return (
			<div className="menu-modal">
				<h3>{this.props.meal.name}</h3>

				<img className="recipe-index-img" src={this.props.meal.imageUrl} />

				<p>{this.props.meal.restaurant}</p>

				<div className="modal-buttons">
					<button className="add-remove-button" onClick={() => this.handleClick(menuItemId)}>
						<p>Add / Remove</p>
					</button>

					<Link
						className="details-button"
						to={{
							pathname: `/recipes/${this.props.meal.name}-${this.props.meal.id}`,
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
	// 		onClick={handleClick(createMealOrder, props.menuItem.id, currentUser.id)}>
	// 		<h3>{props.meal.name}</h3>
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
