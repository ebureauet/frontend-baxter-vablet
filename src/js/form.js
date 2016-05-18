$("input[type='text'], input[type='email'], #vablet_country").focus(function(){
  $(this).removeClass('error');
});
$("#chbox-disclamer").click(function(){
  $(this).siblings('label').removeClass('error');
});
$("#chbox-demonstration, #chbox-call, #chbox-visit").click(function(){
  $("#chbox-demonstration, #chbox-call, #chbox-visit").siblings('label').removeClass('error');
});

$(".form-success-close").click(function(){
  $(".form-success").fadeOut();
});

$("form").submit(function(e){
  e.preventDefault();
  var checkedBoxes = "";
  $( "input[name='chbox-contacttype']:checked" ).each( function() {
    checkedBoxes += $(this).val() + " ";
  });

  $("#vablet_contact-type-requested").val(checkedBoxes);
  
  var errorCounter = 0;
  if ( isTextValid($("#vablet_first-name")) == false ) errorCounter++;
  if ( isTextValid($("#vablet_last-name")) == false ) errorCounter++;
  if ( isEmailValid($("#vablet_email")) == false ) errorCounter++;
  if ( isSelectValid($("#vablet_country")) == false ) errorCounter++
  if ( isCheckboxValid($("#chbox-disclamer")) == false) errorCounter++
  if ( isSignupForSectionValid() == false ) errorCounter++;

  if (errorCounter > 0) return false;
  else {
    $(".form-loading").show();
    VabletFormTools.sendFormAsSurvey( 'Baxter_form', function () {
      $(".form-loading").hide();
      $(".form-success").show();
      //reset form elements
      $("input[type='text']").val('');
      $("input[type='email']").val('');
      $("select").prop("selectedIndex", 0);
      $("input[type='checkbox']").prop( "checked", false );
    }, true);

    // var mailText = "";
    // mailText += "First name: "+$("#vablet_fist-name").val()+"\n";
    // mailText += "Last name: "+$("#vablet_last-name").val()+"\n";
    // mailText += "Email: "+$("#vablet_email").val()+"\n";
    // mailText += "Country code: "+$("#vablet_country").val()+"\n";
    // mailText += "Sign up for:"+"\n";
    // if ($("#chbox-demonstration").prop('checked') === true) {
    //   mailText += "- demonstration\n";
    // }
    // if ($("#chbox-call").prop('checked') === true) {
    //   mailText += "- sales call\n";
    // }
    // if ($("#chbox-visit").prop('checked') === true) {
    //   mailText += "- visit\n";
    // }
    // //send email
    // VabletNativeInterface.callNativeMethod('SendEmail', {
    //   'subject': 'Vablet',
    //   'body': mailText,
    //   'to': 'mam@kunde.dk',
    //   'cc': '',
    //   'bcc': '',
    //   'attachmentDataBase64Encoded': 'PHRlc3Q+dGVzdCBtZTwvdGVzdD4=',
    //   'attachmentName': ''
    //   }, function (response) {
    //     if (response.success) $(".form-success").show();
    //     //reset form elements
    //     $("input[type='text'], input[type='email']").val('');
    //     $("select").prop("selectedIndex", 0);
    //     $("input[type='checkbox']").prop( "checked", false );
    // }, null);
  }
});

function isTextValid(target) {
  if (target.val() == "") {
    target.addClass('error');
    return false;
  }
  else {
    return true;
  }
}

function isSelectValid(target) {
  if (target.val() == null) {
    target.addClass('error');
    return false;
  }
  else {
    return true;
  }
}

function isEmailValid(target) {
  var email_regex = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if( !email_regex.test(target.val()) ) {
    target.addClass('error');
    return false;
  }
  else {
    return true;
  }
}

function isCheckboxValid(target) {
  if (target.prop('checked') === true) {
    return true;
  }
  else {
    target.siblings('label').addClass('error');
    return false;
  }
}

function isSignupForSectionValid() {
  if ( $("#chbox-demonstration").prop('checked') === false &&
       $("#chbox-call").prop('checked') === false &&
       $("#chbox-visit").prop('checked') === false ) {
        $("#chbox-demonstration, #chbox-call, #chbox-visit").siblings('label').addClass('error');
        return false;
  }
  else  {
    return true;
  }
}