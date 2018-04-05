import React from 'react';
import { connect } from 'redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
	logout: (formUser) => dispatch(logout(formUser)),
});

export default connect(null, mapDispatchToProps)(NavBar);
