// Fetch the JSON data from the specified file
fetch("/json/cv.json")
  .then((response) => response.json()) // Convert the response to JSON format
  .then((data) => {
    // Create an object to store generated HTML for experience and education tables
    const sections = {
      experience: data.experience
        .map(
          (job) => `<tr>
          <td>${job.title}</td>
          <td>${job.company}</td>
          <td>${job.location}</td>
          <td>${job.start_date}</td>
          <td>${job.end_date}</td>
        </tr>` // Create a table row for each job entry
        )
        .join(""), // Join all rows into a single HTML string

      education: data.education
        .map(
          (edu) => `<tr>
          <td>${edu.school}</td>
          <td>${edu.location}</td>
          <td>${edu.degree}</td>
          <td>${edu.start_year}</td>
          <td>${edu.end_year}</td>
        </tr>` // Create a table row for each education entry
        )
        .join(""), // Join all rows into a single HTML string
      languages: data.languages
        .map(
          (lan) => `<tr>
          <td>${lan.name}</td>
          <td>${lan.level}</td>
          </tr>`
        )
        .join(""),
      json: data.json.map(
        (jso) => `
          ${jso.thisis}
          `
      ),
    };

    // Loop through the sections object and update the corresponding table
    Object.entries(sections).forEach(([id, html]) => {
      document.getElementById(id).innerHTML = html; // Insert the generated HTML into the respective table
    });
  })
  .catch((error) => console.error("Error:", error)); // Catch and log any errors that occur during the fetch operation
