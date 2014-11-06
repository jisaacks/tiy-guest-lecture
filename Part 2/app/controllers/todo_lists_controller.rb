class TodoListsController < ApplicationController
  def index
    @todo_lists = TodoList.includes(:todo_items)

    respond_to do |format|
      format.html {}
      format.json {
        render json: @todo_lists.as_json(:include => :todo_items)
      }
    end
  end

  def show
    @todo_list = TodoList.find params[:id]

    respond_to do |format|
      format.html {}
      format.json {
        render json: @todo_list.as_json(:include => :todo_items)
      }
    end
  end

  def create
    @todo_list = TodoList.new params.require(:todo_list).permit!
    if @todo_list.save
      render json: @todo_list
    else
      render json: {error: @todo_list.errors.full_messages.to_sentence}
    end
  end

  def update
    @todo_list = TodoList.find params[:id]
    if @todo_list.update_attributes params.require(:todo_list).permit!
      render json: @todo_list
    else
      render json: {error: @todo_list.errors.full_messages.to_sentence}
    end
  end

  def destroy
    @todo_list = TodoList.find params[:id]
    @todo_list.destroy
    render json: @todo_list
  end
end