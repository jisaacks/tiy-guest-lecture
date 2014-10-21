# View.render

## Backbone

```javascript
MyView = Backbone.View.extend({
  
  template: _.template("Hello World"),
  
  render: function() {
    this.$el.html(this.template( this.model.toJSON() ));
    return this;
  }

});

var view = new MyView(model: someModel);
$(".some-container").html(view.render().el);
```

## Marionette

```javascript
MyView = Backbone.Marionette.ItemView.extend({
  template: _.template("Hello World")
});

var view = new MyView(model: someModel);
someRegion.show(view);
```