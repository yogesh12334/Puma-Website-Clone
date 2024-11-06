window.onscroll = function() {stickyElements()};

var navbar = document.querySelector(".nav");

var navbarSticky = navbar.offsetTop; 

function stickyElements() {
  if (window.pageYOffset > navbarSticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  

}
