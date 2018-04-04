import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');

	// Test begin
	// window.dispatch = dispatch
	window.signup = signup
	window.login = login
	window.logout = logout
	// Test end

	ReactDOM.render(<h1>Food is better fried</h1>, root);
});
