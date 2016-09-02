class ToDoItemsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json {render json: ToDoItem.all}
    end
  end
  
  def create
    binding.pry
  end

  def update
  end

  def destroy
  end
end
