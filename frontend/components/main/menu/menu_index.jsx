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
		if (this.props.menuItems && this.props.meals) {
			return this.props.menuItems.map((menuItemsByWeek) => {
				let menuWeekItems = Object.values(menuItemsByWeek);
				let weekOf = menuWeekItems[0].date;

				return (
					<ul className="menu-week" key={`week-${weekOf}`}>
						<h1>Week of {weekOf}</h1>

						<ul className="menu-list" key={`menu-on-${weekOf}`}>
							{menuWeekItems.map((menuItem) => (
								<li key={`menu-item-${menuItem.id}`}>
									<MenuItemModal
										menuItem={menuItem}
										mealId={menuItem.meal_id}
										menuItems={this.props.menuItems}
										meals={this.props.meals}
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
