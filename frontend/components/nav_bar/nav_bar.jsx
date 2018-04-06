import React from 'react';
import { Link } from 'react-router-dom';

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
			<Link to="/login">Log In</Link>
			<Link to="/signup">Sign Up</Link>
		</span>
	);
	return (
		<header>
			<a href="/">
				<img
					src="https://fontmeme.com/permalink/180401/ebd8cc51ec8f24ef053f3daebd6b9506.png"
					alt="blue-apron-logo-font"
					border="0"
				/>
			</a>
			{/* <!-- Logo from Font Meme:
			https://fontmeme.com/blue-apron-logo-font/ --> */}

			<h1>Grease Munchy...why not?</h1>

			{sessionButtons}
		</header>
	);
};

export default NavBar;
