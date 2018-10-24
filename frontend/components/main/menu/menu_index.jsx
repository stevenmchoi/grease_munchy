import React, { Component } from 'react';
// import MenuItemModal from './menu_item_modal';
import MenuItemModalContainer from './menu_item_modal_container';

class MenuIndex extends Component {
	componentDidMount() {
		this.props.fetchAllMeals();
		this.props.fetchAllMenuItems();
	}

	render() {
		const menuItems = this.props.menuItems;
		const meals = this.props.meals;

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
									<MenuItemModalContainer meal={meals[menuItem.meal_id]} menuItemId={menuItem.id} />
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
