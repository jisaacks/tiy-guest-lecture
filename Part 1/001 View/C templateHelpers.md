# View.templateHelpers

## Backbone

```javascript
MyView = Backbone.View.extend({
  
  renderData: function() {
    return _.extend(this.model.toJSON(), {
      "fullname" : this.get("firstname") + " " + this.get("lastname"),
      "greeting" : "Hello, " + this.get("firstname") + " " + this.get("lastname")
    });
  },

  render: function() {
    this.$el.html(this.template( this.renderData() ));
    return this;
  }

});
```

## Marionette

```javascript
MyView = Backbone.Marionette.ItemView.extend({
  
  templateHelpers: function() {
    return {
      fullname: this.firstname + " " + this.lastname,
      greeting: "Hello, " + this.fullname
    };
  }

});
```

