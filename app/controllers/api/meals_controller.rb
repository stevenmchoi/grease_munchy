class Api::MealsController < ApplicationController
	def index
		@meals = Meal.all

		# render json: @meals
	end

	def show
		@meal = Meal.find(params[:id])

		# if @meal
		# 	render :show
		# else
		# 	puts "Hwoieoiw-e0---------wo-03--0-0i-0i-203i-02i-302-3i0"
		# 	render json: ["Can't find meal!"], status: 404
		# end
	end

	private

	def meals_params # for search fn later
		params.require(:meal).permit(:name, :restaurant)
	end
end
