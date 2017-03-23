Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :feeds, only: [:index, :create, :show, :destroy]
    resources :collections, only: [:index, :create, :show, :destroy, :update]
    resources :collected_feeds, only: [:create,:show, :destroy]
    resources :articles, only: [:create, :show, :index]
  end

  root "static_pages#root"
end
