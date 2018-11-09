import React from 'react';
import { Link } from 'react-router-dom';

const preventScroll = (e) => e.preventDefault();

const footerLinkLists = [
	['On The Menu', 'Pricing', 'Our Vision', 'Wine', 'Market', 'Gifts'],
	['Blog', 'Cookbook', 'Suppliers', 'Affiliates', 'Supply Chains Act', 'Food Safety'],
	['Careers', 'Press', 'Our Team', 'Investor Relations'],
];

const Footer = () => (
	<footer className="footer">
		<div className="footer-content">
			<div className="social">
				<h3>FOLLOW US</h3>

				<ul className="social-icons">
					<li>
						<a className="fb footer-dead-link" href="#" onClick={preventScroll} />
					</li>

					<li>
						<a className="tw footer-dead-link" href="#" onClick={preventScroll} />
					</li>

					<li>
						<a className="ig footer-dead-link" href="#" onClick={preventScroll} />
					</li>

					<li>
						<a className="pin footer-dead-link" href="#" onClick={preventScroll} />
					</li>
				</ul>
			</div>

			<div className="newsletter">
				<h3>DISCOVER WHAT'S COOKIN'</h3>

				<form className="newsletter-form">
					<input type="text" placeholder="Email Address" />
					<button type="button" className="btn footer-dead-link" onSubmit={preventScroll}>
						GO
					</button>
				</form>

				<p>Sign up for offers, recipes, news &amp; more</p>
			</div>

			<div className="blog">
				<h3>
					<a className="blog-header footer-dead-link" href="#" onClick={preventScroll}>
						FROM THE BLOG
					</a>
				</h3>

				<div className="blog-content">
					<a className="blog-content-img footer-dead-link" href="#" onClick={preventScroll}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/6/63/First-kitchen_Fast_food_%2802%29.jpg" />
					</a>

					<h4 className="blog-content-text">
						<a className="blog-content-text-link footer-dead-link" href="#" onClick={preventScroll}>
							Grease Munchy now serving in China!
						</a>
					</h4>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			{footerLinkLists.map((list) => (
				<ul className="link-col">
					{list.map((link) => {
						switch (link) {
							case 'On The Menu':
								return (
									<li>
										<Link to="/menu">{link}</Link>
									</li>
								);
							default:
								return (
									<li>
										<a className="footer-dead-link" href="#" onClick={preventScroll}>
											{link}
										</a>
									</li>
								);
						}
					})}
				</ul>
			))}
		</div>
	</footer>
);

export default Footer;
