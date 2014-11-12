# LayoutView.regions

```html
<script id="article" type="text/html">
  <div class="body"></body>
  <div class="comments"></div>
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

article.getRegion( "body"     ).show( new ArticleBody()  );
article.getRegion( "comments" ).show( new CommentsView() );
```

[Next](../008%20Object)