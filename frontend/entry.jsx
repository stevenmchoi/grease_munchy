import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');

	// Test begin
	window.signup = SessionApiUtil.signup
	window.login = SessionApiUtil.login
	window.logout = SessionApiUtil.logout
	// Test end

	ReactDOM.render(<h1>Food is better fried</h1>, root);
});
