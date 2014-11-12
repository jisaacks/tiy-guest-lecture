# Region.show

```javascript
region.show( someView );

region.show( someView ); // nothing happened

region.show( someView, {forceShow: true} ); // reshow

region.show( otherView ); // someView is destroyed

region.show( thirdView, {preventDestroy: true} ); // otherView is not destroyed
```

[Next](B%20empty.md)