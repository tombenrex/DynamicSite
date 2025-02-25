function myFunction() {
  const color = document.getElementById("colorInput").value;
  if (color.toLowerCase() === "#000000") {
    alert("I told you not so!");
    location.href = "hiddenpage.html"; // Copy this line from stackoverflow
  } else {
    document.body.style.background = color;
  }
}

document.getElementById("colorInput").addEventListener("input", function () {
  document.getElementById("changeColor").style.color = this.value;
});
