import React from "react";
import Fade from "react-reveal/Fade";
import MenuItemModal from "./menu_item_modal";

const MenuIndex = ({
  meals,
  menuItems,
  numMenuItems,
  fetchMeal,
  fetchAllMenuItems
}) => {
  if (menuItems.length <= numMenuItems) {
    fetchAllMenuItems();
    return null;
  } else {
    return (
      <Fade right cascade>
        {menuItems.map(menuItemsByWeek => {
          let menuWeekItems = Object.values(menuItemsByWeek);
          let numMenuWeek = menuWeekItems.length;
          let weekOf = menuWeekItems[0].date;

          return (
            <ul className="menu-week" key={`week-${weekOf}`}>
              <h1>Week of {weekOf}</h1>
              <ul className="menu-list" key={`menu-on-${weekOf}`}>
                {menuWeekItems.map(menuItem => {
                  const meal = meals[menuItem.meal_id];

                  if (!meals[menuItem.meal_id]) {
                    fetchMeal(menuItem.meal_id);
                    return null;
                  } else {
                    return (
                      <li key={`menu-item-${menuItem.meal_id}`}>
                        <MenuItemModal meal={meal} id={menuItem.meal_id} />
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
};

export default MenuIndex;
