import React, { Component } from 'react';
import MenuItemModal from './menu_item_modal';

class MenuIndex extends Component {
	componentDidMount() {
		this.props.fetchAllMeals();
		this.props.fetchAllMenuItems();

		if (this.props.currentUser) {
			this.props.fetchMealOrders();
		}
	}

	render() {
		const menuItems = this.props.menuItems;
		const meals = this.props.meals;
		const mealOrders = this.props.mealOrders;

		if (Object.keys(menuItems).length !== 0 && Object.keys(meals).length !== 0) {
			return menuItems.map((menuItemsByWeek) => {
				let menuWeekItems = Object.values(menuItemsByWeek);
				let weekOf = menuWeekItems[0].date;

				return (
					<ul className="menu-week" key={`week-${weekOf}`}>
						<h1>Week of {weekOf}</h1>

						<ul className="menu-list" key={`menu-on-${weekOf}`}>
							{menuWeekItems.map((menuItem) => (
								<li key={`menu-item-${menuItem.id}`}>
									<MenuItemModal
										currentUser={this.props.currentUser}
										menuItem={menuItem}
										meal={meals[menuItem.meal_id]}
										createMealOrder={this.props.createMealOrder}
										deleteMealOrder={this.props.deleteMealOrder}
									/>
								</li>
							))}
						</ul>
					</ul>
				);
			});
		} else {
			return null;
		}
	}
}

export default MenuIndex;
