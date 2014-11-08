iy.data = {};

iy.data.TodoItem = Backbone.Model.extend({
  urlRoot: "/todo_items",
  complete: function() {
    return !!this.get("completed_at");
  }
});

iy.data.TodoItems = Backbone.Collection.extend({
  model: iy.data.TodoItem
});

iy.data.TodoList = Backbone.Model.extend({
  urlRoot: "/todo_lists",
  initialize: function() {
    this.items = new iy.data.TodoItems(this.get("todo_items"));
    this.listenTo(this.items, "add", function(model) {
      model.set("todo_list_id", this.id);
    });
    this.listenTo(this.items, "delete:requested", function() {
      if (!this.complete() && !confirm(this.get("name") + " not finished. Are you sure?")) {
        return;
      }
      this.items.trigger("todolist:destroyed");
      this.destroy();
    });
    this.unset("todo_items");
  },
  complete: function() {
    return _.every(this.items.invoke("complete"));
  }
});

iy.data.TodoLists = Backbone.Collection.extend({
  model: iy.data.TodoList
});