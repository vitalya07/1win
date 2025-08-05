const mainSwiper = new Swiper(".main__swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const winGamesSwiper = new Swiper(".win-games__swiper", {
    slidesPerView: 6,
    spaceBetween: 17,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //     },
    //     // когда ширина экрана >= 768px
    //     768: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     },
    //     // когда ширина экрана >= 1024px
    //     1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //     },
    // },
});
const allGamesSwiper = new Swiper(".all-games__swiper", {
    slidesPerView: 4,
    spaceBetween: 17,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //     },
    //     // когда ширина экрана >= 768px
    //     768: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     },
    //     // когда ширина экрана >= 1024px
    //     1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //     },
    // },
});
const liveCasinoSwiper = new Swiper(".live-casino-swiper", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: {
    //     slidesPerView: 2,
    //     },
    //     // когда ширина экрана >= 768px
    //     768: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     },
    //     // когда ширина экрана >= 1024px
    //     1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //     },
    // },
});

const popularSwiper = new Swiper(".popular-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
