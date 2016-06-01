
function SimpleSlider(options){
	//options
	options = options || {};
	var interval;
	var width = options.slideWidth || 600;
	var currentSlide = 1;
	var currentPos = 0;

	// cash DOM elements
	var $wrapper = $(".slider-wrapper");
	var $container = $wrapper.find(".slider-container");
	var slidesQty = $container[0].children.length;

	// events
	$wrapper.hover(function() {stop()}, function() {autoPlay()});

	function autoPlay() {
		interval = setInterval(moveForward,3000);
	}

	function stop() {
		clearInterval(interval);
	}

	function moveForward() {
		if (currentSlide === slidesQty) { // if last slide => move to first
			$container.animate({'margin-left': '0'}, 1000);
			currentSlide = 1;
			currentPos = 0;
			return
		}
		currentPos -= width;
		currentSlide++;

		$container.animate({
			"margin-left": currentPos + "px"
		},1000);
	}

	function moveBackward() {
		if (currentSlide === 1) {// if first slide => move to last
			currentSlide = slidesQty;
			currentPos = -(slidesQty-1) * width;
			$container.animate({'margin-left': currentPos}, 1000);
			return
		}
		currentPos += width;
		currentSlide--;
		
		$container.animate({
			"margin-left": currentPos + "px"
		},1000);
	}

	autoPlay()

}

