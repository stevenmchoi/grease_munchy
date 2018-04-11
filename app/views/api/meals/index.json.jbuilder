json.meals @meals do |meal|
	json.set! [meal.id] do
		json.partial! 'api/meals/meal', meal: meal
	end
end