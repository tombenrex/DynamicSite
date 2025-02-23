fetch("cv.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("summary").textContent = data.summary;

    // Contact
    const contactEl = document.getElementById("contact");
    for (const [key, value] of Object.entries(data.contact)) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${key}:</strong> <a href="${value}" target="_blank">${value}</a>`;
      contactEl.appendChild(li);
    }

    // Skills
    const skillsEl = document.getElementById("skills");
    data.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsEl.appendChild(li);
    });

    // Experience
    const experienceEl = document.getElementById("experience");
    data.experience.forEach((job) => {
      const div = document.createElement("div");
      div.innerHTML = `<h4>${job.position} at ${job.company}</h4>
                         <p>${job.start_date} - ${job.end_date}</p>
                         <ul>${job.responsibilities
                           .map((task) => `<li>${task}</li>`)
                           .join("")}</ul>`;
      experienceEl.appendChild(div);
    });

    // Education
    const educationEl = document.getElementById("education");
    data.education.forEach((school) => {
      const div = document.createElement("div");
      div.innerHTML = `<h4>${school.institution}</h4>
                         <p>${school.degree} (${school.start_year} - ${school.end_year})</p>`;
      educationEl.appendChild(div);
    });

    // Projects
    const projectsEl = document.getElementById("projects");
    data.projects.forEach((project) => {
      const div = document.createElement("div");
      div.innerHTML = `<h4>${project.name}</h4>
                         <p>${project.description}</p>
                         <p><strong>Technologies:</strong> ${project.technologies.join(
                           ", "
                         )}</p>
                         <a href="${
                           project.github
                         }" target="_blank">GitHub</a>`;
      projectsEl.appendChild(div);
    });

    // Languages
    const languagesEl = document.getElementById("languages");
    data.languages.forEach((lang) => {
      const li = document.createElement("li");
      li.textContent = `${lang.name} - ${lang.level}`;
      languagesEl.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
