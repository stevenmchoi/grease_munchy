import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ currentUser }) => {
	return currentUser
		? [
				<Link key="menu" to="/menu" onClick={() => window.scrollTo(0, 0)}>
					UPCOMING
				</Link>,

				<Link key="recipes" to="/recipes" onClick={() => window.scrollTo(0, 0)}>
					RECIPES
				</Link>,
		  ]
		: [
				<Link key="menu" to="/menu" onClick={() => window.scrollTo(0, 0)}>
					ON THE MENU
				</Link>,

				<Link key="recipes" to="/recipes" onClick={() => window.scrollTo(0, 0)}>
					RECIPES
				</Link>,
		  ];
};

export default NavButtons;
