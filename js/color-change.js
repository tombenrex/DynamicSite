function myFunction() {
  var color = document.getElementById("color-input").value;
  if (color === "background (0, 0, 0)") {
    alert("NOT BLACK");
  } else {
    document.body.style.background = color;
  }
}
