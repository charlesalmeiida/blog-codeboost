const pageUp = document.getElementById("js-arrow-up")

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

pageUp.addEventListener("click", scrollToTop)

const btnHamburger = document.querySelector(".hamburger")

function hamburgerActive() {
  btnHamburger.classList.toggle("is-active")
  document.documentElement.classList.toggle("menu-opened")
}

btnHamburger.addEventListener("click", hamburgerActive)
