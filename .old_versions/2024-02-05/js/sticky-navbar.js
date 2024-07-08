/* HUGE THANKS TO
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
FOR THIS SCRIPT */

// When the user scrolls the page, execute makeNavSticky
window.onscroll = function() {makeNavSticky()}

// Get the navbar
let navbar = document.getElementById("pseudo-navbar")

// Get the offset position of the navbar
let sticky = navbar.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavSticky() {
    if (window.scrollY >= sticky)
        navbar.classList.add("sticky")
    else
        navbar.classList.remove("sticky")
}