// I have taken the code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
// Edited to suit the Brass Monkey Barbers
function navigationToggle() {
    var x = document.getElementById("mobile-menu");
    var y = document.getElementById("home");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.backgroundColor = "transparent";
    } else {
      x.style.display = "block";
      y.style.backgroundColor = "black";
    }
  }