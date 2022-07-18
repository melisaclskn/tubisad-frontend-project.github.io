if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    
var myNav = document.querySelector("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
}};

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
  