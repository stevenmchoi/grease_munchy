class ChangeColumnToMeals < ActiveRecord::Migration[5.1]
  def change
    change_column :meals, :description, :text
  end
end
