# CollectionView.childViewOptions
# CollectionView.emptyViewOptions

```javascript
var EntryView = Backbone.Marionette.ItemView.extend({
  
  initialize: function(opts) {
    console.log( opts.foo ); // bar
  }

});

var EmptyView = Backbone.Marionette.ItemView.extend({
  
  initialize: function(opts) {
    console.log( opts.foo ); // baz
  }

});

var ListView = Backbone.Marionette.CollectionView.extend({
  
  childView: EntryView,

  childViewOptions: {
    foo: "bar"
  },

  emptyView: EmptyView,

  emptyViewOptions: {
    foo: "baz"
  }

});
```

[Next](../004%20CompositeView)