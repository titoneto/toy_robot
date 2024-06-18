Rails.application.routes.draw do
  root 'app#index'

  get '/app', to: 'app#index'
  get '/app/game', to: 'app#index', as: 'app_game'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  namespace :api do
    resources :robots do
      collection do
        post 'move'
        post 'left'
        post 'right'
        post 'place'
      end
    end
  end
end
