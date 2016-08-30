Rails.application.routes.draw do

  resources :to_do_items, except: [:new, :show, :edit]
  get 'items', to: 'to_do_items#items'
end
