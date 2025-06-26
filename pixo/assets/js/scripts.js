(function(){
	$(window).on('load', function(){
		$('body').removeClass('animated-home');
		/*--------------------------- WOW ----------------------------*/
		if( $( '.wow' )[0] ){
			function wowWidth() {
				new WOW({
					mobile: true,
				}).init();
			}
			wowWidth();
		}

		/* ---------------------- SLIDER-HOME --------------------- */
		if( $( '.slider-home' )[0] ){
			$('.slider-home').slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 6000,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 800,
				arrows: true,
				dots: true,
				fade: true,
				lazyLoad: 'progressive',
				pauseOnHover: true,
				nextArrow: '<div class="slick-nav arrow-next"><img class="angle-right" src="assets/img/arrow-black-right.svg" alt="img"></div>',
				prevArrow: '<div class="slick-nav arrow-prev"><img class="angle-left" src="assets/img/arrow-black-left.svg" alt="img"></div>',
				responsive: [
				{
					breakpoint: 768,
					settings: {
						dots: false,
					}
				}
				]
			});
		}
	});

	/* ----------------------- MENU ---------------------- */
	$('.nav-btn').on('click', function(){
		$('.nav-menu').toggleClass('active');
		$(this).toggleClass('active');
		$('body').toggleClass('no-scroll');
		return false;
	});

	/* ---------------------- SCROLL HEADER  --------------------- */
	function searchBlockPosition() {
		if ($(window).scrollTop() > 50) {
			$('header').addClass('header-scroll');
		} else {
			$('header').removeClass('header-scroll');
		}
	}
	searchBlockPosition();
	$(window).on('scroll', function(){
		searchBlockPosition();
	});


	/* ---------------------- SLIDER-REVIEWS --------------------- */
	if( $( '.reviews-slider' )[0] ){
		$('.reviews-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 1000,
			arrows: false,
			dots: false,
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '9%',
				}
			}
			]
		});
	}

	/* ---------------------- OFFICE-SLIDER --------------------- */
	if( $( '.office-slider' )[0] ){
		$('.office-slider').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 800,
			arrows: true,
			dots: true,
			centerMode: true,
			centerPadding: '26%',
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			nextArrow: '<div class="slick-nav arrow-next"></div>',
			prevArrow: '<div class="slick-nav arrow-prev"></div>',
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
					centerPadding: '0%',
				}
			}
			]
		});
	}

	/* ---------------------- FANCYBOX 3 --------------------- */
	if( $( '[data-fancybox]' )[0] ){
		$( '[data-fancybox]' ).fancybox({
			loop: true,
			infobar: false,
			transitionEffect: 'tube',
			buttons: [
			'close'
			],
		});
	}
	/*-------------------- SCROLL SECTION	--------------------*/
	if( $( '.arrow-scroll' )[0] ){
		$('.arrow-scroll').on('click', function(){
			var scroll_el = $(this).attr('href');
			if ($(scroll_el).length != 0) {
				$('html, body').animate({
					scrollTop: $(scroll_el).offset().top
				}, 500);
			}
			return false;
		});
	}

}());
