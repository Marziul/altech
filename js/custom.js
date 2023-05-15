// (function($) { // Begin jQuery
//     $(function() { // DOM ready
//       // If a link has a dropdown, add sub menu toggle.
//       $('nav ul li a:not(:only-child)').hover(function(e) {
//         $(this).siblings('.nav-dropdown').toggle();
//         // Close one dropdown when selecting another
//         $('.nav-dropdown').not($(this).siblings()).hide();
//         e.stopPropagation();
//       });
//       // Clicking away from dropdown will remove the dropdown class
//       $('html').hover(function() {
//         $('.nav-dropdown').hide();
//       });
//       // Toggle open and close nav styles on click
//       $('#nav-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
//       // Hamburger to X toggle
//       $('#nav-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
//     }); // end DOM ready
//   })(jQuery); // end jQuery

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

jQuery(document).ready(function ($) {





  $('.testi-item').slick({
    dots: true,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });




});



/*
  Responsive Menu
------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  
  var ph1_responsive_menu = $(".responsive-menu");
  
  $('body').on( "click", 'a.responsive-menu-hand', function() {    
    if($(".responsive-menu").hasClass('active')){
      $(".responsive-menu").slideUp();
      $(".responsive-menu").removeClass('active');
      $("body").removeClass('mobile-menu-active');
    }else{
      $(".responsive-menu").slideDown();
      $(".responsive-menu").addClass('active');
      $("body").addClass('mobile-menu-active');
    }
    return false;
  });
  
  $('body').on( "click", 'a.responsive-menu-close', function() {
    $(".responsive-menu").slideUp();
    $(".responsive-menu").removeClass('active');
    $("body").removeClass('mobile-menu-active');
  });
});

jQuery(window).scroll(function() {
  "use strict";
  
  var sa_body_scroll = jQuery(document).scrollTop();
      
  if (sa_body_scroll > 50) {
    jQuery('.sk_header').addClass('active');
  }else if(sa_body_scroll < 50){
    jQuery('.sk_header').removeClass('active');
  }
});