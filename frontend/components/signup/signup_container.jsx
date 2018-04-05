import React from 'react';
import { connect } from 'redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup';

const mapDispatchToProps = (dispatch) => ({
	signup: (formUser) => dispatch(signup(formUser)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
