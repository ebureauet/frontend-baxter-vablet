window._alert = window.alert;
window.alert = function () {
};

FastClick.attach(document.body);

$video = $(".owl-slide2 video");
if ($video.length){
  $(".play").click(function(e){
    e.preventDefault();
    $video.attr('src', $video.attr('data-src'));
    $video[0].play();
    $( this ).hide();
  });
  $video[0].addEventListener('webkitendfullscreen', function (e) {
    $video.hide();
    $video.attr('src', "#");
    $( ".play" ).show();
  });
  $video[0].addEventListener('pause', function() {
    $( ".play" ).show();
  });
  $video[0].addEventListener('loadeddata', function() {
    $video.show();
    // $video[0].play();
    $video[0].webkitEnterFullscreen();
  }, false);
}


$(".teaser").click(function(e){
  e.preventDefault();
  $(this).addClass('displaynone');
  $(this).closest('.owl-item').addClass('post-teaser-active');
});

$(".subtitle").click(function(e){
  e.preventDefault();
  var $overlay = $(this).closest('.owl-slide').find('.overlay');
  if ($overlay.length > 0) {
    $overlay.removeClass('displaynone');
  }
});
$(".overlay-close").click(function(e){
  e.preventDefault();
  $(this).closest('.overlay').addClass('displaynone');
});
