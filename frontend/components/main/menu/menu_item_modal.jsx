import React from "react";

const MenuItemModal = ({ meal, id }) => {
  return (
    <div className="modal">
      <h3>{meal.name}</h3>
      <img className="recipe-index-img" src={meal.imageUrl} />
      <p>{meal.restaurant}</p>
    </div>
  );
};

export default MenuItemModal;
