iy.views = {};

iy.views.Header = Backbone.Marionette.ItemView.extend({
  template: JST["header"]
});

iy.views.Footer = Backbone.Marionette.ItemView.extend({
  template: JST["footer"]
});

iy.views.PrimaryLayout = Backbone.Marionette.LayoutView.extend({
  template: JST["primary_layout"],
  regions: {
    lists: ".lists",
    items: ".items"
  }
});

iy.views.Relax = Backbone.Marionette.ItemView.extend({
  template: _.template("Relax!")
});

iy.views.AddThings = Backbone.Marionette.ItemView.extend({
  template: _.template("Add some things!")
});

iy.views.TodoList = Backbone.Marionette.ItemView.extend({
  triggers: {
    "click" : "focus"
  },
  tagName: "li",
  template: JST["todo_list"]
})

iy.views.TodoLists = Backbone.Marionette.CompositeView.extend({
  ui: {
    showAdd: ".show-add",
    add: ".add",
    addName: ".add input[name=name]",
  },
  behaviors: {
    AddItem: {}
  },
  template: JST["todo_lists"],
  childView: iy.views.TodoList,
  emptyView: iy.views.Relax,
  childViewContainer: "ul"
});

iy.views.TodoItem = Backbone.Marionette.ItemView.extend({
  ui: {
    completed: ".completed",
    destroy: ".delete"
  },
  triggers: {
    "change @ui.completed" : "completed:changed",
    "click @ui.destroy" : "delete:clicked"
  },
  tagName: "tr",
  template: JST["todo_item"],
  onCompletedChanged: function() {
    if (this.ui.completed.is(":checked")) {
      this.model.save("completed_at", new Date());
    } else {
      this.model.save("completed_at", null);
    };
  },
  onDeleteClicked: function() {
    if (!this.model.complete() && !confirm(this.model.get("name") + " not finished. Are you sure?")) {
      return;
    }
    this.model.destroy();
  },
  onRender: function() {
    if (this.model.get("completed_at")) {
      this.ui.completed.prop('checked', true);
    }
  }
});

iy.views.TodoItems = Backbone.Marionette.CompositeView.extend({
  ui: {
    showAdd: ".show-add",
    add: ".add",
    addName: ".add input[name=name]",
    destroy: ".delete-list"
  },
  triggers: {
    "click @ui.destroy" : "delete:clicked"
  },
  behaviors: {
    AddItem: {}
  },
  collectionEvents: {
    "todolist:destroyed" : "remove"
  },
  template: JST["todo_items"],
  childView: iy.views.TodoItem,
  emptyView: iy.views.AddThings,
  childViewContainer: "tbody",
  onDeleteClicked: function() {
    this.collection.trigger("delete:requested");
  },
});