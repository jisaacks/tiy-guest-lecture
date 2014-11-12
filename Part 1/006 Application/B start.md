# Application.addInitializer

```javascript
var App = new Backbone.Marionette.Application();

App.addInitializer(function(opts){
  console.log("Hello,", opts.who);
});

App.start({who: "class"}); // Hello, class
```

[Next](C%20addRegions.md)