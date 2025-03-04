// GPT
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });
});

// Skrivit själv

function createColorCycle() {
  const gradients = [
    "linear-gradient(to bottom left, #3700ff77, #9206f6)",
    "linear-gradient(to bottom left, #a3ee84, #037221)",
    "linear-gradient(to bottom left, #ff000057, #eb1919)",
    "linear-gradient(to bottom left, #003cff95, #00aeff)",
  ];
  let index = 0;

  return function getNextColor() {
    const color = gradients[index];
    index = (index + 1) % gradients.length;
    return color;
  };
}
const getNextColor = createColorCycle();

async function fetchGitHubRepos() {
  const response = await fetch("https://api.github.com/users/tombenrex/repos");
  repos = await response.json();
  const container = document.getElementById("card-container");

  repos.forEach((repo) => {
    const projArticle = document.createElement("article");
    projArticle.classList.add("card");

    const projHead = document.createElement("header");
    projHead.classList.add("card-top");
    projHead.style.background = getNextColor();

    const icon = document.createElement("i");
    icon.classList.add("fa-brands", "fa-js", "fa-2xl");
    projHead.appendChild(icon);

    const projLow = document.createElement("div");
    const projTitle = document.createElement("h3");
    const projDes = document.createElement("p");
    projTitle.textContent = repo.name;
    projLow.classList.add("card-low");
    projTitle.classList.add("card-title");
    projDes.classList.add("card-text");
    projDes.textContent = repo.description;

    projLow.appendChild(projTitle);
    projLow.appendChild(projDes);
    projArticle.appendChild(projHead);
    projArticle.appendChild(projLow);

    container.appendChild(projArticle);
  });
}

fetchGitHubRepos();
