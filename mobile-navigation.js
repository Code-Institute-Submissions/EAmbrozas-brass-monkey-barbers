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