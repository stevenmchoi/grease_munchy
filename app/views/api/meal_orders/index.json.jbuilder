@meal_orders.each do |meal_order|
	if current_user && current_user.id == meal_order.user_id
		json.set! meal_order.menu_item_id do
			json.partial! 'api/meal_orders/meal_order', meal_order: meal_order
		end
	end
end
