# ItemView.serializeData

```javascript
var MyView = Backbone.Marionette.ItemView.extend({
  
});

var myModel = new Backbone.Model({
  firstname: "JD",
  lasname: "Isaacks"
});

var myCollection = new Backbone.Collection([{
  firstname: "Tyler",
  lastname: "Durden"
},{
  firstname: "Robert",
  lastname: "Paulson"
}]);

var mView = new MyView({model:myModel, collection:myCollection});
var cView = new MyView({collection: myCollection});

console.log( mView.serializeData() );

// {
//   "firstname": "JD",
//   "lasname": "Isaacks"
// }

console.log( cView.serializeData() );

// {
//   "items": [{
//     "firstname": "Tyler",
//     "lastname": "Durden"
//   },{
//     "firstname": "Robert",
//     "lastname": "Paulson"
//   }]
// }
```

[Next](../003%20CollectionView)
