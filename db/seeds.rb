# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# NOTE:
# Status codes: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
# 401: Unauthorized; failing auth
# 402: Payment required; can't manage meals
# 403: Forbidden: need to be logged_in
# 404: Not Found: route doesn't exist
# 422: Unprocessable Entity: Bad fields for signup

User.create([{ username: 'user1', email: 'user1@user1', password: 'password' }])
User.create([{ username: 'user2', email: 'user2@user2', password: 'password' }])
User.create([{ username: 'demo', email: 'demo@demo', password: 'password' }])

Meal.create([{
	name: "Big Mac",
	description: "Tasty!",
	imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_02_Videvo.mov63142.webm",
	restaurant: "McDonald's"
}])
Meal.create([{
	name: "Large Fries",
	description: "Nowhere else!",
	imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm",
	restaurant: "McDonald's"
}])
Meal.create([{
	name: "McFlurry",
	description: "Jason Wu!",
	imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_02_Videvo.mov63142.webm",
	restaurant: "McDonald's"
}])
Meal.create([{
	name: "Dave's Double",
	description: "I'm getting hungry now...but we're in SF",
	imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm",
	restaurant: "Wendy's"
}])
Meal.create([{
	name: "Two-Piece Combo",
	description: "Someone add Popeyes!",
	imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_02_Videvo.mov63142.webm",
	restaurant: "KFC"
}])
Meal.create([{
	name: "Classic Buttery Jack",
	description: "How many times did I eat this at 12am?",
	imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm",
	restaurant: "Jack In The Box"
}])

MealOrder.create([{ user_id: 1, meal_id: 1, date: "2018-04-14" }])
MealOrder.create([{ user_id: 1, meal_id: 6, date: "2018-04-14" }])
MealOrder.create([{ user_id: 1, meal_id: 1, date: "2018-04-21" }])
MealOrder.create([{ user_id: 2, meal_id: 1, date: "2018-04-12" }])
MealOrder.create([{ user_id: 2, meal_id: 5, date: "2018-04-12" }])
MealOrder.create([{ user_id: 2, meal_id: 1, date: "2018-04-14" }])
MealOrder.create([{ user_id: 2, meal_id: 5, date: "2018-04-14" }])
MealOrder.create([{ user_id: 2, meal_id: 2, date: "2018-04-19" }])
MealOrder.create([{ user_id: 2, meal_id: 1, date: "2018-04-19" }])
MealOrder.create([{ user_id: 2, meal_id: 1, date: "2018-04-26" }])

# $.ajax({
# 	method: 'GET',
# 	url: `api/meals/${mealId}`,
# });
