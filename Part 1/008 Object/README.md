# Backbone.Marionette.Object

A Marionette.Object is a convenience class meant to be extended for any general purpose class. It has many Backbone conventions like `events` backed in.

```javascript
var SimpleClass = Backbone.Marionette.Object.extend({
  
  initialize: function() {
    this.on("foo", function() {
      console.log("bar");
    }, this);
  }

});

var simpleInstance = new SimpleClass();
simpleInstance.trigger("foo"); // bar
```