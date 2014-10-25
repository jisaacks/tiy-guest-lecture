# View.events
# View.modelEvents
# View.collectionEvents

```javascript
var MyView = Marionette.ItemView.extend({

  events: {
    "click .add" : "addClicked"
  },
  
  modelEvents: {
    "change" : "modelChanged"
  },

  collectionEvents: {
    "add" : "modelAdded"
  }

});
```