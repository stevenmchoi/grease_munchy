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

# Ideas for seeding RecipeShow
Meal.create([{
	name: "Big Mac",
	description: "Tasty!",
	imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Big_Mac_hamburger_-_Japan_%282%29.jpg",
	restaurant: "McDonald's",
	# ingredients: ["salt and stuff"],
	# instructions: [],
	# servings: 4,
},

{
	name: "Large Fries",
	description: "Nowhere else!",
	imageUrl: "https://farm4.staticflickr.com/3136/2701003490_ae17df256a_o.jpg",
	restaurant: "McDonald's",
	# ingredients: ["salt and stuff"],
	# instructions: [],
	# servings: 4,
},

{
	name: "McFlurry",
	description: "Jason Wu!",
	imageUrl: "https://farm8.staticflickr.com/7680/17910269142_8b6648b457_o.jpg",
	restaurant: "McDonald's",
	# ingredients: ["salt and stuff"],
	# instructions: [],
	# servings: 4,
},

{
	name: "Dave's Double",
	description: "I'm getting hungry now...but we're in SF",
	imageUrl: "https://farm8.staticflickr.com/7260/7025300923_c26f41a66a_b.jpg",
	restaurant: "Wendy's",
	# ingredients: ["salt and stuff"],
	# instructions: [],
	# servings: 4,
},

{
	name: "Two-Piece Combo",
	description: "Someone add Popeyes!",
	imageUrl: "https://farm5.staticflickr.com/4040/4516316564_3e656dcc07_o.jpg",
	restaurant: "KFC",
	# ingredients: ["salt and stuff"],
	# instructions: [],
	# servings: 4,
},

{
	name: "Mini Corn Dogs",
	description: "How many times did I eat this at 12am?",
	imageUrl: "https://farm9.staticflickr.com/8422/7636094606_8ff5b0a3e0_o.jpg",
	restaurant: "Jack In The Box",
	# ingredients: ["salt and stuff"],
	# instructions: [],
	# servings: 4,
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
