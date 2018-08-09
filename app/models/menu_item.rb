class MenuItem < ApplicationRecord
    validates :date, :meal_id, presence: true
	validates_uniqueness_of :date, scope: :meal_id

	belongs_to :meal,
		class_name: :Meal,
		foreign_key: :meal_id,
		primary_key: :id
end