
(function($) {

	$.fn.simpleSlider = function(options) {

		return this.each(function() {

			// options
			var width = options.width || 600,
				nav = options.nav || false,
				currentSlide = 1,
				currentPos = 0,
				interval;

			// cash DOM elements
			var $slider = $(this),
				slidesQty = $slider.children().length,
				$sliderWrapper,
				$navContainer,
				$navPrev,
				$navNext;

			// initialization
			sliderInit();

			// events
			$sliderWrapper.hover(sliderOver, sliderOut);
			if (nav) {
				$navPrev.on('click', moveBackward);
				$navNext.on('click', moveForward);
			}
			

			// functions
			function sliderResize() {
				$sliderWrapper.css({
					"width" : width
				})
			}

			function createDom() {
				$sliderWrapper = $slider.wrap('<div class="ss-wrapper"></div>').parent();
				if (nav === true) {
					createNavigation();
				}
			}

			function createNavigation() {
				$navContainer = $sliderWrapper.append(
					"<div class='ss-controls'>"+
						"<div class='nav prev'></div>"+
						"<div class='nav next'></div>"+
					"</div>").find('.ss-controls');

				$navPrev = $navContainer.find('.nav.prev');
				$navNext = $navContainer.find('.nav.next');
			}

			function sliderInit() {
				createDom();
				sliderResize();
				autoPlay();
			}

			function sliderOver() {
				if (nav) {
					$navContainer.stop().fadeIn("slow");
				}
				stop();
			}

			function sliderOut() {
				if (nav) {
					$navContainer.stop().fadeOut("slow");
				}	
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
					$slider.stop().animate({'margin-left': '0'}, 1000);
					currentSlide = 1;
					currentPos = 0;
					return
				}
				currentPos -= width;
				currentSlide++;

				$slider.stop().animate({
					"margin-left": currentPos + "px"
				},1000);
			}

			function moveBackward() {
				if (currentSlide === 1) {// if first slide => move to last
					currentSlide = slidesQty;
					currentPos = -(slidesQty-1) * width;
					$slider.stop().animate({'margin-left': currentPos}, 1000);
					return
				}
				currentPos += width;
				currentSlide--;
				
				$slider.stop().animate({
					"margin-left": currentPos + "px"
				},1000);
			}

		});

	};

})(jQuery);
	

