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
			<section className="step1">
				<EasySteps1 width="225" height="230" />

				<div className="splash-body-text">
					<h2>Choose your meals</h2>

					<p>
						Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners,
						and top-rated customer favorites.
					</p>
				</div>
			</section>

			<section className="step2">
				<div className="splash-body-text">
					<h2>Unpack your box</h2>

					<p>
						We guarantee the freshness of all our ingredients and deliver them in an insulated box
						right to your door.
					</p>
				</div>

				<EasySteps2 width="225" height="230" />
			</section>

			<section className="step3">
				<EasySteps3 width="225" height="230" />

				<div className="splash-body-text">
					<h2>Create magic</h2>

					<p>
						Following our step-by-step instructions you’ll experience the magic of cooking recipes
						that our chefs create with your family’s tastes in mind.
					</p>
				</div>
			</section>
		</section>

		<section className="splash-look-inside" />

		<section className="splash-simple-pitch" />
	</div>
);

export default Splash;
