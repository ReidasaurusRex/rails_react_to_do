class ToDoItemsController < ApplicationController
  def index
    @to_do_items = ToDoItem.all
  end

  def items
    respond_to do |format|
      format.json {render json: ToDoItem.all}
    end
  end

  def create
  end

  def update
  end

  def destroy
  end
end
