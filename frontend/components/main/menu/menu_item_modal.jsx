import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		this.menuItemId = this.props.menuItemId;

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.props.fetchMeal(this.props.mealId);
	}

	handleClick(menu_item_id) {
		return (e) => {
			e.preventDefault();

			if (this.props.currentUser) {
				const user_id = this.props.currentUser.id;

				if (this.orderedBool) {
					this.props.deleteMealOrder(this.mealOrder.id).then(() => this.props.fetchMealOrders());
				} else {
					this.props
						.createMealOrder({ user_id, menu_item_id })
						.then(() => this.props.fetchMealOrders());
				}
			} else {
				this.props.history.push('/login');
			}
		};
	}

	render() {
		this.meal = this.props.meals[this.props.mealId];
		this.mealOrder = this.props.mealOrders[this.menuItemId];
		this.orderedBool = !!this.mealOrder;
		const orderedClass = this.orderedBool ? ' ordered' : '';

		if (this.meal) {
			return (
				<div className={`menu-modal${orderedClass}`}>
					<h3>{this.meal.name}</h3>

					<img className="recipe-index-img" src={this.meal.imageUrl} />

					<p>{this.meal.restaurant}</p>

					<div className="modal-buttons">
						<button className="add-remove-button" onClick={this.handleClick(this.menuItemId)}>
							<p>{this.orderedBool ? 'Remove' : 'Add'}</p>
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
		} else {
			return null;
		}
	}
}

export default withRouter(MenuItemModal);
