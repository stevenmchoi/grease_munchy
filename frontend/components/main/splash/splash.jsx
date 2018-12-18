import React from 'react';
import { Link } from 'react-router-dom';

import EasySteps1 from '../../../../app/assets/images/easysteps/easysteps1.svg';
import EasySteps2 from '../../../../app/assets/images/easysteps/easysteps2.svg';
import EasySteps3 from '../../../../app/assets/images/easysteps/easysteps3.svg';

import LookInside1 from '../../../../app/assets/images/lookinside/lookinside1.svg';
import LookInside2 from '../../../../app/assets/images/lookinside/lookinside2.svg';
import LookInside3 from '../../../../app/assets/images/lookinside/lookinside3.svg';
import LookInside4 from '../../../../app/assets/images/lookinside/lookinside4.svg';

import SimplePitchImg from '../../../../app/assets/images/simplepitch.svg';

const Splash = () => (
	<div className="splash">
		<section className="splash-header">
			<div className="spacer-behind-nav-splash" />

			<video
				className="home-video"
				preload="auto"
				autoPlay
				loop
				src="https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm"
				type="video/webm"
				muted
			/>

			<div className="splash-header-container">
				<h2 className="splash-header-text">Your house is the drive-thru!</h2>
				<Link className="signup-btn" to="/signup">
					GET STARTED
				</Link>
			</div>
		</section>

		<section className="splash-easy-steps">
			<EasySteps1 className="step1-pic" width="225" height="230" />

			<div className="splash-easy-steps-text-1">
				<h2>Choose your meals</h2>

				<p>
					Our chef-designed recipes include balanced Mediterranean meals, quick
					one-pan dinners, and top-rated customer favorites.
				</p>
			</div>

			<div className="splash-easy-steps-text-2">
				<h2>Unpack your box</h2>

				<p>
					We guarantee the freshness of all our ingredients and deliver them in
					an insulated box right to your door.
				</p>
			</div>

			<EasySteps2 className="step2-pic" width="225" height="230" />

			<EasySteps3 className="step3-pic" width="225" height="230" />

			<div className="splash-easy-steps-text-3">
				<h2>Create magic</h2>

				<p>
					Following our step-by-step instructions you’ll experience the magic of
					cooking recipes that our chefs create with your family’s tastes in
					mind.
				</p>
			</div>
		</section>

		<section className="splash-look-inside">
			<img
				className="splash-look-inside-bkgd-img"
				src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
			/>

			<div className="splash-look-inside-content">
				<h3>WHAT'S INSIDE A GREASE MUNCHY BOX</h3>

				<div className="splash-look-inside-content-container container">
					<div className="splash-look-inside-content-item-1 item">
						<LookInside1 width="50" height="50" />

						<h2>Delicious, chef-designed recipes</h2>

						<p>
							With step-by-step instructions so you never miss a beat (or beet)
						</p>
					</div>

					<div className="splash-look-inside-content-item-2 item">
						<LookInside2 width="50" height="50" />

						<h2>Responsibly-sourced, quality ingredients</h2>

						<p>
							Like fresh produce, sustainable seafood and exclusive spice blends
						</p>
					</div>

					<div className="splash-look-inside-content-item-3 item">
						<LookInside3 width="50" height="50" />

						<h2>Perfectly-portioned amounts</h2>

						<p>So no morsels or dollops go to waste</p>
					</div>

					<div className="splash-look-inside-content-item-4 item">
						<LookInside4 width="50" height="50" />

						<h2>Recyclable ice packs and packaging</h2>

						<p>
							To ensure your ingredients stay fresh until you’re home and ready
						</p>
					</div>
				</div>

				<a
					className="splash-choose-plan-btn"
					href="#"
					onClick={(e) => e.preventDefault()}
				>
					<span>CHOOSE YOUR PLAN</span>
				</a>
			</div>
		</section>

		<section className="splash-simple-pitch">
			<SimplePitchImg
				className="splash-simple-pitch-img"
				width="225"
				height="230"
			/>

			<h2>Starting at $7.49 per serving</h2>

			<p>No commitment. You can skip or cancel anytime.</p>

			<a
				className="splash-choose-plan-btn"
				href="#"
				onClick={(e) => e.preventDefault()}
			>
				CHOOSE YOUR PLAN
			</a>
		</section>
	</div>
);

export default Splash;
