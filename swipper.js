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
        responsive: [
            {
                breakpoint: 1024, // large devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // medium devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
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
        // Remove active class from all buttons
        [casualsBtn, sneakersBtn, sandalsBtn].forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');

        // Hide all sliders
        [casualsSlider, sneakersSlider, sandalsSlider].forEach(slider => slider.classList.add('hidden'));

        // Show the active slider
        activeSlider.classList.remove('hidden');

        // Set width for each slider item
        const sliderItems = activeSlider.getElementsByClassName('slider-item');
        Array.from(sliderItems).forEach(item => {
            item.style.width = '236px';
        });

        // Add class to the slick-track div
        const slickTrack = activeSlider.querySelector('.slick-track');
        if (slickTrack) {
            slickTrack.classList.add('content');
        }
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


    showSlider(casualsBtn, casualsSlider);
});