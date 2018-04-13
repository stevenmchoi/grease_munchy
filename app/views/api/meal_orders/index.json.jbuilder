@meal_orders.each do |meal_order|
	if meal_order.user_id == current_user.id
		puts json: meal_order

		json.set! meal_order.id do
			json.partial! 'api/meal_orders/meal_order', meal_order: meal_order
			# json.partial! 'api/meal_orders/meal_order'
		end
	end
end
