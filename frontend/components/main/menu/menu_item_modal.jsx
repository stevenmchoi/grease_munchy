import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		console.log('MenuItemModal props: ', props);

		this.state = {};

		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidMount() {
	// 	this.props.fetchMeal(1);
	// }

	handleClick(menu_item_id) {
		if (this.props.currentUser) {
			const user_id = this.props.currentUser.id;

			return (e) => {
				console.log('this.props.currentUser:');
				console.log(this.props.currentUser);

				e.preventDefault();

				console.log(this.props.createMealOrder({ user_id, menu_item_id }));
			};
		} else {
			this.props.history.push('/login');
		}
	}

	render() {
		const menuItemId = this.props.menuItem.id;
		const meal = this.props.meal;

		if (meal) {
			return (
				<div className="menu-modal">
					<h3>{meal.name}</h3>

					<img className="recipe-index-img" src={meal.imageUrl} />

					<p>{meal.restaurant}</p>

					<div className="modal-buttons">
						<button className="add-remove-button" onClick={this.handleClick(menuItemId)}>
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
