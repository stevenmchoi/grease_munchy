Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :meal_orders, only: [:index, :create, :destroy]
    resources :meals, only: [:index, :show]
  end
end
