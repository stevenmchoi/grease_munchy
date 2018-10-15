import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
	currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	logout: (formUser) => dispatch(logout(formUser)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);
