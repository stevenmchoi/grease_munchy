export const fetchAllMeals = () =>
	$.ajax({
		method: "GET",
		url: "api/meals",
	});

export const fetchMeal = mealId =>
	$.ajax({
		method: "GET",
		url: `api/meals/${mealId}`,
	});
