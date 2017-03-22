Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :feeds, only: [:index, :create, :show, :destroy]
    resources :collections, only: [:index, :create, :show, :destroy, :update]
    resources :collected_feeds, only: [:create]
  end

  root "static_pages#root"
end
