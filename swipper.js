document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".wrapper-top-cart");
    const dropdownCart = document.getElementById("dropdown-cart");

    cartIcon.addEventListener("mouseenter", function () {
        dropdownCart.style.display = "block";
    });

    cartIcon.addEventListener("mouseleave", function () {
        dropdownCart.style.display = "none";
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
