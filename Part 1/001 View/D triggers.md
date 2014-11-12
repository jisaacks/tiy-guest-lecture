# View.triggers

## Backbone

```javascript
var MyView = Backbone.View.extend({
  
  events: {
    "click .submit" : "_onSubmitClick"
  },
  
  _onSubmitClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.trigger("submit", {
      view: this,
      model: this.model,
      collection: this.collection
    });
    return false;
  }
});
```

## Marionette

```javascript
var MyView = Backbone.Marionette.ItemView.extend({
  
  triggers: {
    "click .submit" : "submit"
  }

});
```

[Next](E%20ui.md)
