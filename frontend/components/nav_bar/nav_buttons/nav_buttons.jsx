import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ currentUser }) => {
	return currentUser
		? [
				<Link key="upcoming" to="/account#upcoming">
					Upcoming
				</Link>,
				<Link key="create" to="/account#create">
					Create Meal Plan
				</Link>,
				<Link key="recipes" to="/recipes">
					Cookbook
				</Link>,
		  ]
		: [
				<Link key="menu" to="/menu">
					On The Menu
				</Link>,
				<Link key="recipes" to="/recipes">
					Cookbook
				</Link>,
		  ];
};

export default NavButtons;
