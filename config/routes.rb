Rails.application.routes.draw do

  resources :to_do_items, except: [:new, :show, :edit]

end
