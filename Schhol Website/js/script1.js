


  var mySwiperOne = new Swiper(".mySwiperOne", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 1500, // time between each slide in milliseconds
    disableOnInteraction: false, // set to false to continue autoplay even when user interacts with the Swiper
  },
});



 var mySwiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 1500, // time between each slide in milliseconds
    disableOnInteraction: false, // set to false to continue autoplay even when user interacts with the Swiper
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
       550: {
      slidesPerView: 3,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 5,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 5,
    }
  }
});


