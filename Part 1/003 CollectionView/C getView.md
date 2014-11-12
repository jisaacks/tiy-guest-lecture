# CollectionView.getChildView
# CollectionView.getEmptyView

```javascript

var ListView = Backbone.Marionette.CollectionView.extend({
  
  getChildView: function() {
    if( this.collection.length > 10 ) {
      return CompactEntryView;
    } else {
      return EntryView;
    }
  },

  getEmptyView: function() {
    if( /* special condition */ ) {
      return SpecialEmptyView;
    } else {
      return EmptyView;
    }
  }

});

[Next](D%20viewOptions.md)