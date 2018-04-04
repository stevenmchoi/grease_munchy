class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      # TODO: 
      # render :show, status: 401
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    # @current_user = current_user
    if current_user
      logout
      render :show
    else
      # TODO: 
      # render :show, status: 404
      render json: ['Not logged in!'], status: 404
    end
  end
end
