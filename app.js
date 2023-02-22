/* SCROLL TO TOP ON REFRESH */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/* MOBILE MENU */
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

var coll = document.getElementsByClassName("collapsible__button");
var i;

/* DROP DOWN COLLAPSE */

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("c__active");
    var content = this.previousElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function changeName(id) {
  var btn = document.getElementById(id);
  if (btn.value == "on") {
    btn.value = "off";
    btn.innerHTML = "Show Less &nbsp";
  } else {
    btn.value = "on";
    btn.innerHTML = "Show More &nbsp";
  }
}

/* COUNTDOWN */

// Set the date we're counting down to
var countDownDate = new Date("December 31, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  /*
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  */
  var days = "?";
  var hours = "?";
  var minutes = "?";
  var seconds = "?";

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + "<span>Days</span>";
  document.getElementById("hours").innerHTML = hours + "<span>Hours</span>";
  document.getElementById("minutes").innerHTML =
    minutes + "<span>Minutes</span>";
  document.getElementById("seconds").innerHTML =
    seconds + "<span>Seconds</span>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown__timer").innerHTML = "DONE";
  }
}, 1000);
