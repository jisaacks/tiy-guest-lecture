# CollectionView.childView

```javascript
var EntryView = Backbone.Marionette.ItemView.extend({
  
  tagName: "li",

  template: _.template("<%= name %>")

});

var ListView = Backbone.Marionette.CollectionView.extend({

  tagName: "ul",
  
  childView: EntryView

});

var myList = new Backbone.Collection([
  {name: "foo"},
  {name: "bar"},
  {name: "baz"}
]);

var listView = new ListView({collection: myList});

listView.render();
```

```html
<ul>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ul>
```

[Next](B%20emptyView.md)
