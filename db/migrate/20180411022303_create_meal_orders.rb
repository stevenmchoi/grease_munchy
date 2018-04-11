class CreateMealOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_orders do |t|
      t.integer :user_id, null: false
      t.integer :meal_id, null: false
      t.string :date, null: false

      t.timestamps
    end

    add_index :meal_orders, :user_id
    add_index :meal_orders, :meal_id
    add_index :meal_orders, :date
    add_index :meal_orders, [:user_id, :meal_id, :date], unique: true
  end
end
