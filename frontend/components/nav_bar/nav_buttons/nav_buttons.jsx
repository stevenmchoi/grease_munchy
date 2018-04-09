import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ currentUser }) => {
	return currentUser
		? [
				<Link to="/account#upcoming">Upcoming</Link>,
				<Link to="/account#create">Create Meal Plan</Link>,
				<Link to="/recipes">Cookbook</Link>,
		  ]
		: [
				<Link to="/menu">On The Menu</Link>,
				<Link to="/recipes">Cookbook</Link>,
		  ];
};

export default NavButtons;
