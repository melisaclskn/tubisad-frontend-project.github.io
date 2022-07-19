// $(document).ready(function() {
//   // Your codes here
// });



//when scroll , show back top button.
if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {

  var back_top = document.querySelector("#back_top");

  window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
      back_top.style.display = "block";
    } else {
      back_top.style.display = "none";
    }
  }
};
$(document).ready(function () {

  $('#back_top').hide();
});
/****** */
// $(function () {
//   $("#btnSubmit").click(function () {
//     let email, password;
//     email = jQuery.trim($("#user_email").val());
//     password = jQuery.trim($("#user_password").val());


//     //validation  email
//     if (email == "") {
//       $("#validation_email").html("Email boş geçilemez...")
//     } else if (regexEmail(email) == false) {
//       $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
//     }

//     //regex email
//     function regexEmail(email) {
//       let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return regex.test(email);
//     }

//     //validation  password
//     if (password == "") {
//       $("#validation_password").html("password boş geçilemez...")
//     } else if (regexPassword(password) == false) {
//       $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
//     }

//     //regex email
//     function regexPassword(password) {
//       let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
//       return regex.test(password);
//     }
//   })//onclick close
// }); //document ready close


let date = () => {

  // var x=document.getElementById("date_id");
  // var date=new Date();
  // document.getElementById("date_id").innerHTML = date.getDay;
  var x=document.getElementById("date_id");
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var clock=dateObj.getHours();
  var clock1=dateObj.getUTCMinutes();
  newdate = day + "/" + month + "/" + year+" "+clock+":"+clock1;
  document.getElementById("date_id").innerHTML = newdate;

  const cssObject = {
    "color": "#F0C6D4",
    "box-shadow": "1px 1px 3px 1px rgba(255,255,255,.8)",
    "margin-top": "10px"
  }
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $("#date_id").css(cssObject);
  //autocomplete 
  //backtotop
}