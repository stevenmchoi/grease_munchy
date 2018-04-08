import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const NavBar = ({ currentUser, logout }) => {
	const sessionButtons = currentUser ? (
		<span className="session-buttons">
			<p>{currentUser.username}</p>
			<input className="button" type="submit" onClick={logout}>
				Log Out
			</input>
		</span>
	) : (
		<span className="session-buttons">
			<Link to="/login">Log In</Link>
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
