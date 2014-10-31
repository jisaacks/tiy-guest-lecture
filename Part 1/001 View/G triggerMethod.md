# View.triggerMethod

```javascript
var MyView = Marionette.ItemView.extend({

  onFoo: function(arg, quite) {
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