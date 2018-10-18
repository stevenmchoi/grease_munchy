class MenuItem < ApplicationRecord
  validates :date, :meal_id, presence: true
  validates_uniqueness_of :date, scope: :meal_id

  has_many :meal_orders

  belongs_to :meal

  has_many :users, through: :meal_orders
end
