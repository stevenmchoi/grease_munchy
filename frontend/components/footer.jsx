import React from 'react';
import { Link } from 'react-router-dom';

const preventScroll = (e) => e.preventDefault();

const linkList = [
	['On The Menu', 'Pricing', 'Our Vision', 'Wine', 'Market', 'Gifts'],
	['Blog', 'Cookbook', 'Suppliers', 'Affiliates', 'Supply Chains Act', 'Food Safety'],
	['Careers', 'Press', 'Our Team', 'Investor Relations'],
];

const Footer = () => (
	<footer>
		<ul className="link-col-1">
			<li>
				<Link to="/menu">On The Menu</Link>
			</li>
			<li>
				<a href="#" onClick={preventScroll}>
					Pricing
				</a>
			</li>
			<li>Our Vision</li>
			<li>Wine</li>
			<li>Market</li>
			<li>Gifts</li>
		</ul>
	</footer>
);

export default Footer;
