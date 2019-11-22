$( document ).ready(function() {
  var savemaSwitch = '.savema-header-mobile-info-switch a';
  $(savemaSwitch).on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(savemaSwitch).find('span').removeClass('showtime');
    $(this).find('span').addClass('showtime');

    var title = $(this).attr('title');
    var location = $(this).attr('href');
    var gates = $('.savema-header-mobile-info-gate').find('a');
    var hideMe = 'uk-hidden';
    var showMe = 'uk-visible';
    var display = $('.savema-header-mobile-info-title');

    for(var i = 0; i < gates.length; i++) {
      var gate = $(gates[i]);
      if (gate.is(location)) {
        if (gate.hasClass(hideMe)) {
          gate.removeClass(hideMe).addClass(showMe);
        }
      } else {
        gate.removeClass(showMe).addClass(hideMe);
      }
    }
    display.text(title);
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(document).scroll(function() {
  var mobileInfo = '.savema-header-mobile-info';
  var scrollClass = 'savema-scrolled';
  $(mobileInfo).toggleClass(scrollClass, $(document).scrollTop() >= 100);
});

//phone number velidation
function numere(e) {
  var unicode = e.charCode ? e.charCode : e.keyCode;
  if (unicode != 8) {
    if (unicode < 48 || unicode > 57)
      return false
  }
}

function limitarelungime(obj, length) {
  var lungime = length;
  if (obj.value.length > lungime)
    obj.value = obj.value.substring(0, lungime)
}

//email form validation

function everif(str) {

  var at = "@";
  var punct = ".";
  var lat = str.indexOf(at);
  var lstr = str.length;
  var lpunct = str.indexOf(punct);
  if (str.indexOf(at) == -1) {
    alert("Valid email must be entered");
    return false
  }

  if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
    alert("Valid email must be entered");
    return false
  }

  if (str.indexOf(punct) == -1 || str.indexOf(punct) == 0 || str.indexOf(punct) == lstr) {
    alert("Valid email must be entered");
    return false
  }

  if (str.indexOf(at, (lat + 1)) != -1) {
    alert("Valid email must be entered");
    return false
  }

  if (str.substring(lat - 1, lat) == punct || str.substring(lat + 1, lat + 2) == punct) {
    alert("Valid email must be entered");
    return false
  }

  if (str.indexOf(punct, (lat + 2)) == -1) {
    alert("Valid email must be entered");
    return false
  }

  if (str.indexOf(" ") != -1) {
    alert("Valid email must be entered");
    return false
  }

  return true
}

function evalid() {
  var emailID = document.contact_form.mail;

  if (everif(emailID.value) == false) {
    emailID.focus();
    return false
  }

  //empty field validation

  var fname = document.contact_form.fname;
  if ((fname.value == null) || (fname.value == "")) {
    alert("Fields marqued with * must be entered");
    fname.focus();
    return false
  }

  var lname = document.contact_form.lname;
  if ((lname.value == null) || (lname.value == "")) {
    alert("Fields marqued with * must be entered");
    lname.focus();
    return false
  }

  var message = document.contact_form.message;
  if ((message.value == null) || (message.value == "")) {
    alert("Fields marqued with * must be entered");
    message.focus();
    return false
  }

  return true
}
