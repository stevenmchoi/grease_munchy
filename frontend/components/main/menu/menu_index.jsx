import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenuItemModal from './menu_item_modal';

class MenuIndex extends Component {
	componentDidMount() {
		this.props.fetchAllMenuItems();
		// this.props.fetchAllMeals();
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');

		console.log('this.props.menuItems:');
		console.log(this.props.menuItems);

		// console.log('this.props.meals:');
		// console.log(this.props.meals);
	}

	render() {
		if (this.props.menuItems) {
			return this.props.menuItems.map((menuItemsByWeek) => {
				console.log('menuItemsByWeek:');
				console.log(menuItemsByWeek);

				let menuWeekItems = Object.values(menuItemsByWeek);
				let numMenuWeek = menuWeekItems.length;
				let weekOf = menuWeekItems[0].date;

				return (
					<ul className="menu-week" key={`week-${weekOf}`}>
						<h1>Week of {weekOf}</h1>

						<ul className="menu-list" key={`menu-on-${weekOf}`}>
							{menuWeekItems.map((menuItem) => {
								console.log('menuItem:');
								console.log(menuItem);

								return (
									<li key={`menu-item-${menuItem.id}`}>
										<MenuItemModal
											menuItem={menuItem}
											mealId={menuItem.meal_id}
											fetchMeal={this.props.fetchMeal}
											fetchMealOrders={this.props.fetchMealOrders}
											createMealOrder={this.props.createMealOrder}
											deleteMealOrder={this.props.deleteMealOrder}
											currentUser={this.props.currentUser}
											meals={this.props.meals}
											menuItem={this.props.menuItem}
										/>
									</li>
								);
							})}
						</ul>
					</ul>
				);
			});
		} else {
			return null;
		}
	}
}

export default withRouter(MenuIndex);
