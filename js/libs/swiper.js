var swiper = new Swiper(".slide-podcast", {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: ".s-podcast .top .control-slide .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-podcast .top .btn-next",
    prevEl: ".s-podcast .top .btn-prev",
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.1,
    },
    991: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
})
