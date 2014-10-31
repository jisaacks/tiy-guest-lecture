# View.triggerMethod

```javascript
var MyView = Marionette.ItemView.extend({

  events: {
    "click .add" : "add:click"
  },
  
  onAddClicked: function() {
    console.log("add was clicked");
  },

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