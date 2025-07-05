(function ($) {
  'use strict';

  $(window).on('load', function () {
    /* ---------------------------------------------
  PRELOADER
  --------------------------------------------- */
    $('body').addClass('hide-loader');
  });

  /* ---------------------------------------------
  STICKY HEADER
  --------------------------------------------- */
  const body = document.body;
  const scrollUp = 'scroll-up';
  const scrollDown = 'scroll-down';
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  /* ---------------------------------------------
  MENU TOGGLE
  --------------------------------------------- */
  $('body').on('click', '.burger', function (event) {
    $(event.currentTarget).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
    return false;
  });

  /* ---------------------------------------------
  CLICK OUTSIDE
  --------------------------------------------- */
  $(document).on('click', function (e) {
    let currentSelect = $('.nav-menu');
    let closeBtn = $('.burger');
    if (currentSelect.hasClass('active')) {
      if (
        !currentSelect.is(e.target) &&
        !closeBtn.is(e.target) &&
        closeBtn.has(e.target).length === 0 &&
        currentSelect.has(e.target).length === 0
      ) {
        currentSelect.removeClass('active');
        $('.burger').removeClass('active');
        $('body').removeClass('no-scroll');
      }
    }
  });

  /* ---------------------------------------------
  PARALLAX HOVER
  --------------------------------------------- */
  if ($('.scene')[0]) {
    $('.scene').each(function (index, element) {
      new Parallax(element);
    });
  }

  /* ---------------------------------------------
  PORTFOLIO CARD ANIMATION
  --------------------------------------------- */
  if ($('.portfolio__item')[0]) {
    $(function () {
      var card = $('.portfolio__item');
      card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();

        var rY = map(x, 0, $(this).width(), -10, 10);
        var rX = map(y, 0, $(this).height(), -10, 10);

        $(this)
          .children('.item-cover')
          .css(
            'transform',
            'rotateY(' + rY + 'deg)' + ' ' + 'rotateX(' + -rX + 'deg)'
          );
      });

      card.on('mouseenter', function () {
        $(this)
          .children('.item-cover')
          .css({
            transition: 'all ' + 0.05 + 's' + ' linear',
          });
      });

      card.on('mouseleave', function () {
        $(this)
          .children('.item-cover')
          .css({
            transition: 'all ' + 0.25 + 's' + ' linear',
          });

        $(this)
          .children('.item-cover')
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
})(jQuery);
