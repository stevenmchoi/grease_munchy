import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from "lodash/merge";

const sessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze();
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return oldState;
  }
};

export default sessionReducer;
