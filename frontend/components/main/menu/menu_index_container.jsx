import React from "react";
import { connect } from "react-redux";
import { fetchAllMenuItems } from "../../../actions/menu_items_actions";
import { fetchMeal } from "../../../actions/meals_actions";
import {
  fetchMealOrders,
  createMealOrder,
  deleteMealOrder
} from "../../../actions/meal_orders_actions";
import MenuIndex from "./menu_index";

const mapStateToProps = (
  { entities: { menuItems, meals }, session: { currentUser } },
  ownProps
) => ({
  currentUser,
  meals,
  menuItems: Object.values(menuItems),
  numMenuItems: fetchAllMenuItems().length
});

const mapDispatchToProps = dispatch => ({
  fetchMeal: mealId => dispatch(fetchMeal(mealId)),
  fetchAllMenuItems: () => dispatch(fetchAllMenuItems()),
  fetchMealOrders: () => dispatch(fetchMealOrders()),
  createMealOrder: meal_order => dispatch(createMealOrder(meal_order)),
  deleteMealOrder: mealOrderId => dispatch(deleteMealOrder(mealOrderId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuIndex);
