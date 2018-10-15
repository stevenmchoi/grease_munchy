import React from 'react';
import Fade from 'react-reveal/Fade';
import MenuItemModal from './menu_item_modal';

class MenuIndex extends Component {
	constructor(props) {
		super(props);

		this.currentUser = props.currentUser;
		this.meals = props.meals;
		this.menuItems = props.menuItems;
		this.numMenuItems = props.numMenuItems;
		this.fetchMeal = props.fetchMeal;
		this.fetchAllMenuItems = props.fetchAllMenuItems;
		this.fetchMealOrders = props.fetchMealOrders;
		this.createMealOrder = props.createMealOrder;
		this.deleteMealOrder = props.deleteMealOrder;
	}

	render() {
		if (menuItems.length <= numMenuItems) {
			fetchAllMenuItems();
			return null;
		} else {
			return (
				<Fade right cascade>
					{menuItems.map((menuItemsByWeek) => {
						let menuWeekItems = Object.values(menuItemsByWeek);
						let numMenuWeek = menuWeekItems.length;
						let weekOf = menuWeekItems[0].date;

						return (
							<ul className="menu-week" key={`week-${weekOf}`}>
								<h1>Week of {weekOf}</h1>

								<ul className="menu-list" key={`menu-on-${weekOf}`}>
									{menuWeekItems.map((menuItem) => {
										const meal = meals[menuItem.meal_id];

										if (!meals[menuItem.meal_id]) {
											fetchMeal(menuItem.meal_id);
											return null;
										} else {
											return (
												<li key={`menu-item-${menuItem.meal_id}`}>
													<MenuItemModal
														fetchMealOrders={this.fetchMealOrders}
														createMealOrder={this.createMealOrder}
														deleteMealOrder={this.deleteMealOrder}
														currentUser={this.currentUser}
														meal={this.meal}
														menuItem={this.menuItem}
													/>
												</li>
											);
										}
									})}
								</ul>
							</ul>
						);
					})}
				</Fade>
			);
		}
	}
}

export default MenuIndex;
