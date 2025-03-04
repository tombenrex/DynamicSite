async function fetchGitHubRepos() {
  const response = await fetch("https://api.github.com/users/tombenrex/repos");
  repos = await response.json();
  const container = document.getElementById("repo-container");

  repos.forEach((repo) => {
    const repoCard = document.createElement("div");
    repoCard.classList.add("repo-card");
    repoCard.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || "No description available"}</p>
            <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
            
            
        `;
    container.appendChild(repoCard);
  });
}

const projectcard = getElementById("repo-card");

fetchGitHubRepos();
