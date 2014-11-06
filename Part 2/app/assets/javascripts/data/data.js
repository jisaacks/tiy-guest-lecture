iy.data = {};

iy.data.TodoItem = Backbone.Model.extend({
  urlRoot: "/todo_items"
});

iy.data.TodoItems = Backbone.Collection.extend({
  model: iy.data.TodoItem
});

iy.data.TodoList = Backbone.Model.extend({
  urlRoot: "/todo_lists",
  initialize: function() {
    if (this.get("todo_items")) {
      this.items = new iy.data.TodoItems(this.get("todo_items"));
      this.unset("todo_items");
    }
  }
});

iy.data.TodoLists = Backbone.Collection.extend({
  model: iy.data.TodoList
});