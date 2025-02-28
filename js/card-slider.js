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

let repos = [];

async function fetchGitHubRepos() {
  const response = await fetch("https://api.github.com/users/tombenrex/repos");
  repos = await response.json();
  const container = document.getElementById("Login-Page");

  repos.forEach((repo) => {
    if (repo.name == "CV-V2") {
      const repoDes = document.createElement("div");
      repoDes.classList.add("repo-des");
      repoDes.innerHTML = `<p>${
        repo.description || "No description available"
      }</p>`;
      container.appendChild(repoDes);
    }
  });
}

fetchGitHubRepos();
