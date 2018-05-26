import React from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/session_actions";
import LoginForm from "./login";

const mapStateToProps = ({ errors: { session } }) => ({
	session,
});

const mapDispatchToProps = dispatch => ({
	login: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
