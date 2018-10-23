import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from './logo';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import NavButtonsContainer from './nav_buttons/nav_buttons_container';

const NavBar = ({ currentUser, logout, clearMealOrders }) => {
	const sessionButtons = currentUser ? (
		<span className="session-buttons">
			<p className="welcome-user">{`Welcome, ${currentUser.username}!`}</p>

			<button
				className="button"
				onClick={() => {
					logout();
					clearMealOrders();
				}}
			>
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

				<Route component={NavButtonsContainer} />

				{sessionButtons}
			</nav>
		</header>
	);
};

export default NavBar;
