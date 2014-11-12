# View.ui

```javascript
var MyView = Backbone.Marionette.ItemView.extend({

  ui: {
    tooltips: "th[title]",
    submit: "input[type=submit]"
  },

  onRender: function() {
    this.ui.tooltips.tooltip();
  },

  triggers: {
    "click @ui.submit" : "submit"
  }

});
```

[Next](F%20events.md)
