class ToDoItemsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json {render json: ToDoItem.all}
    end
  end

  def create
    ToDoItem.create(item_params)
    respond_to do |format| 
      format.json {render json: ToDoItem.all}
    end
  end

  def destroy
    ToDoItem.find(params[:id]).destroy
    respond_to do |format| 
      format.json{render json: ToDoItem.all}
    end
  end

  private
  def item_params
    params.require(:to_do_item).permit(:title, :description)
  end
end
