# json.partial! 'api/meals/meal', meal: @meal
json.extract! @meal, :id, :name, :description, :imageUrl, :restaurant