desc "Create new week of menu items with the Heroku scheduler add-on"

new_sunday = Date.parse('sunday') + 28
num_meals = Meal.count

task create_menu_items: :environment do
  until MenuItem.where(date: new_sunday.to_s).count == 4
    MenuItem.create(date: new_sunday.to_s, meal_id: rand(num_meals) + 1)
  end
end
