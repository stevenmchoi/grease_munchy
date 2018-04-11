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

User.create([{ username: 'demo', email: 'demo@demo', password: 'password' }])

Meal.create([
	{
		name: "Big Mac",
		description: "Tasty!",
		imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_02_Videvo.mov63142.webm",
		restaurant: "McDonald's"
	},
	{
		name: "Large Fries",
		description: "Nowhere else!",
		imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm",
		restaurant: "McDonald's"
	},
	{
		name: "McFlurry",
		description: "Jason Wu!",
		imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_02_Videvo.mov63142.webm",
		restaurant: "McDonald's"
	},
	{
		name: "Dave's Double",
		description: "I'm getting hungry now...but we're in SF",
		imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm",
		restaurant: "Wendy's"
	},
	{
		name: "Two-Piece Combo",
		description: "Someone add Popeyes!",
		imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_02_Videvo.mov63142.webm",
		restaurant: "KFC"
	},
	{
		name: "Classic Buttery Jack",
		description: "How many times did I eat this at 12am?",
		imageUrl: "https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_03_Videvo.mov69703.webm",
		restaurant: "Jack In The Box"
	},
])