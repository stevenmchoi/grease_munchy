import React, { Component } from "react";

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
		<div className="modal">
			<h3>{meal.name}</h3>
			<img className="recipe-index-img" src={meal.imageUrl} />
			<p>{meal.restaurant}</p>
			<div className="modal-buttons">
				<button>
					<p>Add / Remove</p>
				</button>
				<button>
					<p>Details</p>
				</button>
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
