# CompositeView.childViewContainer

```html
<script id="entry" type="text/html">
  <td><%= name %></td>
  <td><%= age %></td>
</script>

<script id="table" type="text/html">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody></tbody>
</script>
```

```javascript
var EntryView = Backbone.Marionette.ItemView.extend({
  tagName: "tr",
  template: "#entry"
});

var TableView = Backbone.Marionette.CompositeView.extend({
  tagName: "table",
  template: "#table",
  childView: EntryView,
  childViewContainer: "tbody"
});
```