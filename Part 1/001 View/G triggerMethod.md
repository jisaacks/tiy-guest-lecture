# View.triggerMethod

```javascript
var MyView = Marionette.ItemView.extend({

  onFoo: function(arg, quiet) {
    if (quite) {
      console.log("bar");
    } else {
      alert("bar");
    }
  },

  initialize: function() {
    this.triggerMethod("foo", true);
  }

});
```

[Next](../002%20ItemView)
