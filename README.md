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
	
});
```

##Demonstration
![](stuff/demo.gif)
