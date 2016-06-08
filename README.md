# SimpleSlider
Simple jQuery slider plugin with navigation and autoplay

# How to set up plugin

1) Link SimpleSlider CSS file
```html
<link rel="stylesheet" href="libs/simpleSlider/simple.slider.min.css">
```

2) Link jQuery library
```html
<script src="jquery.js"></script>
```
3) Link SimpleSlider JS file
```html
<script src="libs/simpleSlider/simple.slider.min.js"></script>
```

4) Add necessary HTML markup where -
*class="simple-slider" is define slider on your page
and *class="ss-elem" is define your slide
```html
<div class="simple-slider">
	<div class="ss-elem">
		<img src="" alt="">
	</div>
</div>
```
# Activate plugin in your .js file
```javascript
$(".simple-slider").simpleSlider();
```
You can use an "options" object for some settings
```javascript
$(".simple-slider").simpleSlider({
	nav   : true,
	width : 600 
});
```

