# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180809065000) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "meal_orders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "menu_item_id", null: false
    t.index ["menu_item_id"], name: "index_meal_orders_on_menu_item_id"
    t.index ["user_id", "menu_item_id"], name: "index_meal_orders_on_user_id_and_menu_item_id", unique: true
    t.index ["user_id"], name: "index_meal_orders_on_user_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.string "imageUrl"
    t.string "restaurant", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "instructions", default: [], array: true
    t.integer "servings"
    t.string "ingredients", default: [], array: true
    t.index ["name", "restaurant"], name: "index_meals_on_name_and_restaurant", unique: true
    t.index ["name"], name: "index_meals_on_name"
    t.index ["restaurant"], name: "index_meals_on_restaurant"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "date", null: false
    t.integer "meal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date", "meal_id"], name: "index_menu_items_on_date_and_meal_id", unique: true
    t.index ["date"], name: "index_menu_items_on_date"
    t.index ["meal_id"], name: "index_menu_items_on_meal_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_subscribed", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
