const pageUp = document.getElementById("js-arrow-up")

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

pageUp.addEventListener("click", scrollToTop)
