function myFunction() {
  var color = document.getElementById("color-input").value;
  if (color.toLowerCase() === "#000000") {
    alert("I told you not so! U");
    location.href = "hiddenpage.html"; // Copy this line from stackoverflow
  } else {
    document.body.style.background = color;
  }
}
