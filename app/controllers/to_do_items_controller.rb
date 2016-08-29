class ToDoItemsController < ApplicationController
  def index
    @to_do_items = ToDoItem.all
  end

  def create
  end

  def update
  end

  def destroy
  end
end
