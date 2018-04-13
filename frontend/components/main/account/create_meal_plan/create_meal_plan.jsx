import React from 'react';

class CreateMealPlan extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			mealOrders,
			fetchMealOrders,
			createMealOrder,
			deleteMealOrder,
		} = this.props;

		return <div />;
	}
}

export default CreateMealPlan;
