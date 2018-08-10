import {
    RECEIVE_ALL_MENU_ITEMS,
    // RECEIVE_MEAL
} from "../../actions/menu_items_actions";
import merge from "lodash/merge";

const menuItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    console.log("newState", newState);
    console.log("menuItems", newState.menuItems);
    console.log("meals", newState.meals);

    switch (action.type) {
        case RECEIVE_ALL_MENU_ITEMS:
            return merge(newState.menuItems, action.menuItems);
            // case RECEIVE_MEAL:
            //     const meal = action.meal;
            //     newState.meals[meal.id] = meal;
            //     return newState;
        default:
            return oldState;
    }
};

export default menuItemsReducer;