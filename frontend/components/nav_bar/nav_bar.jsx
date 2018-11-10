import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from './logo';
import NavButtonsContainer from './nav_buttons/nav_buttons_container';

const NavBar = ({ currentUser, logout, clearMealOrders }) => {
	const sessionButtons = currentUser ? (
		<span className="session-buttons">
			<p className="welcome-user">{`Welcome, ${currentUser.username}!`}</p>

			<a
				className="logout-btn"
				onClick={() => {
					logout();
					clearMealOrders();
				}}
			>
				Log Out
			</a>
		</span>
	) : (
		<span className="session-buttons">
			<Link className="nav-link" to="/login" onClick={() => window.scrollTo(0, 0)}>
				LOG IN
			</Link>

			<Link className="signup-btn" to="/signup" onClick={() => window.scrollTo(0, 0)}>
				SIGN UP
			</Link>
		</span>
	);

	return (
		<header>
			<nav className="nav-bar">
				<Link to="/" onClick={() => window.scrollTo(0, 0)}>
					<Logo />
				</Link>

				<Route component={NavButtonsContainer} />

				{sessionButtons}
			</nav>
		</header>
	);
};

export default NavBar;
