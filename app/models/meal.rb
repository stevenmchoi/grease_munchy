class Meal < ApplicationRecord
	validates :name, :restaurant, presence: true
	validates_uniqueness_of :name, scope: :restaurant

	has_many :meal_orders,
		class_name: :MealOrder,
		foreign_key: :meal_id,
		primary_key: :id

	has_many :users,
		through: :meal_orders,
		source: :user
end
