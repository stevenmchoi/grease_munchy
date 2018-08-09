class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :date, null: false
      t.integer :meal_id, null: false
      
      t.timestamps
    end

    add_index :menu_items, :date
    add_index :menu_items, :meal_id
    add_index :menu_items, [:date, :meal_id], unique: true
  end
end
