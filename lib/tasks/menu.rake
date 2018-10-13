namespace :menu do
  desc 'Create new week of menu items'
  task create_menu_items: :environment do
    MenuItem.create(
      [
        { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 },
        { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 },
        { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 },
        { date: (past_sunday + 28).to_s, meal_id: rand(num_meals) + 1 }
      ]
    )
  end
end
