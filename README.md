jQuery vAlign 1.0
==================

jQuery Plug-in for responsive vertical center align block to the height of the parent element.

Usage
===== 

Add height to paarent element. Use jQuery Selector to call plug-in

Here is a simple vAlign setup:

```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
  <script src="jquery.vAlign.js" type="text/javascript"></script>
  <script type="text/javascript">
        $("document").ready(function() {
               $('#Child-element').vAlign();	    
        });
  </script>
```


For <strong>child elements with images </strong> use window.onload to make sure images are loaded before plug-in function call.

```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
  <script src="jquery.vAlign.js" type="text/javascript"></script>
  <script type="text/javascript">
        window.onload = function(){
               $('#Child-element').vAlign();      
        });
  </script>
```
