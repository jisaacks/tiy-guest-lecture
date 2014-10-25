# ItemView.serializeData

```javascript
MyView = Backbone.Marionette.ItemView.extend({
  
});

myModel = new Backbone.Model({
  firstname: "JD",
  lasname: "Isaacks"
});

myCollection = new Backbone.Collection([{
  firstname: "Tyler",
  lastname: "Durden"
},{
  firstname: "Robert",
  lastname: "Paulson"
}]);

mView = new MyView({model:myModel, collection:myCollection});
cView = new MyView({collection: myCollection});

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