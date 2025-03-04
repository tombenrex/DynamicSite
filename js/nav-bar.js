// Skrivt själv
const menuButton = document.querySelector(".menu-toggle-btn");
const navigationMenu = document.querySelector(".navbar");

const toggleMenuVisibility = function () {
  navigationMenu.classList.toggle("visible");
};

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenuVisibility();
});

// Hide menu when clicking outside // Copilot
document.addEventListener("click", (event) => {
  if (
    !navigationMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    navigationMenu.classList.remove("visible");
  }
});
