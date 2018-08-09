class MealOrder < ApplicationRecord
	validates :user_id, :menu_item_id, presence: true
	validates_uniqueness_of :user, scope: :menu_item_id

	belongs_to :user,
		class_name: :User,
		foreign_key: :user_id,
		primary_key: :id

	belongs_to :menu_item,
		class_name: :MenuItem,
		foreign_key: :menu_item_id,
		primary_key: :id
end
