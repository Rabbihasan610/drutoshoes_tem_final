// header card dropdown menu js

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

// banner swipper page js

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


// slick slider just landed page 

$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        dots: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Adjust to show 3 items on even smaller screens if needed
                }
            },
        ]
    });
});


// just landed page js card 

document.addEventListener('DOMContentLoaded', function () {
    const casualsBtn = document.getElementById('btn-casuals');
    const sneakersBtn = document.getElementById('btn-sneakers');
    const sandalsBtn = document.getElementById('btn-sandals');

    const casualsSlider = document.getElementById('slider-casuals');
    const sneakersSlider = document.getElementById('slider-sneakers');
    const sandalsSlider = document.getElementById('slider-sandals');

    function showSlider(activeBtn, activeSlider) {
        [casualsBtn, sneakersBtn, sandalsBtn].forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');

        [casualsSlider, sneakersSlider, sandalsSlider].forEach(slider => slider.classList.add('hidden'));
        activeSlider.classList.remove('hidden');
    }

    casualsBtn.addEventListener('click', function () {
        showSlider(casualsBtn, casualsSlider);
    });

    sneakersBtn.addEventListener('click', function () {
        showSlider(sneakersBtn, sneakersSlider);
    });

    sandalsBtn.addEventListener('click', function () {
        showSlider(sandalsBtn, sandalsSlider);
    });
});

