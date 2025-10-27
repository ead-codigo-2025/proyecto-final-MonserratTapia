(function ($) {
  "use strict";

    /*post gallery*/

    $(".post_gallery").owlCarousel({
        loop: true,
        margin: 1,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
        },
    });

    
   /* scroll */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
})(jQuery);