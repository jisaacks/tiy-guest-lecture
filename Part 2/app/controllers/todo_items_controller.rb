class TodoItemsController < ApplicationController
  def index
    render json: TodoItem.all
  end

  def show
    @todo_item = TodoItem.find params[:id]
    render json: @todo_item
  end

  def create
    @todo_item = TodoItem.new params.require(:todo_item).permit!
    if @todo_item.save
      render json: @todo_item
    else
      render json: {error: @todo_item.errors.full_messages.to_sentence}
    end
  end

  def update
    @todo_item = TodoItem.find params[:id]
    if @todo_item.update_attributes params.require(:todo_item).permit!
      render json: @todo_item
    else
      render json: {error: @todo_item.errors.full_messages.to_sentence}
    end
  end

  def destroy
    @todo_item = TodoItem.find params[:id]
    @todo_item.destroy
    render json: @todo_item
  end
end