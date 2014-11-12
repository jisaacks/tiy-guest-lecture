# Application.removeRegion

```javascript
var App = new Backbone.Marionette.Application();

App.addRegions({
  header: "#header",
  content: "#primary",
  footer: "#footer"
});

App.getRegion("content").show( someView );

App.removeRegion("content");
```

[Next](../007%20LayoutView)