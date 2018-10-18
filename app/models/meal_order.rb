class MealOrder < ApplicationRecord
  validates :user_id, :menu_item_id, presence: true
  validates_uniqueness_of :user, scope: :menu_item_id

  belongs_to :user

	belongs_to :menu_item
end
