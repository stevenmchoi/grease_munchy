import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errorsArr => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errorsArr
});

export const signup = user => dispatch =>
  SessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errorsArr => dispatch(receiveErrors(errorsArr))
  );

export const login = user => dispatch =>
  SessionApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errorsArr => dispatch(receiveErrors(errorsArr))
  );

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(
    user => dispatch(receiveCurrentUser(null)),
    errorsArr => dispatch(receiveErrors(errorsArr))
  );
