"use strict";

$(document).ready(function () {
  $(".testimonial-items").owlCarousel({
    loop: true,
    margin: 35,
    items: 2,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  });
  $(".pricing-package-info-wrap").owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      768: {
        items: 3,
        nav: true,
      },
      992: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
});
