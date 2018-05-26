export const fetchMealOrders = () =>
	$.ajax({
		method: "GET",
		url: "api/meal_orders",
	});

export const createMealOrder = meal_order =>
	$.ajax({
		method: "POST",
		url: "api/meal_orders",
		data: { meal_order },
	});

export const deleteMealOrder = mealOrderId =>
	$.ajax({
		method: "DELETE",
		url: `api/meal_orders/${mealOrderId}`,
	});
