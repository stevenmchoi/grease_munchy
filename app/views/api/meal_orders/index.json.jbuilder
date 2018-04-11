json.mealOrders @meal_orders do |meal_order|
	if meal_order.user_id == current_user.id
		json.set! [meal_order.id] do
			json.partial! 'api/meal_orders/meal_order', meal_order: meal_order
			# json.partial! 'api/meal_orders/meal_order'
		end
	end
end
