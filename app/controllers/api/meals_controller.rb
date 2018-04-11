class Api::MealsController < ApplicationController
	def index
		@meals = Meal.all
	end

	def show
		@meal = Meal.find(meals_params)
	end

	private

	def meals_params
		params.require(:meal).permit(:name, :restaurant)
	end
end
