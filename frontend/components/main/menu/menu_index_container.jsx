import React from "react";
import { connect } from "react-redux";
import { fetchAllMenuItems } from "../../../actions/menu_items_actions";
import { fetchMeal } from "../../../actions/meals_actions";
import MenuIndex from "./menu_index";

const mapStateToProps = ({ entities: { menuItems } }, ownProps) => ({
    menuItems: Object.values(menuItems),
    numMenuItems: fetchAllMenuItems().length
});

const mapDispatchToProps = dispatch => ({
    fetchMeal: mealId => dispatch(fetchMeal(mealId)),
    fetchAllMenuItems: () => dispatch(fetchAllMenuItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuIndex);
