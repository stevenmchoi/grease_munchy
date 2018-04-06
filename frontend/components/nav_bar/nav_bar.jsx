import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const NavBar = ({ currentUser, logout }) => {
	const sessionButtons = currentUser ? (
		<span>
			<p>{currentUser.username}</p>
			<button type="submit" onClick={logout}>
				Log Out
			</button>
		</span>
	) : (
		<span>
			<Link to="/login"> Log In </Link>

			<button>
				<Link to="/signup">Sign Up</Link>
			</button>
		</span>
	);

	return (
		<header>
			<Link to="/">
				<Logo />
			</Link>
			{sessionButtons}
		</header>
	);
};

export default NavBar;
