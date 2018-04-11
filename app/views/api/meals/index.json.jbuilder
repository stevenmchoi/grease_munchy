@meals.each do |meal|
	json.set! meal.id do
		json.partial! 'api/meals/meal', meal: meal
	end
end
