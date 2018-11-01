require File.expand_path('../../../app/models/application_record.rb', __FILE__)
require File.expand_path('../../../app/models/meal.rb', __FILE__)
require File.expand_path('../../../app/models/menu_item.rb', __FILE__)
require File.expand_path('../../../config/environment.rb', __FILE__)
require 'rake'

desc "Create new week of menu items with the Heroku scheduler add-on"

new_sunday = Date.parse('sunday') + 28
num_meals = Meal.count

task create_menu_items: :environment do
  until MenuItem.where(date: new_sunday.to_s).count == 4
    MenuItem.create(date: new_sunday.to_s, meal_id: rand(num_meals) + 1)
  end
end
