/* This is the begging of the Menu.js javascript file */
/*This is the begging of the myNav Function */
window.onload = function myNav() {
        var nav = document.getElementById("myTopnav");
        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }

    }
    /* This is the begging of the mySticks javascript function */
window.onload = function mySticks() {
    var stick = document.getElementById("mySticksId");
    if (stick === "mystick") {
        stick += " response";
    } else {
        stick = "mystick";
    }

}