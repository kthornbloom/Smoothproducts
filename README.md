#Smoothproducts
A lightweight & simple jQuery product viewer script by <a href="http://kthornbloom.com">Kevin Thornbloom</a>.


##Demo
<a href="http://kthornbloom.com/smoothproducts" target="_blank">Open demo in new window</a>

##Features

- Easy to use
- Easy to style
- Responsive
- Handles different image sizes
- 'Quick zoom' on hover with mouse
- Lightbox style full zoom on click
- Handles multiple instances on one page

##Usage

- Add the CSS to your stylesheet, or just call it in your header:

```
<link rel="stylesheet" href="css/smoothproducts.css">
```
- Add & call javascript in your footer:

```
<script type="text/javascript" src="js/smoothproducts.min.js"></script>
<script type="text/javascript">
    /* wait for images to load */
    $(window).load( function() {
        $('.sp-wrap').smoothproducts();
    });
</script>
```
- In your HTML, add a wrapper div called "sp-wrap". Inside should be your medium-sized thumbnail images. Each thumbnail should be linked to the higher-resolution version of its self. Use thumbnails of the same width for best results. (You may use different heights)

```
<div class="sp-wrap">
	<a href="images/1.jpg"><img src="images/1_tb.jpg" alt=""></a>
	<a href="images/2.jpg"><img src="images/2_tb.jpg" alt=""></a>
</div>
```
- You may add an element with a class of "sp-loading" and style it however you'd like. This div will be removed once the images have loaded and the viewer gets added to the page.

```
<div class="sp-loading"><img src="images/sp-loading.gif" alt=""><br>LOADING IMAGES</div>
<div class="sp-wrap">
	<a href="images/1.jpg"><img src="images/1_tb.jpg" alt=""></a>
	<a href="images/2.jpg"><img src="images/2_tb.jpg" alt=""></a>
</div>
```
- You may wish to add a max-width equal to the width of your preview images. Apply this to the .sp-wrap class in the stylesheet.

```
	.sp-wrap {
	    max-width: 300px;
	}
```


##Licensing
Free to use and modify personally or commercially. Not for resale. 


