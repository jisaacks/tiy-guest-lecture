
# View.triggers

## Backbone

```javascript
myView = Backbone.View.extend({
  
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

```
myView = Backbone.Marionette.ItemView.extend({
  
  triggers: {
    "click .submit" : "submit"
  }

});
```