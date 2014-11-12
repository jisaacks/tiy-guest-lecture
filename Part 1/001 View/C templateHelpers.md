# View.templateHelpers

## Backbone

```javascript
var MyView = Backbone.View.extend({
  
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
var MyView = Backbone.Marionette.ItemView.extend({
  
  templateHelpers: function() {
    return {
      fullname: function() {
        return this.firstname + " " + this.lastname;
      }
      greeting: function() {
        return "Hello, " + this.fullname;
      }
    };
  }

});
```

[Next](D%20triggers.md)
