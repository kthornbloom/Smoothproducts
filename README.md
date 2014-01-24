#Smoothproducts
A lightweight & simple jQuery product viewer script by <a href="http://kthornbloom.com">Kevin Thornbloom</a>.


##Demo
<a href="http://kthornbloom.com/smoothproducts" target="_blank">Open demo in new window</a>

##Features

- Zooming & panning features for desktops and touch screens
- Odd image size handling
- Container is responsive
- Thumbnails with indicators
- Minimal markup

##Usage

- Add the CSS to your stylesheet, or just call it in your header:
```
	<link rel="stylesheet" href="css/smoothproducts.css">
```
- Add & call javascript in your footer:
```
	<script type="text/javascript" src="js/smoothproducts.js"></script>
	<script type="text/javascript">
        /* wait for images to load */
        $(window).load( function() {
            $('.sp-wrap').smoothproducts();
        });
    </script>
```
- Add HTML Markup
```
	<div class="sp-wrap">
		<a href="images/1.jpg"><img src="images/1_tb.jpg" alt=""></a>
		<a href="images/2.jpg"><img src="images/2_tb.jpg" alt=""></a>
	</div>
```


##Licensing
Free to use and modify personally or commercially. Not for resale. 

##Help & Feedback
Connect with me on <a href="https://twitter.com/kthornbloom" target="_blank">twitter.</a>

