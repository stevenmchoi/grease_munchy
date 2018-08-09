import * as MealsApiUtil from "../util/menu_items_api_util";

export const RECEIVE_ALL_MENU_ITEMS = "RECEIVE_ALL_MENU_ITEMS";

const receiveAllMenuItems = menuItems => ({
    type: RECEIVE_ALL_MENU_ITEMS,
    menuItems
});

export const fetchAllMenuItems = () => dispatch =>
    MealsApiUtil.fetchAllMenuItems().then(
        menuItems => dispatch(receiveAllMenuItems(menuItems))
    );