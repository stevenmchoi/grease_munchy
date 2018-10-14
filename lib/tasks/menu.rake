require File.expand_path('../../../app/models/application_record.rb', __FILE__)
require File.expand_path('../../../app/models/meal.rb', __FILE__)
require File.expand_path('../../../app/models/menu_item.rb', __FILE__)
require File.expand_path('../../../config/environment.rb', __FILE__)
require 'rake'

past_sunday = Date.parse('sunday')
num_meals = Meal.count

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
