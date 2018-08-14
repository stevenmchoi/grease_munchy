@meal_orders.each do |meal_order|
	p current_user

	if current_user && current_user.id == meal_order.user_id
		puts json: meal_order

		json.set! meal_order.id do
			json.partial! 'api/meal_orders/meal_order', meal_order: meal_order
		end
	end
end
