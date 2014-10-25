# Backbone.Marionette.CollectionView

This view is meant to render a collection instead of a model. It has may built in features for rendering collections.

It renders a child view for every model in the collection and appends the view to itself.

It keeps the view in sync with the models in the collection. If a model is added or removed from the collection, the view will add/remove the appropriate child views automatically. It will also keep the order of the elements in the DOM the same as the order of models in the collection.