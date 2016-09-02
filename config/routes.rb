Rails.application.routes.draw do
  root 'to_do_items#index'
  resources :to_do_items, except: [:new, :show, :edit]
end
