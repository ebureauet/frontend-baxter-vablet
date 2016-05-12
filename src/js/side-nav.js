/*
$(".btn-menu").click(function(e) {
  $(this).fadeOut(100);
  $(".overlay-menu").fadeIn(100);

  $(".side-menu").animate({
    left: 0
  }, {
    duration: 100,
    complete: function() {
      $(".btn").animate({ left: 240 }, 200);
    }
  });
});
$(".btn-close").click(function(e) {
  closeSideMenu();
});
$(".slide-nav div").click(function(e) {
 $owl.trigger('to.owl.carousel',[$(this).index(),200, true]);
  closeSideMenu();
});

$( ".btn-home" ).click( function( e ) {
  $owl.trigger( 'to.owl.carousel', [0, 200, true] );
closeSideMenu();
});
$( ".btn-contact" ).click( function( e ) {
  $owl.trigger( 'to.owl.carousel', [11, 200, true] );
  closeSideMenu();
});

function closeSideMenu() {
  $(".btn").animate({
    left: 195
  }, {
    duration: 100,
    complete: function() {
      $(".side-menu").animate({ left: -240 }, 200);
      $(".btn-menu").fadeIn(100);
      $(".overlay-menu").fadeOut(100);
    }
  });
}
*/
var sideNav = $(".side-menu, .overlay-menu, .btn-menu");

$(".btn-menu").on('click',function(e) {
  sideNav.toggleClass("active");
});

$(".btn-close").on("click",function(e) {
  sideNav.toggleClass("active");
});

$(".slide-nav div").click(function(e) {
 $owl.trigger('to.owl.carousel',[$(this).index(),200, true]);
  closeSideMenu();
});

$( ".btn-home" ).click( function( e ) {
  $owl.trigger( 'to.owl.carousel', [0, 200, true] );
closeSideMenu();
});
$( ".btn-contact" ).click( function( e ) {
  $owl.trigger( 'to.owl.carousel', [11, 200, true] );
  closeSideMenu();
});

function closeSideMenu() {
  $(".btn").animate({
    left: 195
  }, {
    duration: 100,
    complete: function() {
      $(".side-menu").animate({ left: -240 }, 200);
      $(".btn-menu").fadeIn(100);
      $(".overlay-menu").fadeOut(100);
    }
  });
}
