  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.main-swiper', {
      slidesPerView: 3, // Show 3 images on desktop
      spaceBetween: 20, // Spacing between slides
      breakpoints: {
        0: {
          slidesPerView: 2.5, // Show 2.5 images on mobile
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3, // Show 3 images on larger screens
          spaceBetween: 20,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.icon-arrow-right',
        prevEl: '.icon-arrow-left',
      },
    });
  });