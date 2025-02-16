// header user dropdown menu start
document
  .getElementById("user-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
  });

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches("#user-icon") &&
    !event.target.closest("#user-icon")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// header user dropdown menu end
// header card dropdown menu js start

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
// header card dropdown menu js end

// header mobile search menu
document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("mobileSearchBar");
  const searchIcon = document.querySelector(".md\\:hidden a");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    searchBar.classList.remove("hidden");
    searchBar.classList.add("opacity-100");
    searchIcon.classList.add("hidden");
    searchBar.querySelector("input").focus();
  });

  document.addEventListener("click", function (event) {
    if (
      !searchBar.contains(event.target) &&
      !searchIcon.contains(event.target)
    ) {
      searchBar.classList.add("hidden");
      searchBar.classList.remove("opacity-100");
      searchIcon.classList.remove("hidden");
    }
  });

  searchBar.querySelector("input").addEventListener("blur", function () {
    searchBar.classList.add("hidden");
    searchBar.classList.remove("opacity-100");
    searchIcon.classList.remove("hidden");
  });
});

// navbar drawer start
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const drawerMenu = document.getElementById("drawer-menu");
  const closeDrawer = document.getElementById("close-drawer");
  const menuItemMen = document.getElementById("menu-item-men");
  const submenuMen = document.getElementById("submenu-men");
  const backToMainMenu = document.getElementById("back-to-main-menu");

  menuToggle.addEventListener("click", function () {
    drawerMenu.classList.toggle("-translate-x-full");
  });

  closeDrawer.addEventListener("click", function () {
    drawerMenu.classList.add("-translate-x-full");
  });

  menuItemMen.addEventListener("click", function () {
    drawerMenu.classList.add("-translate-x-full");
    submenuMen.classList.remove("-translate-x-full");
  });

  backToMainMenu.addEventListener("click", function () {
    submenuMen.classList.add("-translate-x-full");
    drawerMenu.classList.remove("-translate-x-full");
  });

  // Close drawer when clicking outside
  window.addEventListener("click", function (e) {
    if (
      drawerMenu.classList.contains("-translate-x-full") &&
      submenuMen.classList.contains("-translate-x-full")
    )
      return;
    if (
      !drawerMenu.contains(e.target) &&
      !submenuMen.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      drawerMenu.classList.add("-translate-x-full");
      submenuMen.classList.add("-translate-x-full");
    }
  });
});

// navbar drawer end

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

// header responsive drawer
function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  if (drawer.classList.contains("-translate-x-full")) {
    drawer.classList.remove("-translate-x-full");
    drawer.classList.add("translate-x-0");
  } else {
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("-translate-x-full");
  }
}

// slick slider just landed page
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow:
      '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// just landed page js card start
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-slider]");
  const sliders = document.querySelectorAll(".slider");

  function showSlider(activeBtn) {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");

    // Hide all sliders
    sliders.forEach((slider) => slider.classList.add("hidden"));

    // Show the active slider
    const activeSliderId = "slider-" + activeBtn.getAttribute("data-slider");
    const activeSlider = document.getElementById(activeSliderId);
    activeSlider.classList.remove("hidden");

    // Set width for each slider item
    const sliderItems = activeSlider.getElementsByClassName("slider-item");
    Array.from(sliderItems).forEach((item) => {
      item.style.width = "236px";
    });

    // Add class to the slick-track div
    const slickTrack = activeSlider.querySelector(".slick-track");
    if (slickTrack) {
      slickTrack.classList.add("content");
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      showSlider(btn);
    });
  });

  // Show the initial slider
  showSlider(buttons[0]);
});
// just landed page js card end

//best sellers sliker js start
$(document).ready(function () {
  $(".sliderBestSellers").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// bata on instagram sliker js start
$(document).ready(function () {
  $(".sliderBataOnInstagram").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//filter drawer page start
const drawerToggleCheckbox = document.getElementById("my-drawer-2");
const drawerContent = document.querySelector(".drawer-content");

// Close the drawer when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !drawerContent.contains(event.target) &&
    !drawerToggleCheckbox.contains(event.target)
  ) {
    drawerToggleCheckbox.checked = false;
  }
});

// Prevent the drawer from closing when clicking inside the drawer content
drawerContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

// filter page grid and list items page js start
const gridIcon = document.getElementById("icon-grid");
const listIcon = document.getElementById("icon-list");
const gridView = document.getElementById("grid-view");
const listView = document.getElementById("list-view");

gridIcon.addEventListener("click", () => {
  gridView.classList.remove("hidden");
  listView.classList.add("hidden");
});

listIcon.addEventListener("click", () => {
  listView.classList.remove("hidden");
  gridView.classList.add("hidden");
});
// filter page grid and list items page js end

//filter drawer page end

//product details
function goToDetails(productId) {
  window.location.href = `/Task-01/drutoshoes_template/product-details.html?product_id=${productId}`;
}
//product details
function gotoLogin() {
  window.location.href = "/Task-01/drutoshoes_template/login.html"; // Corrected path
}

function gotoSignup() {
  window.location.href = "/Task-01/drutoshoes_template/signup.html"; // Corrected path
}

function gotoCart() {
  window.location.href = "/Task-01/drutoshoes_template/cartPage.html"; // Corrected path
}

function gotoCheckOutPage() {
  window.location.href = "/Task-01/drutoshoes_template/CheckOutPage.html"; // Corrected path
}
