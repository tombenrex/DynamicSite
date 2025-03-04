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
  const repos = await response.json();
  const container = document.getElementById("card-container");

  repos.forEach((repo) => {
    const projArticle = document.createElement("article");
    projArticle.classList.add("card");

    const projHead = document.createElement("header");
    projHead.classList.add("card-top");
    projHead.style.background = getNextColor();

    if (repo.description.includes("JS")) {
      const jsIcon = document.createElement("i");
      jsIcon.classList.add("fa-brands", "fa-js", "fa-2xl");
      projHead.appendChild(jsIcon);
    }

    if (repo.description.includes("HTML")) {
      const htmlIcon = document.createElement("i");
      htmlIcon.classList.add("fa-brands", "fa-html5", "fa-2xl");
      projHead.appendChild(htmlIcon);
    }

    if (repo.description.includes("CSS")) {
      const cssIcon = document.createElement("i");
      cssIcon.classList.add("fa-brands", "fa-css", "fa-2xl");
      projHead.appendChild(cssIcon);
    }

    if (
      !repo.description.includes("JS") &&
      !repo.description.includes("HTML") &&
      !repo.description.includes("CSS")
    ) {
      const defaultIcon = document.createElement("i");
      defaultIcon.classList.add("fa-solid", "fa-user");
      projHead.appendChild(defaultIcon);
    }

    const projLow = document.createElement("div");
    projLow.classList.add("card-low");

    const projTitle = document.createElement("h3");
    projTitle.classList.add("card-title");
    projTitle.innerHTML = `<a href="${repo.html_url}" target="_blank" title="(Open in new window)" >${repo.name}</a>`;

    const projDes = document.createElement("p");
    projDes.classList.add("card-text");
    projDes.textContent = repo.description;

    const projLinks = document.createElement("div");
    projLinks.classList.add("card-links");

    if (repo.homepage) {
      projLinks.innerHTML = `<a href="${repo.homepage}" target="_blank" title="(Open in new window)">Visit Live Server <i class="fa-solid fa-laptop-code"></i></a>`;
    } else {
      projLinks.textContent = "No live server avaliable";
    }

    projLow.append(projTitle, projDes, projLinks);
    projArticle.append(projHead, projLow);
    container.appendChild(projArticle);
  });
}

fetchGitHubRepos();
