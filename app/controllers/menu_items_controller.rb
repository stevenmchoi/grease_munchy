class MenuItemsController < ApplicationController
  def index
    @menu_items = MenuItem.all.group_by(&:date)
  end
end
