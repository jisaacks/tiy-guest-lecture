class AddTodoListIdToTodoItem < ActiveRecord::Migration
  def change
    add_reference :todo_items, :todo_list, index: true
  end
end
