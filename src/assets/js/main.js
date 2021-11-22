// (function ($) {

"use strict";

//===== Prealoder

$(window).on('load', function (event) {
  $('.preloader').delay(500).fadeOut(500);
});






//===== Back to top

// // Show or hide the sticky footer button
// $(window).on('scroll', function (event) {
//   if ($(this).scrollTop() > 600) {
//     $('.scroll-top-icon').fadeIn(200)
//   } else {
//     $('.scroll-top-icon').fadeOut(200)
//   }
// });


//Animate the scroll to yop
$('.scroll-top-icon').on('click', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0,
  }, 1500);
});



      //===== 


  // }(jQuery));