/* This is the begging of the Menu.js javascript file */
/*This is the begging of the myNav Function */
function myNav() {
        var nav = document.getElementById("myTopnav");
        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }

    }
    /* This is the begging of the mySticks javascript function [Formerly] */
/* function mySticks() {
    var stick = document.getElementById('MySticksId');
    if (stick === 'mystick') {
        stick += ' response';
    } else {
        stick = 'mystick';
    }

} */
/* This is the begging of the HeadAnimation javascript function */
function HeadAnimation() {
	var HA = document.getElementById('notblur');
	setTimeout(function(){document.getElementById('notblur').style.display = "none";},
	5000);
}
/*
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 15000); // Change image every 2 seconds
} 
*/