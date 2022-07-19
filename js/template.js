//when scroll change the color of navbar
var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
}

//when scroll , show back top button.
if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    
  var back_top = document.querySelector("#back_top");
  
  window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
      back_top.style.display="block";
    } else {
      back_top.style.display="none";
    }
  }};
  $(document).ready(function() {

    $('#back_top').hide();
  });
  /****** */
  $(function () {
    $("#btnSubmit").click(function () {
      let email, password;
      email = jQuery.trim($("#user_email").val());
      password = jQuery.trim($("#user_password").val());
  
  
      //validation  email
      if (email == "") {
        $("#validation_email").html("Email boş geçilemez...")
      } else if (regexEmail(email) == false) {
        $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
      }
  
      //regex email
      function regexEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
      }
  
      //validation  password
      if (password == "") {
        $("#validation_password").html("password boş geçilemez...")
      } else if (regexPassword(password) == false) {
        $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
      }
  
      //regex email
      function regexPassword(password) {
        let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
        return regex.test(password);
      }
    })//onclick close
  }); //document ready close