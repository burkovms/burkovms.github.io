(function ($) {
  'use strict';

  $(window).on('load', function () {
    /*--------------------- PRELOADER --------------------*/
    $('body').addClass('hide-loader');
  });

  /* ----------------------- MENU ---------------------- */
  $('body').on('click', '.header-toggle', function (event) {
    $(event.currentTarget).toggleClass('header-toggle-close');
    $('.nav-menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
    return false;
  });

  /*------------------ HORIZONTAL SCROLL	------------------*/
  $('#wrapper').mousewheel(function (event, delta) {
    this.scrollLeft -= delta * 120;
    event.preventDefault();
  });

  $('#wrapper').scroll(function () {
    var section1 = $('.section-1').width(),
      coordSection2 = $('.section-2').offset().left;

    if (coordSection2 - section1 / 2 <= 0) {
      $('.section-2').addClass('active');
    }
  });

  /*------------------- HOVER PROJECTS	-------------------*/
  if ($('.portfolio-item')[0]) {
    $(function () {
      var card = $('.portfolio-item');
      card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();

        var rY = map(x, 0, $(this).width(), -10, 10);
        var rX = map(y, 0, $(this).height(), -10, 10);

        $(this)
          .children('.image')
          .css(
            'transform',
            'rotateY(' + rY + 'deg)' + ' ' + 'rotateX(' + -rX + 'deg)'
          );
      });

      card.on('mouseenter', function () {
        $(this)
          .children('.image')
          .css({
            transition: 'all ' + 0.05 + 's' + ' linear',
          });
      });

      card.on('mouseleave', function () {
        $(this)
          .children('.image')
          .css({
            transition: 'all ' + 0.25 + 's' + ' linear',
          });

        $(this)
          .children('.image')
          .css(
            'transform',
            'rotateY(' + 0 + 'deg)' + ' ' + 'rotateX(' + 0 + 'deg)'
          );
      });

      function map(x, in_min, in_max, out_min, out_max) {
        return (
          ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
      }
    });
  }

  /* -------------------- PARALLAX HOVER ------------------- */
  if ($('.scene')[0]) {
    $('.scene').each(function (index, element) {
      new Parallax(element);
    });
  }

  /* ------------------- SLIDER PROJECTS ------------------ */
  if ($('.portfolio-slider')[0]) {
    $('.portfolio-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      speed: 800,
      cssEase: 'ease-out',
      touchThreshold: 100,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  /*----------------- SCROLL SECTION	-----------------*/
  $('.footer-scroll').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('#wrapper').animate(
        {
          scrollLeft: target.offset().left,
        },
        600
      );
    }
  });
})(jQuery);
