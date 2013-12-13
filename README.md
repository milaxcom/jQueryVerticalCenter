jQueryVerticalCenter
================

##How to use

Include script after the jQuery library:
```HTML
<script type="text/javascript" src="jquery.vcenter.min.js"></script>
```

Set styles for your container:
```HTML
<style>
    #container {
    position:absolute;
    width:200px;
    height:200px;
    left:50%;
    margin-left:-100px;
    /* any styles */
    }
</style>
<div id="container"></div>
```

Use it how jQuery-plugin with options:
```JavaScript
$("#container").verticalCenter({
    /** Optional: min height of client window (default: 420) */
    minClientHeight : 420,
    /** Optional: displacement of top position (default: 0) */
    topOffset : 0,
    /** Optional: change position on resize client window (default: false) */
    onResize : false,
    /** Optional: callback after set position */
    callback : function () { }
});
```

##Demonstration
![](stuff/demo.gif)
