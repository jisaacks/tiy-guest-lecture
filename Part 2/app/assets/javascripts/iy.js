window.iy = {};

iy.app = new Backbone.Marionette.Application();

iy.app.addRegions({
  headerRegion: "#header",
  footerRegion: "#footer",
  contentRegion: "#content"
});

iy.app.addInitializer(function(opts){
  // show header and footer here.
  var header = new iy.views.Header();
  this.headerRegion.show(header);

  var footer = new iy.views.Footer();
  this.footerRegion.show(footer);
});

iy.app.addInitializer(function(opts){
  var layout = new iy.views.PrimaryLayout();
  this.contentRegion.show(layout);

  this.todoLists = new iy.data.TodoLists(opts.todoLists);
  this.todoListsView = new iy.views.TodoLists({collection: this.todoLists});

  layout.lists.show(this.todoListsView);

  this.listenTo(this.todoListsView, "childview:focus", function(view,opts){
    layout.items.show(new iy.views.TodoItems({
      model: opts.model,
      collection: opts.model.items
    }));
  });

  this.listenTo(this.todoLists, "add", function(model){
    layout.items.show(new iy.views.TodoItems({
      model: model,
      collection: model.items
    }));
  });

  if (this.todoLists.length) {
    layout.items.show(new iy.views.TodoItems({
      model: this.todoLists.first(),
      collection: this.todoLists.first().items
    }));
  }
});