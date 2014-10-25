# CollectionView.emptyView

```javascript
var EmptyView = Backbone.Marionette.ItemView.extend({
  
  tagName: "li",

  template: _.template("There are no items to show")

});

var EmptyListView = ListView.extend({
  
  emptyView: EmptyView

});

var collection = new Backbone.Collection();

var emptyView = new EmptyListView({collection: collection});

emptyView.render();
```

```html
<ul>
  <li>There are no items to show</li>
</ul>
```