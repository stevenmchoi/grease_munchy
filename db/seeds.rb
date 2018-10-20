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

User.create(
  [
    { username: 'user1', email: 'user1@user1', password: 'password' },
    { username: 'user2', email: 'user2@user2', password: 'password' },
    { username: 'demo', email: 'demo@demo', password: 'password' }
  ]
)

# Ideas for seeding RecipeShow
Meal.create(
  [
    {
      name: 'Big Mac',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Big_Mac_hamburger_-_Japan_%282%29.jpg',
      restaurant: "McDonald's",
      # above: modal

      # below: show page
      description: "The Big Mac is a hamburger sold by international fast food restaurant chain McDonald's. It was introduced in the Greater Pittsburgh area, United States, in 1967 and nationwide in 1968. It is one of the company's signature products.",
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Large Fries',
      imageUrl: 'https://farm4.staticflickr.com/3136/2701003490_ae17df256a_o.jpg',
      restaurant: "McDonald's",
      # above: modal

      # below: show page
      description: 'Our French fries are born from premium potatoes such as the Russet Burbank and the Shepody. With zero grams of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'McFlurry',
      imageUrl: 'https://farm8.staticflickr.com/7680/17910269142_8b6648b457_o.jpg',
      restaurant: "McDonald's",
      # above: modal

      # below: show page
      description: "McFlurry consists of whipped, soft-serve McDonald's vanilla-flavored frozen dairy product in a cup. The McFlurry has a specially designed spoon with a hole in the handle which is attached to a blender. Sprinkles or various types of candy are added to the cup which is then blended using the spoon. The ice cream product in a McFlurry is the same product McDonald's uses for its cones and Sundaes. The ice cream product is made from UHT milk, extended with methylcellulose. Flavors vary from market to market, and new flavors are introduced regularly. The spoon used to consume a McFlurry has a hollow middle, which some will mistake as a sucking device.",
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: "Dave's Double",
      imageUrl: 'https://farm8.staticflickr.com/7260/7025300923_c26f41a66a_b.jpg',
      restaurant: "Wendy's",
      # above: modal

      # below: show page
      description: "Oh yeah, you're seeing double. That's two fresh, never frozen beef patties with the freshest toppings on a warm toasted bun.\nFresh beef available in the contiguous U.S., Alaska and Canada. *Approximate weight before cooking",
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Two-Piece Combo',
      imageUrl: 'https://farm5.staticflickr.com/4040/4516316564_3e656dcc07_o.jpg',
      restaurant: 'KFC',
      # above: modal

      # below: show page
      description: "Chow down on the Colonel’s Combos. Our KFC Combos feature a wide variety of delicious Kentucky Fried classics.\n\nTwo pieces of fried chicken, larger mashed potatoes, biscuit, medium drink and a chocolate chip cookie for just $5.",
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Mini Corn Dogs',
      imageUrl: 'https://farm9.staticflickr.com/8422/7636094606_8ff5b0a3e0_o.jpg',
      restaurant: 'Jack In The Box',
      # above: modal

      # below: show page
      description: 'Jack in the Box® restaurants are adding a popular county fair favorite, corn dogs, to its menu. But unlike its county fair cousins, Jack’s corn dogs are served in bite-sized portions and without sticks. And being the trendy chain that it is, Jack in the Box is going “mini” with the new product and calling them Mini Corn Dogs. Now available for a limited time at participating restaurants, Jack in the Box is serving its Mini Corn Dogs in a 5-piece order, with each bite-sized pup fried to a golden brown.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Pizza',
      imageUrl: 'https://c1.staticflickr.com/2/1145/1326663872_d7c0c0d725_b.jpg',
      restaurant: 'Round Table Pizza',
      # above: modal

      # below: show page
      description: 'A Legendary Combination: Pepperoni, Italian sausage, salami, linguica, mushrooms, green peppers, onions, black olives on zesty red sauce (shrimp* & anchovies* may be available upon request at some locations).',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Curly Fries',
      imageUrl: 'https://c1.staticflickr.com/6/5582/15088187957_c99af4e93f_b.jpg',
      restaurant: "Arby's",
      # above: modal

      # below: show page
      description: 'Potatoes. The meats of the field. Sliced up curly and fried to perfection. Snack-size curly fries are delicious on their own and even better with one of our famous sauces.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Hot Dog',
      imageUrl: 'https://www.goodfreephotos.com/albums/food/hotdog-sausage-with-the-works.jpg',
      restaurant: 'Costco',
      # above: modal

      # below: show page
      description: 'The price of a hot dog at Costco — $1.50 with a soda — has not changed since 1985. The enduring meal deal at one of the country’s largest big-box retailers is by design, according to a report from Business Insider. Like Costco’s popular $4.99 rotisserie chicken, its hot dogs — available at counters in the front (and sometimes outside) of each store — are priced to move so as to encourage shoppers to purchase other, higher margin items.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Chicken Nuggets',
      imageUrl: 'https://c.pxhere.com/photos/57/a9/chicken_nuggets_fries_dip_sauce_grilled_bbq-1110920.jpg!d',
      restaurant: 'Burger King',
      # above: modal

      # below: show page
      description: 'Made with white meat, our bite-sized Chicken Nuggets are tender and juicy on the inside and crispy on the outside. Coated in a homestyle seasoned breading, they are perfect for dipping in any of our delicious dipping sauces.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Poutine',
      imageUrl: 'https://c1.staticflickr.com/6/5604/30256597740_065c828418_b.jpg',
      restaurant: 'Canada',
      # above: modal

      # below: show page
      description: "Poutine is a dish originating from the Canadian province of Quebec consisting of French fries and cheese curds topped with a brown gravy. The dish emerged in the late 1950s in the Centre-du-Québec area and has long been associated with the cuisine of Quebec. For many years, it was negatively perceived and mocked and even used as a means of stigmatization against Quebec society. However, since the mid-2000s, poutine has been celebrated as a symbol of Québécois cultural pride, and its rise in prominence led to popularity outside the province, especially in central Canada and the northeast United States. Annual poutine celebrations occur in Montreal, Quebec City, and Drummondville, as well as Toronto, Ottawa, Chicago, and Manchester, New Hampshire. Today, it is often identified as quintessential Canadian food and has been called \"Canada's national dish\", though some have commented that this labelling represents misappropriation of Québécois culture. Many variations on the original recipe are popular, leading some to suggest that poutine has emerged as a new dish classification in its own right, just like sandwiches, dumplings, soups, and flatbreads.",
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Burger Steak',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jolly_Super_Meal_B.jpg/800px-Jolly_Super_Meal_B.jpg',
      restaurant: 'Jollibee',
      # above: modal

      # below: show page
      description: 'Burger Steak or hamburger steak is a popular fast food menu in the Philippines. Flavorful burger patties (usually made from beef) are pan fried and topped with gravy and sliced button mushrooms.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    },

    {
      name: 'Fiesta Noodles',
      imageUrl: 'https://amp.businessinsider.com/images/599749bff1a85020008b614c-750-500.jpg',
      restaurant: 'Jollibee',
      # above: modal

      # below: show page
      description: 'Dubbed "Fiesta Noodles" for American palates, the chain does a pretty decent job of recreating pancit palabok -- a Filipino favorite of rice noodles doused in garlic sauce, chopped pork, shrimp, slices of hard-boiled eggs and parsley flakes.',
      ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
      instructions: [Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact, Faker::ChuckNorris.fact],
      servings: rand(2..9)
    }
  ]
)

past_sunday = Date.parse('sunday')
current_sunday = Date.parse('sunday')
num_meals = Meal.count

# TODO: Employ for loop to evenly create a number of Menu Items each week
4.times do
  current_sunday += 7

  until MenuItem.where(date: current_sunday.to_s).count == 4
    MenuItem.create(date: current_sunday.to_s, meal_id: rand(num_meals) + 1)
  end
end

# MenuItem.create(
#   [
#     { date: (past_sunday + 7).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 7).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 7).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 7).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 14).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 14).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 14).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 14).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 21).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 21).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 21).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 21).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 },
#     { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 }
#   ]
# )
