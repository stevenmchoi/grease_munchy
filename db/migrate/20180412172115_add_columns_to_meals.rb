class AddColumnsToMeals < ActiveRecord::Migration[5.1]
  def change
    add_column :meals, :ingredients, :string
    add_column :meals, :instructions, :string, array: true, default: []
    add_column :meals, :servings, :integer
  end
end
