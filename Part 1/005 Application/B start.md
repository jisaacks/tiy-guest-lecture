# Application.addInitializer

This the method you call to start the application. Once called all the initializers will be invoked and any options passed to start will be handed over to the initializers.

```javascript
var App = new Backbone.Marionette.Application();

App.addInitializer(function(opts){
  console.log("Hello,", opts.who);
});

App.start({who: "class"}); // Hello, class
```