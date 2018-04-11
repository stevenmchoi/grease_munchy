class Api::MealOrdersController < ApplicationController
	def index
		@meal_orders = MealOrder.all
	end

	def create
		@meal_order = MealOrder.new(meal_order_params)

		if @meal_order.save
			render :show
		else
			render :show, status: 422
		end
	end

	def destroy
		@meal_order = MealOrder.find_by(meal_order_params)

		if @meal_order.destroy
			render :index
		else
			render :show, status: 422
		end
	end

	private

	def meal_order_params
		params.require(:meal_order).permit(:user_id, :meal_id, :date)
	end
end
