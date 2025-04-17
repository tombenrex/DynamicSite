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

  // Skrivit själv
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    } else if (event.key === "ArrowRight") {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    }
  });
});

// Skrivit själv
function loadingDone() {
  const loadingText = document.getElementById("loading");
  if (loadingText) {
    loadingText.style.display = "none";
  }
}

function createColorCycle() {
  const gradients = [
    "linear-gradient(to bottom left, #3700ff77,rgb(151, 93, 245))",
    "linear-gradient(to bottom left,rgb(30, 97, 1),rgb(19, 255, 82))",
    "linear-gradient(to bottom left, #ff000057, #eb1919)",
    "linear-gradient(to bottom left, #003cff95, #00aeff)",
    "linear-gradient(to bottom left,rgba(145, 61, 5, 0.58),rgb(255, 136, 0))",
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
  try {
    const response = await fetch("https://api.github.com/users/tombenrex/repos");
    const repos = await response.json();

    // Filter and sort repos
    const filteredRepos = repos.filter((repo) => !repo.description || !repo.description.includes("GitHub"));
    filteredRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const container = document.getElementById("card-container");

    filteredRepos.forEach((repo) => {
      const projArticle = createRepoCard(repo);
      container.appendChild(projArticle);
    });

    loadingDone(); // Hide the loader after all repos are rendered
  } catch (error) {
    console.error("Error fetching repos:", error);
    const container = document.getElementById("card-container");
    container.innerHTML = "<p>Failed to load repositories. Please try again later.</p>";
  }
}

function createRepoCard(repo) {
  const projArticle = document.createElement("article");
  projArticle.classList.add("card");

  const projHead = createCardHeader(repo);
  const projLow = createCardFooter(repo);

  projArticle.append(projHead, projLow);
  return projArticle;
}

function createCardHeader(repo) {
  const projHead = document.createElement("header");
  projHead.classList.add("card-top");
  projHead.style.background = getNextColor();

  const icon = createRepoIcon(repo.description);
  if (icon) {
    projHead.appendChild(icon);
  }

  return projHead;
}

function createRepoIcon(description) {
  let icon = null;

  // Safely handle the description and avoid errors
  const safeDescription = description || '';

  if (safeDescription.includes("JS")) {
    icon = document.createElement("i");
    icon.classList.add("fa-brands", "fa-js", "fa-2xl");
  } else if (safeDescription.includes("HTML")) {
    icon = document.createElement("i");
    icon.classList.add("fa-brands", "fa-html5", "fa-2xl");
  } else if (safeDescription.includes("CSS")) {
    icon = document.createElement("i");
    icon.classList.add("fa-brands", "fa-css", "fa-2xl");
  } else if (!safeDescription.trim()) {
    // If the description is empty, use a default icon or message
    icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-atom", "fa-2xl"); // A generic icon for missing descriptions
  }

  return icon;
}

function createCardFooter(repo) {
  const projLow = document.createElement("div");
  projLow.classList.add("card-low");

  const projTitle = document.createElement("h3");
  projTitle.classList.add("card-title");
  projTitle.innerHTML = `<a href="${repo.html_url}" target="_blank" title="(Open in new window)"> ${repo.name}</a>`;

  const projDes = document.createElement("p");
  projDes.classList.add("card-text");

  // Handle empty description with a fallback message
  projDes.textContent = repo.description && repo.description.trim() !== "no describe"
    ? (repo.description || "No description available")
    : "No description available";

  const projLinks = document.createElement("div");
  projLinks.classList.add("card-links");

  if (repo.homepage) {
    projLinks.innerHTML = `<a href="${repo.homepage}" target="_blank" title="(Open in new window)">Checkout Preview <i class="fa-solid fa-laptop-code"></i></a>`;
  } else {
    projLinks.textContent = "No live server available";
  }

  projLow.append(projTitle, projDes, projLinks);
  return projLow;
}

loadingDone();

fetchGitHubRepos();
