import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
	type: RECEIVE_CURRENT_USER,
	currentUser,
});

const receiveErrors = (errors) => ({
	type: RECEIVE_SESSION_ERRORS,
	errors,
});

export const signup = (newUser) => (dispatch) =>
	SessionApiUtil.signup(newUser).then(
		(user) => dispatch(receiveCurrentUser(user)),
		(errors) => dispatch(receiveErrors(errors.responseJSON))
	);

export const login = (existingUser) => (dispatch) =>
	SessionApiUtil.login(existingUser).then(
		(user) => dispatch(receiveCurrentUser(user)),
		(errors) => dispatch(receiveErrors(errors.responseJSON))
	);

export const logout = () => (dispatch) =>
	SessionApiUtil.logout().then(
		(user) => dispatch(receiveCurrentUser(null)),
		(errors) => dispatch(receiveErrors(errors.responseJSON))
	);
