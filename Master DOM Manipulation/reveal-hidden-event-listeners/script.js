// Reveal Content

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  hiddenContent.classList.contains("reveal-btn")
    ? hiddenContent.classList.remove("reveal-btn")
    : hiddenContent.classList.add("reveal-btn");
}

revealBtn.addEventListener("click", revealContent);
