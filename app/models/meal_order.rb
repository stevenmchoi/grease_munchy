class MealOrder < ApplicationRecord
	validates :user, :meal, :date, presence: true
	validates_uniqueness_of :user, scope: [:meal, :date]

	belongs_to :user,
		class_name: :User,
		foreign_key: :user_id,
		primary_key: :id

	belongs_to :meal,
		class_name: :Meal,
		foreign_key: :meal_id,
		primary_key: :id
end
