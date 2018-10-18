class Meal < ApplicationRecord
  validates :name, :restaurant, presence: true
  validates_uniqueness_of :name, scope: :restaurant

	has_many :menu_items
end
