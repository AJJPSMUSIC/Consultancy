/* @AJJPSMUSIC */

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

	function initComparisons() {
			  var x, i;
			  /* Find all elements with an "overlay" class: */
			  x = document.getElementsByClassName("img-comp-overlay");
			  for (i = 0; i < x.length; i++) {
			    /* Once for each "overlay" element:
			    pass the "overlay" element as a parameter when executing the compareImages function: */
			    compareImages(x[i]);
			  }
			  function compareImages(img) {
			    var slider, img, clicked = 0, w, h;
			    /* Get the width and height of the img element */
			    w = img.offsetWidth;
			    h = img.offsetHeight;
			    /* Set the width of the img element to 50%: */
			    img.style.width = (w / 2) + "px";
			    /* Create slider: */
			    slider = document.createElement("DIV");
			    slider.setAttribute("class", "img-comp-slider");
			    /* Insert slider */
			    img.parentElement.insertBefore(slider, img);
			    /* Position the slider in the middle: */
			    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
			    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
			    /* Execute a function when the mouse button is pressed: */
			    slider.addEventListener("mousedown", slideReady);
			    /* And another function when the mouse button is released: */
			    window.addEventListener("mouseup", slideFinish);
			    /* Or touched (for touch screens: */
			    slider.addEventListener("touchstart", slideReady);
			     /* And released (for touch screens: */
			    window.addEventListener("touchend", slideFinish);
			    function slideReady(e) {
			      /* Prevent any other actions that may occur when moving over the image: */
			      e.preventDefault();
			      /* The slider is now clicked and ready to move: */
			      clicked = 1;
			      /* Execute a function when the slider is moved: */
			      window.addEventListener("mousemove", slideMove);
			      window.addEventListener("touchmove", slideMove);
			    }
			    function slideFinish() {
			      /* The slider is no longer clicked: */
			      clicked = 0;
			    }
			    function slideMove(e) {
			      var pos;
			      /* If the slider is no longer clicked, exit this function: */
			      if (clicked == 0) return false;
			      /* Get the cursor's x position: */
			      pos = getCursorPos(e)
			      /* Prevent the slider from being positioned outside the image: */
			      if (pos < 0) pos = 0;
			      if (pos > w) pos = w;
			      /* Execute a function that will resize the overlay image according to the cursor: */
			      slide(pos);
			    }
			    function getCursorPos(e) {
			      var a, x = 0;
			      e = (e.changedTouches) ? e.changedTouches[0] : e;
			      /* Get the x positions of the image: */
			      a = img.getBoundingClientRect();
			      /* Calculate the cursor's x coordinate, relative to the image: */
			      x = e.pageX - a.left;
			      /* Consider any page scrolling: */
			      x = x - window.pageXOffset;
			      return x;
			    }
			    function slide(x) {
			      /* Resize the image: */
			      img.style.width = x + "px";
			      /* Position the slider: */
			      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
			    }
			  }
			}
	
	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);
