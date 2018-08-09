class ChangeColumnInMealOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :meal_orders, :date
    remove_column :meal_orders, :meal_id
    add_column :meal_orders, :menu_item_id, :integer, null: false
    
    add_index :meal_orders, :menu_item_id
    add_index :meal_orders, [:user_id, :menu_item_id], unique: true
  end
end
