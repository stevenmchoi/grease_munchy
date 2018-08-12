import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import RecipeModal from "../recipes/recipes_index/recipe_modal";

const MenuIndex = ({
  menuItems,
  numMenuItems,
  fetchMeal,
  fetchAllMenuItems
}) => {
  if (menuItems.length <= numMenuItems) {
    fetchAllMenuItems();
    return null;
  } else {
    console.log("menuItems: ");
    console.log(menuItems);

    return (
      <Fade bottom cascade>
        {menuItems.map(menuItemsByWeek => {
          let menuWeekItems = Object.values(menuItemsByWeek);
          let weekOf = menuWeekItems[0].date;
          console.log("weekOf: ", weekOf);
          console.log("menuWeekItems: ", menuWeekItems);

          return (
            <ul>
              <h1>Week of {weekOf}</h1>
              <ul className="menu-list">
                {
                  //menuItemsByWeek.map(menuItem => {
                  // let meal = fetchMeal(menuItem.meal_id);
                  // return (
                  //   <li key={`meal-${menuItem.meal_id}`}>
                  //     <RecipeModal meal={meal} id={menuItem.meal_id} />
                  //   </li>
                  // );
                  // })
                }
              </ul>
            </ul>
          );
        })}
      </Fade>
    );
  }
};

export default MenuIndex;
