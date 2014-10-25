# View.getTemplate

## Backbone

```javascript
var MyView = Backbone.View.extend({

  template: JST["templates/main"],

  render: function() {
    if (/* some condition */) {
      this.template = JST["templates/alternate"];
    }

    this.$el.html(this.template( this.model.toJSON() ));

    return this;
  }

});
```

## Marionette

```javascript
var MyView = Backbone.Marionette.ItemView.extend({
  
  getTemplate: function() {
    if (/* some condition */) {
      return JST["templates/alternate"];
    } else {
      return JST["templates/main"];
    }
  }

});
```