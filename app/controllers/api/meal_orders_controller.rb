class Api::MealOrdersController < ApplicationController
	def index
		@meal_orders = MealOrder.all
	end

	def show
		@meal_order = MealOrder.find(params[:id])
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
		@meal_order = MealOrder.find(params[:id])

		# TODO: can delete all right, but can't handle errors well!
		if @meal_order && @meal_order.destroy
			render :show
		else
			render :show, status: 422
		end
	end

	private

	def meal_order_params
		params.require(:meal_order).permit(:user_id, :menu_item_id)
	end
end
