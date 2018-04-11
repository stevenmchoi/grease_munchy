export const fetchMealOrders = () =>
	$.ajax({
		method: 'GET',
		url: 'api/meal_orders',
	});

export const createMealOrder = (mealOrder) =>
	$.ajax({
		method: 'POST',
		url: 'api/meal_orders',
		data: { mealOrder },
	});

export const deleteMealOrder = (mealOrderId) =>
	$.ajax({
		method: 'DELETE',
		url: `api/meal_orders/${mealOrderId}`,
	});
