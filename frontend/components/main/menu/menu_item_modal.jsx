import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		console.log('props: ', props);

		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidMount() {
	// 	this.props.fetchMeal(1);
	// }

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
		// console.log('this.props.history:');
		// console.log(this.props.history);

		// console.log('this.props.menuItems:');
		// console.log(this.props.menuItems);

		if (this.props.menuItems && this.props.meals) {
			const meal = this.props.meals[this.props.mealId];

			console.log('meal:', meal);

			// const menuItemId = this.props.menuItems.id;

			return (
				<div className="menu-modal">
					<h3>{meal.name}</h3>

					<img className="recipe-index-img" src={meal.imageUrl} />

					<p>{meal.restaurant}</p>

					<div className="modal-buttons">
						<button className="add-remove-button">
							<p>Add / Remove</p>
						</button>
						{/* <button className="add-remove-button" onClick={() => this.handleClick(menuItemId)}>
						<p>Add / Remove</p>
					</button> */}

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

	// return currentUser ? (
	// 	<button
	// 		className="modal"
	// 		onClick={handleClick(createMealOrder, props.menuItems.id, currentUser.id)}>
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

export default withRouter(MenuItemModal);
