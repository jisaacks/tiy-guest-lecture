class TodoListsController < ApplicationController
  def index
    @todo_lists = TodoList.includes(:todo_items)
  end
end