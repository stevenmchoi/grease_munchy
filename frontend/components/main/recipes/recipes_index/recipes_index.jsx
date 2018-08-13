import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import RecipeModal from "./recipe_modal";

const RecipesIndex = ({ meals, numMeals, fetchAllMeals }) => {
  console.log("meals.length:");
  console.log(meals.length);
  console.log("numMeals");
  console.log(numMeals);
  console.log("meals.length <= numMeals");
  console.log(meals.length <= numMeals);

  // TODO: Add live search bar
  // TODO: When loading from "On The Menu", fetch remaining meals
  if (meals.length <= numMeals) {
    fetchAllMeals();
    return null;
  } else {
    return (
      // TODO: 
      <Fade bottom cascade>
        <ul className="recipes-list">
          {meals.map(meal => (
            <li key={`recipe-${meal.id}`}>
              <RecipeModal meal={meal} id={meal.id} />
            </li>
          ))}
        </ul>
      </Fade>
    );
  }
};

export default RecipesIndex;
