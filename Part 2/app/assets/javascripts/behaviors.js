iy.behaviors = {};

Marionette.Behaviors.behaviorsLookup = function() {
  return iy.behaviors;
};

iy.behaviors.AddItem = Backbone.Marionette.Behavior.extend({

  events: {
    "click @ui.showAdd" : "showAdd",
    "submit @ui.add" : "doAdd"
  },

  showAdd: function() {
    this.view.ui.showAdd.hide();
    this.view.ui.add.slideDown();
    this.view.ui.addName.focus();
  },

  doAdd: function(e) {
    e.preventDefault();
    var name  = this.view.ui.addName.val();
    var model = this.view.collection.add({name: name});
    model.save();
    this.view.ui.addName.val("");
    this.view.ui.add.hide();
    this.view.ui.showAdd.show();
  }

});