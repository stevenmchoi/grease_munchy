class Api::MealsController < ApplicationController
	def index
		@meals = Meal.all
	end

	def show
		@meal = Meal.find(params[:id])
	end

	private

	def meals_params # for search fn later
		params.require(:meal).permit(:name, :restaurant)
	end
end
