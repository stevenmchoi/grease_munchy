class ChangeColumnInMeals < ActiveRecord::Migration[5.1]
  def change
    remove_column :meals, :ingredients
    add_column :meals, :ingredients, :string, array: true, default: []
  end
end
