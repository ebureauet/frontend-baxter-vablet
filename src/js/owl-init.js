var $owl = $('.owl-carousel');
$owl.owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  items: 1,
  touchDrag: true
});

var $owlSlide3 = $(".owl-slide3");
var $owlitem = $(".owl-item");
var $slideNav = $(".slide-nav");
var $teaser = $(".teaser");
var $overlay = $(".overlay");

$('[data-toggle="slideTo"]').on('click',function(e){

  var target = $(this).data('target');
  var targetPos = $(target).parent().index();
  $('.slide-nav').find('.slide-thumb').filter(':eq('+targetPos+')').trigger('click');
  console.log($('.slide-nav').find('.slide-thumb').filter(':eq('+targetPos+')'))
});

$owl.on('changed.owl.carousel', function(event) {
  //update side nav
  var slideIndex = event.item.index;
  var scrollToPos = $(".slide-nav div").height() * slideIndex;
  $slideNav.scrollTop(scrollToPos);
  $slideNav.find("div").removeClass("active");
  $slideNav.find("div").eq(slideIndex).addClass("active");

  //free up memory - remove background images on all slides but active, previous and next to prevent crash
  $owlitem.addClass("clear");
  $owlitem.eq(slideIndex).removeClass("clear");
  $owlitem.eq(slideIndex-1).removeClass("clear");
  $owlitem.eq(slideIndex+1).removeClass("clear");

  //reset states
  $owlSlide3.find(".slide-overlay-info").removeClass('hidden').removeClass('visible');
  $teaser.removeClass('displaynone');
  $overlay.addClass('displaynone');
  $owlitem.removeClass('post-teaser-active');
});




//slide 3 related
$(".slide-btn-show").click(function(e){
  e.preventDefault();
  var $slide = $(this).closest(".owl-slide");
  $slide.find(".slide-overlay-info").removeClass('visible').addClass('hidden');
  $slide.find(".slide-overlays .slide-overlay-info").eq( $(this).index() ).removeClass('hidden').addClass('visible');
});
$(".slide-overlay-info .close").click(function(e){
  e.preventDefault();
  var $slide = $(this).closest(".owl-slide");
  $slide.find(".slide-overlay-info").removeClass('visible').addClass('hidden');
  $slide.find(".slide-overlay-init").eq( $(this).index() ).removeClass('hidden').addClass('visible');
});



$owl.on('translated.owl.carousel', function(event) {
  $('.owl-slide .layer').removeClass('active').filter('.layer--01').addClass('active');
});
