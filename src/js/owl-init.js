$('.owl-carousel').find('.owl-slide').each(function(){
  var i = $(this).index();
  var rel = $(this).data('hash');
  $('.slide-nav').find('.slide-thumb').filter(':eq('+i+')').each(function(){
    $(this).attr('data-rel',rel);
  });
});

var n = 0;
$('.slide-nav').find('.slide-thumb').filter(':not(.hide)').each(function(){
  $(this).append('<i class="number">'+n+'</i>');
  n++;
});


var $owl = $('.owl-carousel');
$owl.owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  items: 1,
  touchDrag: true,
  URLhashListener:true,
  startPosition: 'URLHash'
});

var $owlSlide3 = $(".owl-slide3");
var $owlitem = $(".owl-item");
var $slideNav = $(".slide-nav");
var $teaser = $(".teaser");
var $overlay = $(".overlay");


function makeFrontBtns(){
  // create a clone of the buttons and append them to main container.
  // find slideto buttons.
  $('.owl-item.active').find('.layer.active .elements .btn[data-toggle="slideTo"]').each(function(){
    console.log($(this).prop('class'));
    var cl = $(this).prop('class');
    $(this).clone().removeAttr('class').addClass("btn-front "+cl).removeClass('btn').appendTo('.app');
  });
}

function deleteFrontBtns(){
  // clear the main container of cloned front buttons
  if ($('.btn-front').length){
    $('.btn-front').remove();
  }
}


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
  makeFrontBtns();
});

$owl.on('changed.owl.carousel', function(event) {
  setTimeout(function(){
        $('.owl-slide .layer').removeClass('active').filter('.layer--01').addClass('active');
    }, 400);

  deleteFrontBtns();
});

$('.app').on('click','.btn-front', function(e){
  console.log('slideto...');
  var target = $(this).data('target');
  var targetPos = $(target).parent().index();
  $('.slide-nav').find('.slide-thumb').filter(':eq('+targetPos+')').trigger('click');
});


//$('.owl-slide').each(function(){

function updateQueryStringParameter(uri, key, value) {
  console.log("test");
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    console.log(uri.replace(re, '$1' + key + "=" + value + '$2'));
    return uri.replace(re, '$1' + key + "=" + value + '$2') + uri.hash;
  }
  else {
    console.log(uri.replace(re, '$1' + key + "=" + value + '$2'));
    return uri + separator + key + "=" + value + uri.hash;
  }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

  $('.owl-slide').find('.layer [data-toggle="layer"]').on('click', function(){
    var target = $(this).data('target');
    $(target).siblings().removeClass('active');
    $(target).addClass('active');

    deleteFrontBtns();
    makeFrontBtns();
  });

//});
