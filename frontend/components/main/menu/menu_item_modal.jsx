import React, { Component } from "react";
import { Link } from "react-router-dom";

function handleClick(createMealOrder, menu_item_id, user_id) {
	return e => {
		console.log(user_id);
		console.log(menu_item_id);
		createMealOrder({ user_id, menu_item_id });
	};
}

const MenuItemModal = ({
	fetchMealOrders,
	createMealOrder,
	deleteMealOrder,
	currentUser,
	meal,
	menuItem,
}) => {
	return (
		<div className="menu-modal">
			<h3>{meal.name}</h3>
			<img className="recipe-index-img" src={meal.imageUrl} />
			<p>{meal.restaurant}</p>
			<div className="modal-buttons">
				<button className="add-remove-button">
					<p>Add / Remove</p>
				</button>
				<Link
					className="details-button"
					to={`/recipes/${meal.name}-${meal.id}`}>
					<p>Details</p>
				</Link>
			</div>
		</div>
	);
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
};

class MenuItemModal2 extends Component {
	constructor() {
		super();
		this.createMealOrder = this.props.createMealOrder;
		this.deleteMealOrder = this.props.deleteMealOrder;
	}

	componentDidMount() {
		this.props.fetchMealOrders();
	}
}

export default MenuItemModal;
