import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import MenuItemModal from './menu_item_modal';

class MenuIndex extends Component {
	componentDidMount() {
		this.props.fetchAllMenuItems();
	}

	render() {
		return this.props.menuItems.map((menuItemsByWeek) => {
			let menuWeekItems = Object.values(menuItemsByWeek);
			let numMenuWeek = menuWeekItems.length;
			let weekOf = menuWeekItems[0].date;

			return (
				<ul className="menu-week" key={`week-${weekOf}`}>
					<h1>Week of {weekOf}</h1>

					<ul className="menu-list" key={`menu-on-${weekOf}`}>
						{menuWeekItems.map((menuItem) => {
							const meal = this.props.meals[menuItem.meal_id];

							if (!this.props.meals[menuItem.meal_id]) {
								this.props.fetchMeal(menuItem.meal_id);

								return null;
							} else {
								return (
									<li key={`menu-item-${menuItem.meal_id}`}>
										<MenuItemModal
											fetchMealOrders={this.props.fetchMealOrders}
											createMealOrder={this.props.createMealOrder}
											deleteMealOrder={this.props.deleteMealOrder}
											currentUser={this.props.currentUser}
											meal={this.props.meal}
											menuItem={this.props.menuItem}
										/>
									</li>
								);
							}
						})}
					</ul>
				</ul>
			);
		});
	}
}

export default MenuIndex;
