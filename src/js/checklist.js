var barPoints = [ 1, 3, 2, 0, 0, 0];

function hasSelected(){

}


$('.answers').on('click','li',function(){
  console.log('wah');
  $(this).siblings().removeAttr('class').addClass('passive');
  $(this).removeAttr('class').addClass('active');
  $(this).parents('.layer').find('.btn-next').addClass('active');
});

// Calculate results and assign percentages to the result bars
$('#calculate-results').on('click', function(){


  var max = Math.max.apply(null, barPoints);
  console.log(max);
  $('#resultBars').find('.bar').each(function(){
    var n = barPoints[$(this).index()];
    var pct = Math.round((n * 100) / max);
    console.log(pct);
    $(this).css('height',pct+"%");
  });
});
