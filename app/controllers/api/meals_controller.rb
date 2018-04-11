class Api::MealsController < ApplicationController
	def index
		@meals = Meal.all
	end

	def show
		@post = Post.find(params[:id])
	end
end
