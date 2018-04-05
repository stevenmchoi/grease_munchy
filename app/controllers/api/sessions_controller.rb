class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      @status_code = 401
      render :show, status: @status_code
    end
  end

  def destroy
    if current_user
      logout
      render :show
    else
      @status_code = 404
      render :show, status: @status_code
    end
  end
end
