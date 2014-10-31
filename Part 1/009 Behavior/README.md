# Backbone.Marionette.Behavior

A behavior is a way to group pieces of view logic into reusable components that can be plugged into multiple views.

You must tell Marionette how to look behaviors up:

```javascript
window.jisaacks = {};
window.jisaacks.behaviors = {};

Marionette.Behaviors.behaviorsLookup = function() {
  return window.jisaacks.behaviors;
};

window.jisaacks.behaviors.Menu = Backbone.Marionette.Behavior.extend({
  // logic
});
```

Example Usage:

```javascript
var ViewWithMenu = Backbone.Marionette.ItemView.extend({
  
  ui: {
    menuBtn: ".show-btn",
    menu: ".menu"
  },

  behaviors: {
    Menu: {
      data: function() {
        return this.model.get("menuData");
      }
    }
  }

});

behaviors.Menu = Backbone.Marionette.Behavior.extend({
  
  events: {
    "click @ui.menuBtn" : "showMenu"
  },

  showMenu: function() {
    this.view.ui.menu.append( this.buildMenu() );
  },

  buildMenu: function() {
    items = _.map(this.options.data.call(this.view), function(datum) {
        return "<li>" + datum + "</li>";
    });
    return "<ul>" + items.join("") + "</ul>";
  }

});
```