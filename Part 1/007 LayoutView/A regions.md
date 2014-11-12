# LayoutView.regions

```html
<script id="article" type="text/html">
  <div class="body"></body>
  <div class="comments"></comments>
</script>
```

```javascript
var ArticleView = Backbone.Marionette.LayoutView.extend({
  
  template: "#article",
  
  regions: {
    body: ".body",
    comments: ".comments"
  }

});

var article = new ArticleView();

article.body.show( new ArticleBody() );
article.comments.show( new CommentsView() );
```

[Next](../008%20Object)