# Application.addInitializer

```javascript
var App = new Backbone.Marionette.Application();

App.addInitializer(function(opts){
  console.log(opts.message);
});

App.start({message: "hello"});

App.addInitializer(function(opts){
  console.log("world");
});

```