// slider home
var swiper = new Swiper(".swipe-swp", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});
// slider home
function swiper_products() {
  new Swiper(".slide-product", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
    },
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
          delay: 1500,
        },
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: {
          delay: 1800,
        },
      },
      0: {
        delay: 2000,
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });
}
