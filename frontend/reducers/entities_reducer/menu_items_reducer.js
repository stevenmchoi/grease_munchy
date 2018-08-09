import { RECEIVE_ALL_MENU_ITEMS } from "../../actions/menu_items_actions";
import merge from "lodash/merge";

const menuItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_MENU_ITEMS:
            return merge(newState.menuItems, action.menuItems);
        default:
            return oldState;
    }
};

export default menuItemsReducer;