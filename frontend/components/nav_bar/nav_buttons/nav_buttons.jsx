import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ currentUser }) => {
	return currentUser
		? [
				<Link key="menu" to="/menu">
					UPCOMING
				</Link>,

				<Link key="recipes" to="/recipes">
					RECIPES
				</Link>,
		  ]
		: [
				<Link key="menu" to="/menu">
					ON THE MENU
				</Link>,

				<Link key="recipes" to="/recipes">
					RECIPES
				</Link>,
		  ];
};

export default NavButtons;
