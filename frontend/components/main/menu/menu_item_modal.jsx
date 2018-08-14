import React from "react";

const MenuItemModal = ({ currentUser, meal, meal_id }) => {
  console.log(currentUser);

  return currentUser ? (
      <button className="modal">
        <h3>{meal.name}</h3>
        <img className="recipe-index-img" src={meal.imageUrl} />
        <p>{meal.restaurant}</p>
      </button>
    // <button>
    //   <div className="modal">
    //     <h3>{meal.name}</h3>
    //     <img className="recipe-index-img" src={meal.imageUrl} />
    //     <p>{meal.restaurant}</p>
    //   </div>
    // </button>
  ) : (
    <div className="modal">
      <h3>{meal.name}</h3>
      <img className="recipe-index-img" src={meal.imageUrl} />
      <p>{meal.restaurant}</p>
    </div>
  );
};

export default MenuItemModal;
