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
var sideNav = $(".side-menu, .overlay-menu, .menu");

$(".menu").on('click',function(e) {
  sideNav.toggleClass("active");
});

$(".sidebtn-close").on("click",function(e) {
  sideNav.toggleClass("active");
});

$(".slide-nav div").click(function(e) {
 $owl.trigger('to.owl.carousel',[$(this).index(),200, true]);
  closeSideMenu();
});

$( ".sidebtn-home" ).click( function( e ) {
  $owl.trigger( 'to.owl.carousel', [0, 200, true] );
closeSideMenu();
});
$( ".sidebtn-contact" ).click( function( e ) {
  $owl.trigger( 'to.owl.carousel', [11, 200, true] );
  closeSideMenu();
});

function closeSideMenu() {
  sideNav.removeClass("active");
}








  function btnPositions(){
    $('.btn[data-pos]').each(function(){
      var pos = $(this).data("pos").split(",");
      var size = $(this).data("size").split(",");
      $(this).css({
        "left" : parseInt(pos[0]),
        "top" : parseInt(pos[1]),
        "width" : parseInt(size[0]),
        "height" : parseInt(size[1])
      });
    });
  }

  btnPositions();



  $('.flipcard').on('click', function(e){
    $(this).toggleClass('flipcard--flipped');
  })

  $('.flipcard .btn-cta').on('click', function(e){
    e.stopPropagation();
  });



  // specific slide event
  $('.slide-clinic-challenges .prop-center').fadeOut('200');
  $('.slide-clinic-challenges .flipcard').on('click', function(e){
    if ($('.slide-clinic-challenges').find('.flipcard--flipped').length == 0){
      $('.slide-clinic-challenges .prop-center').fadeOut('200');
    }else{
      $('.slide-clinic-challenges .prop-center').fadeIn('200');
    }
  })
