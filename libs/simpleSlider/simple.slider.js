
function SimpleSlider(options){
	//options
	options = options || {};
	var nav = options.nav || false;

	var width = options.slideWidth || 600;
	var interval;
	var currentSlide = 1;
	var currentPos = 0;

	// cash DOM elements
	var $wrapper = $(".slider-wrapper");
	var $container = $wrapper.find(".slider-container");
	var slidesQty = $container[0].children.length;
	var $navPrev = $wrapper.find('.slider-controls .nav.prev');
	var $navNext = $wrapper.find('.slider-controls .nav.next');

	// styles
	$wrapper.css('width', width);


	// events
	$wrapper.hover(sliderOver, sliderOut);
	$navPrev.on('click', moveBackward);
	$navNext.on('click', moveForward);

	function sliderInit() {
		autoPlay();
		if (nav) {
			createNavigation();
		}
	}

	function createNavigation() {

	}

	function sliderOver() {
		stop();
	}

	function sliderOut() {
		autoPlay();
	}

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

	sliderInit();

}

