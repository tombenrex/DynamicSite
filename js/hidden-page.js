function sliceText() {
  let paragraf = document.getElementById("text");
  let orginalText = paragraf.textContent;
  let slicedText = orginalText.slice(1);
  paragraf.textContent = slicedText;
  if (orginalText.length === 0) {
    showElement();
    delBox();
  }
}

function showElement() {
  let el = document.getElementById("myElement");
  el.classList.remove("hidden");
  el.classList.add("visible");
}

function delBox() {
  let del = document.getElementById("pop");
  del.classList.remove("top-section");
  del.classList.add("visible2");
}

function goBack() {
  window.location.href = "index.html";
}
