desc "Create new week of menu items with the Heroku scheduler add-on"
task create_menu_items: :environment do
  until MenuItem.where(date: new_sunday.to_s).count == 4
    MenuItem.create(date: new_sunday.to_s, meal_id: rand(num_meals) + 1)
  end
end