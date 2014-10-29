# Application.addInitializer

You can add several initializers to hook into your applications. An initializer will be called once the application starts or immediately if the application has already started.

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