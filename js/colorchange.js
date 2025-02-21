function changeColor() {
  const elements = document.querySelectorAll(".changeColor");
  elements.forEach(function (element) {
    element.classList.toggle("newColor");
  });

  const icon = document.getElementById("colorChangeIcon");
  if (icon.classList.contains("fa-solid", "fa-lightbulb")) {
    icon.classList.remove("fa-solid", "fa-lightbulb");
    icon.classList.add("fa-regular", "fa-lightbulb");
  } else {
    icon.classList.remove("fa-regular", "fa-lightbulb");
    icon.classList.add("fa-solid", "fa-lightbulb");
  }

  const button = document.getElementById("changeText");
  if (button.innerHTML.includes("Dark Mode")) {
    button.innerHTML = button.innerHTML.replace("Dark Mode", "Light Mode");
  } else {
    button.innerHTML = button.innerHTML.replace("Light Mode", "Dark Mode");
  }
}
