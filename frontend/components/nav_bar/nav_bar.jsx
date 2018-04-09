import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const NavBar = ({ currentUser, logout }) => {
	const sessionButtons = currentUser ? (
		<span className="session-buttons">
			<p>{currentUser.username}</p>
			<button className="button" onClick={logout}>
				Log Out
			</button>
		</span>
	) : (
		<span className="session-buttons">
			<Link className="nav-link" to="/login">
				Log In
			</Link>
			<Link className="button" to="/signup">
				Sign Up
			</Link>
		</span>
	);

	return (
		<header>
			<nav className="nav-bar">
				<Link to="/">
					<Logo />
				</Link>
				{sessionButtons}
			</nav>
		</header>
	);
};

export default NavBar;
