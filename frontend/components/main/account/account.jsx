import React from 'react';
import { Switch, Route } from 'react-router-dom';

const AccountMain = ({ currentUser }) => {
	return (
		<section>
			<h2>No more drive-thru, {currentUser.username}!</h2>
			<Switch>
				{/* <Route
					path="/pages/pricing#plan-selector"
					component={ManageMealPlanContainer}
				/> */}
				{/* <Route
					path="/pages/pricing"
					component={ManageMealPlanContainer}
				/> */}

				{/* <Route
					exact
					path="/account#current"
					component={CurrentContainer}
				/> */}
			</Switch>
		</section>
	);
};

export default AccountMain;
