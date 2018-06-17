# Smoothproducts
A lightweight & simple jQuery product viewer script


## Demo
<a href="http://kthornbloom.com/smoothproducts" target="_blank">Open demo in new window</a>

## Features

- Easy to use
- Easy to style
- Responsive
- Handles different image sizes
- 'Quick zoom' on hover with mouse
- Lightbox style full zoom on click
- Handles multiple instances on one page

## Usage

- Add the CSS to your stylesheet, or just call it in your header:

```html
<link rel="stylesheet" href="css/smoothproducts.css">
```
- Add & call javascript in your footer:

```html
<script type="text/javascript" src="js/smoothproducts.min.js"></script>
<script type="text/javascript">
    /* wait for images to load */
    $(window).load( function() {
        $('.sp-wrap').smoothproducts();
    });
</script>
```
- In your HTML, add a wrapper div called "sp-wrap". Inside should be your medium-sized thumbnail images. Each thumbnail should be linked to the higher-resolution version of its self. Use thumbnails of the same width for best results. (You may use different heights)

```html
<div class="sp-wrap">
	<a href="images/1.jpg"><img src="images/1_tb.jpg" alt=""></a>
	<a href="images/2.jpg"><img src="images/2_tb.jpg" alt=""></a>
</div>
```
- You may add an element with a class of "sp-loading" and style it however you'd like. This div will be removed once the images have loaded and the viewer gets added to the page. 

```html
<div class="sp-loading"><img src="images/sp-loading.gif" alt=""><br>LOADING IMAGES</div>
<div class="sp-wrap">
	<a href="images/1.jpg"><img src="images/1_tb.jpg" alt=""></a>
	<a href="images/2.jpg"><img src="images/2_tb.jpg" alt=""></a>
</div>
```
- You may wish to add a max-width equal to the width of your preview images. Apply this to the .sp-wrap class in the stylesheet.

```css
	.sp-wrap {
	    max-width: 300px;
	}
```
- You may add a class of "sp-default" to an image link. This will cause that image to be selected by default when the page loads, instead of the first image in the list. (Thanks to <a href="https://github.com/andynoelker">Andy Noelker</a>)

```html
<div class="sp-wrap">
	<a href="images/1.jpg"><img src="images/1_tb.jpg" alt=""></a>
	<a href="images/2.jpg" class="sp-default"><img src="images/2_tb.jpg" alt=""></a>
</div>
```

## AngularJS

- For AngularJS you may do an iteration over the images in an array. When the iteration gets to the last element of the array the directive is called to activate the plugin. The directive calls a function to delete previous event listeners of the plugin to prevent flickering and unexpected behaviors on single-page websites.

```html
<div class="sp-wrap">
	<a href="{{image.url}}" ng-repeat="image in images track by $index"><img src="{{image.tb.url}}" alt=""></a>
	<div ng-if="$last" activate_photos></div>
</div>
```

```js
app.directive('activatePhotos', [
'timeout', function(timeout) {
	return {
		restrict: 'A',
		link: function(scope, elem, attr) {
			return timeout(function() {
				$('.sp-wrap').deleteSmoothProducts(); //clear previous event listeners
				$('.sp-wrap').smoothproducts();
			});
		}
	};
}
]);
```

## Plugins

A Rails plugin providing the necessary files is [available here](https://github.com/calve/smoothproducts_rails).

## Licensing
Free to use and modify personally or commercially. Not for resale. 


