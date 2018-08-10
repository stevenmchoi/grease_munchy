export const fetchAllMenuItems = () =>
    $.ajax({
        method: "GET",
        url: "api/menu_items"
    });

export const fetchMeal = mealId =>
    $.ajax({
        method: "GET",
        url: `api/meals/${mealId}`,
    });