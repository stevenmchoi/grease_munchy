import React, { Component } from 'react';
import MenuItemModalContainer from './menu_item_modal_container';
import Loading from '../loading';

class MenuIndex extends Component {
	componentDidMount() {
		this.props.fetchMealOrders().then(() => {
			this.props.fetchAllMenuItems();
		});
	}

	render() {
		const meals = this.props.meals;
		const menuItems = this.props.menuItems;

		let loading;

		if (
			Object.keys(menuItems).length === 0 ||
			Object.keys(meals).length === 0
		) {
			loading = <Loading />;
		}

		return (
			<div>
				{loading}

				<div className="spacer-behind-nav" />

				{menuItems.map((menuItemsByWeek) => {
					let menuWeekItems = Object.values(menuItemsByWeek);
					let weekOf = menuWeekItems[0].date;

					return (
						<ul className="menu-week" key={`week-${weekOf}`}>
							<h1>Week of {weekOf}</h1>

							<ul className="menu-list" key={`menu-on-${weekOf}`}>
								{menuWeekItems.map((menuItem) => (
									<li key={`menu-item-${menuItem.id}`}>
										<MenuItemModalContainer
											mealId={menuItem.meal_id}
											menuItemId={menuItem.id}
										/>
									</li>
								))}
							</ul>
						</ul>
					);
				})}
			</div>
		);
	}
}

export default MenuIndex;
