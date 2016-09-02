Rails.application.routes.draw do
  root 'to_do_items#index'
  resources :to_do_items, only: [:index, :create, :destroy]
end
