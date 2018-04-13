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
	imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Big_Mac_hamburger_-_Japan_%282%29.jpg",
	restaurant: "McDonald's",
	# above: modal

	# below: show page
	description: "The Big Mac is a hamburger sold by international fast food restaurant chain McDonald's. It was introduced in the Greater Pittsburgh area, United States, in 1967 and nationwide in 1968. It is one of the company's signature products.",
	ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
	instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
	servings: rand(8) + 2,
},

{
	name: "Large Fries",
	imageUrl: "https://farm4.staticflickr.com/3136/2701003490_ae17df256a_o.jpg",
	restaurant: "McDonald's",
	# above: modal

	# below: show page
	description: "Our French fries are born from premium potatoes such as the Russet Burbank and the Shepody. With zero grams of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.",
	ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
	instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
	servings: rand(8) + 2,
},

{
	name: "McFlurry",
	imageUrl: "https://farm8.staticflickr.com/7680/17910269142_8b6648b457_o.jpg",
	restaurant: "McDonald's",
	# above: modal

	# below: show page
	description: "McFlurry consists of whipped, soft-serve McDonald's vanilla-flavored frozen dairy product in a cup. The McFlurry has a specially designed spoon with a hole in the handle which is attached to a blender. Sprinkles or various types of candy are added to the cup which is then blended using the spoon. The ice cream product in a McFlurry is the same product McDonald's uses for its cones and Sundaes. The ice cream product is made from UHT milk, extended with methylcellulose. Flavors vary from market to market, and new flavors are introduced regularly. The spoon used to consume a McFlurry has a hollow middle, which some will mistake as a sucking device.",
	ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
	instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
	servings: rand(8) + 2,
},

{
	name: "Dave's Double",
	imageUrl: "https://farm8.staticflickr.com/7260/7025300923_c26f41a66a_b.jpg",
	restaurant: "Wendy's",
	# above: modal

	# below: show page
	description: "Oh yeah, you're seeing double. That's two fresh, never frozen beef patties with the freshest toppings on a warm toasted bun.\nFresh beef available in the contiguous U.S., Alaska and Canada. *Approximate weight before cooking",
	ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
	instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
	servings: rand(8) + 2,
},

{
	name: "Two-Piece Combo",
	imageUrl: "https://farm5.staticflickr.com/4040/4516316564_3e656dcc07_o.jpg",
	restaurant: "KFC",
	# above: modal

	# below: show page
	description: "Chow down on the Colonel’s Combos. Our KFC Combos feature a wide variety of delicious Kentucky Fried classics.\n\nTwo pieces of fried chicken, larger mashed potatoes, biscuit, medium drink and a chocolate chip cookie for just $5.",
	ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
	instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
	servings: rand(8) + 2,
},

{
	name: "Mini Corn Dogs",
	imageUrl: "https://farm9.staticflickr.com/8422/7636094606_8ff5b0a3e0_o.jpg",
	restaurant: "Jack In The Box",
	# above: modal

	# below: show page
	description: "Jack in the Box® restaurants are adding a popular county fair favorite, corn dogs, to its menu. But unlike its county fair cousins, Jack’s corn dogs are served in bite-sized portions and without sticks. And being the trendy chain that it is, Jack in the Box is going “mini” with the new product and calling them Mini Corn Dogs. Now available for a limited time at participating restaurants, Jack in the Box is serving its Mini Corn Dogs in a 5-piece order, with each bite-sized pup fried to a golden brown.",
	ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
	instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
	servings: rand(8) + 2,
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
