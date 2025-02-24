fetch("/json/cv.json")
  .then((response) => response.json())
  .then((data) => {
    const experienceEl = document.getElementById("experience");

    data.experience.forEach((job) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <p>${job.start_date} - ${job.end_date}</p>
      <p>${job.description}</p>
    `;

      experienceEl.appendChild(div);
    });
  })
  .catch((error) => console.error("Error:", error));
