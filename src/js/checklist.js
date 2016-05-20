var barPoints = [ 0, 0, 0, 0, 0, 0];

function hasSelected(){

}


$('.answers').on('click','li',function(){
  console.log('wah');
  $(this).siblings().removeAttr('class').addClass('passive');
  $(this).removeAttr('class').addClass('active');
  $(this).parents('.layer').find('.btn-next').addClass('active');

  var $this = $(this);

});




// Calculate results and assign percentages to the result bars
$('#calculate-results').on('click', function(){

  //Answer for Question 6
  var n = $(this).parent().find(".answers li.active").index();
  var answer = String.fromCharCode(65 + n);

  switch(answer) {
    case "A":
        barPoints[0] = barPoints[0] + 0.5;
        barPoints[1] = barPoints[1] + 0.5;
        break;
    case "B":
        barPoints[1] = barPoints[1] + 0.5;
        barPoints[2] = barPoints[2] + 0.5;
        break;
    case "C":
        barPoints[2] = barPoints[2] + 0.5;
        barPoints[3] = barPoints[3] + 0.5;
        break;
    case "D":
        barPoints[3] = barPoints[3] + 0.33;
        barPoints[4] = barPoints[4] + 0.33;
        barPoints[5] = barPoints[5] + 0.33;
        break;
  }
  console.log(answer);
  console.log(barPoints);



  var max = Math.max.apply(null, barPoints);
  console.log(max);
  $('#resultBars').find('.bar').each(function(){
    var n = barPoints[$(this).index()];
    var pct = Math.round((n * 100) / max);
    console.log(pct);
    $(this).css('height',pct+"%");

    $(this).find('.counter').each(function() {
      var $this = $(this),
          countTo = pct;

      $(this).text(0);

      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum)+'%');
        },
        complete: function() {
          $this.text(this.countNum+'%');
          //alert('finished');
        }

      });
    });
  });



});
//Reset value
$("#get-started").on("click", function(){
    barPoints = [ 0, 0, 0, 0, 0, 0];
});


$("#answer-1").on('click', function(){
  var n = $(this).parent().find(".answers li.active").index();
  var answer = String.fromCharCode(65 + n);
    
  
  switch(answer) {
    case "A":
        barPoints[0] = barPoints[0] + 1;
        break;
    case "B":
        barPoints[1] = barPoints[1] + 0.5;
        barPoints[2] = barPoints[2] + 0.5;
        break;
    case "C": case "E":
        barPoints[2] = barPoints[2] + 0.5;
        barPoints[3] = barPoints[3] + 0.5;
        break;
    case "D":
        barPoints[3] = barPoints[3] + 0.33;
        barPoints[4] = barPoints[4] + 0.33;
        barPoints[5] = barPoints[5] + 0.33;
        break;
  }

  console.log(answer);
  console.log(barPoints);

});

$("#answer-2").on('click', function(){
  var n = $(this).parent().find(".answers li.active").index();
  var answer = String.fromCharCode(65 + n);
  
  switch(answer) {
    case "A":
        barPoints[0] = barPoints[0] + 0.5;
        barPoints[1] = barPoints[1] + 0.5;
        break;
    case "B":
        barPoints[1] = barPoints[1] + 0.5;
        barPoints[2] = barPoints[2] + 0.5;
        break;
    case "C":
        barPoints[3] = barPoints[3] + 0.5;
        barPoints[4] = barPoints[4] + 0.5;
        break;
    case "D":
        barPoints[3] = barPoints[3] + 0.33;
        barPoints[4] = barPoints[4] + 0.33;
        barPoints[5] = barPoints[5] + 0.33;
        break;
    case "E":
        barPoints[5] = barPoints[5] + 1;
  }
  console.log(answer);
  console.log(barPoints);

});

$("#answer-3").on('click', function(){
  var n = $(this).parent().find(".answers li.active").index();
  var answer = String.fromCharCode(65 + n);
  
  switch(answer) {
    case "A":
        barPoints[0] = barPoints[0] + 1;
        break;
    case "B": case "C":
        barPoints[1] = barPoints[1] + 1;
        break;
    case "D":
        barPoints[2] = barPoints[2] + 1;
        break;
    case "E":
        barPoints[3] = barPoints[3] + 0.5;
        barPoints[4] = barPoints[4] + 0.5;
        break;
    case "F":
        barPoints[5] = barPoints[5] + 1;
        break;
    case "G":
        barPoints[4] = barPoints[4] + 0.5;
        barPoints[5] = barPoints[5] + 0.5;
        break;
  }
  console.log(answer);
  console.log(barPoints);
});

$("#answer-4").on('click', function(){
  var n = $(this).parent().find(".answers li.active").index();
  var answer = String.fromCharCode(65 + n);
  
  switch(answer) {
    case "A": case "B":
        barPoints[0] = barPoints[0] + 0.5;
        barPoints[1] = barPoints[1] + 0.5;
        break;
    case "C":
        barPoints[1] = barPoints[1] + 0.5;
        barPoints[2] = barPoints[2] + 0.5;
        break;
    case "D":
        barPoints[2] = barPoints[2] + 0.25;
        barPoints[3] = barPoints[3] + 0.25;
        barPoints[4] = barPoints[4] + 0.25;
        barPoints[5] = barPoints[5] + 0.25;
        break;
  }
  console.log(answer);
  console.log(barPoints);
});

$("#answer-5").on('click', function(){
  var n = $(this).parent().find(".answers li.active").index();
  var answer = String.fromCharCode(65 + n);
  
  switch(answer) {
    case "A":
        barPoints[0] = barPoints[0] + 0.5;
        barPoints[1] = barPoints[1] + 0.5;
        break;
    case "B":
        barPoints[1] = barPoints[1] + 0.5;
        barPoints[2] = barPoints[2] + 0.5;
        break;
    case "C":
        barPoints[2] = barPoints[2] + 1;
        break;
    case "D":
        barPoints[3] = barPoints[3] + 0.33;
        barPoints[4] = barPoints[4] + 0.33;
        barPoints[5] = barPoints[5] + 0.33;
        break;
    case "E":
        barPoints[4] = barPoints[4] + 0.5;
        barPoints[5] = barPoints[5] + 0.5;
        break;
  }
  console.log(answer);
  console.log(barPoints);
});