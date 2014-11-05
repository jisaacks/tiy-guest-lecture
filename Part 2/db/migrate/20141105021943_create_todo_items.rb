class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :name
      t.datetime :completed_at

      t.timestamps
    end
  end
end
