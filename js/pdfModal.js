document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("#pdfModal");
  const btn = document.querySelector("#pdf-link");
  const closeBtn = document.querySelector(".close");
  const pdfFrame = document.querySelector("#pdfFrame");

  if (modal && btn && closeBtn && pdfFrame) {
    // Function to open the modal and load the PDF
    function openModal() {
      const pdfUrl = pdfFrame.getAttribute("data-src");
      pdfFrame.src = pdfUrl; // Set the iframe src to load the PDF
      modal.style.display = "flex"; // Show the modal
      modal.setAttribute("aria-hidden", "false");
      closeBtn.focus(); // Focus on the close button for accessibility
    }

    // Function to close the modal and unload the PDF
    function closeModal() {
      modal.style.display = "none"; // Hide the modal
      modal.setAttribute("aria-hidden", "true");
      pdfFrame.src = ""; // Unload the PDF
      btn.focus(); // Return focus to the trigger button
    }

    // Event listener for the button to open the modal
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      openModal();
    });

    // Event listener for the close button
    closeBtn.addEventListener("click", closeModal);

    // Event listener for clicks outside the modal content to close the modal
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Event listener for the Escape key to close the modal
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.style.display === "flex") {
        closeModal();
      }
    });
  }
});
