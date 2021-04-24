jQuery(document).ready(function () {
  //  sticky navbar
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 0) {
      jQuery('.navbar_wrapper ').addClass("navbar-fixed");
    } else {
      jQuery('.navbar_wrapper ').removeClass("navbar-fixed");
    }

  });
  jQuery(".bar_line").click(function () {
    jQuery(this).hide();
    jQuery(".times_icon").show();
    jQuery(".right_shapes").hide();

  });
  jQuery(".times_icon").click(function () {
    jQuery(this).hide();
    jQuery(".bar_line").show();
    jQuery(".right_shapes").show();


  });

  // Multi Level Nested Dropdown and Navbar
  jQuery("#navbar").bootnavbar();
  jQuery("#home_current").mouseenter(function () {


  });



  // Waypoint For Counter
  jQuery('.counter').counterUp({
    delay: 10,
    time: 1200
  });





});
// For Video Pause after closing
var myVideo = document.getElementById("video_btn_close");

function playPause() {
  if (myVideo.play)
    myVideo.pause();


}
// Slider Swiper JS

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

});

//Tesimonial Swiper JS
var swiper = new Swiper('.swiper-container2', {

  navigation: {
    nextEl: '.fa-arrow-right',
    prevEl: '.fa-arrow-left',
  },
});

// AOS On Page Scroll JS
jQuery(function() {
  AOS.init({
    duration: 1100,
    offest: 50,
  });
});