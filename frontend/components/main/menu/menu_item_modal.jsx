import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MenuItemModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ordered: !!this.props.mealOrder,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidMount() {
	// 	this.props.fetchMeal(1);
	// }

	handleClick(menu_item_id) {
		return (e) => {
			e.preventDefault();

			if (this.props.currentUser) {
				const user_id = this.props.currentUser.id;

				if (this.state.ordered) {
					this.props.deleteMealOrder(this.props.mealOrder.id);
				} else {
					this.props.createMealOrder({ user_id, menu_item_id });
				}

				this.setState({ ordered: !!this.state.ordered });
			} else {
				this.props.history.push('/login');
			}
		};
	}

	render() {
		const menuItemId = this.props.menuItem.id;
		const meal = this.props.meal;
		const orderedClassBool = this.state.ordered ? ' ordered' : '';

		if (meal) {
			return (
				<div className={`menu-modal${orderedClassBool}`}>
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
