
'use strict';


//  $(document).ready(function(){
//   $(".toggle-menu").on('toggle',function () {
//     $(".navbar-menu").animate({left: '80px'})

   
//     })
//   });
$(document).ready(function() {
  $('.toggle-menu').on('click', function() {
    $('.navbar-menu').toggleClass('visible');
    $('.short-logo,.open-menu').toggleClass('hide');
    $('.close-menu').toggleClass('show');
  });
});


$(window).scroll(function() {
  if ($(this).scrollTop()>50) {
      $('.backtotopbtn').fadeIn();
      
  } else {
      $('.backtotopbtn').fadeOut();
  }
});
$(".backtotopbtn").click(function() {
  $("html, body").animate({scrollTop: 0}, 1000);
});
     