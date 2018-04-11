class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.string :name, null: false
      t.string :description
      t.string :imageUrl
      t.string :restaurant, null: false

      t.timestamps
    end

    add_index :meals, :name
    add_index :meals, :restaurant
    add_index :meals, [:name, :restaurant], unique: true
  end
end
