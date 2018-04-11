export const fetchAllMeals = () =>
	$.ajax({
		method: 'GET',
		url: 'api/meals',
	});

export const fetchMeal = (mealId) =>
	$.ajax({
		method: 'GET',
		url: `api/meals/${mealId}`,
	});

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
