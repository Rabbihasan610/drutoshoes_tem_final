var swiper = new Swiper(".product-thumb", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 4,

  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-prev", {
  loop: true,
  spaceBetween: 32,
  effect: "fade",

  thumbs: {
    swiper: swiper,
  },
});
// Initialize medium-zoom for images in swiper slides
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}

// product detils tabs
function changeActiveTab(event, tabID) {
  let element = event.target;
  while (element.nodeName !== "A") {
    element = element.parentNode;
  }
  const ulElement = element.parentNode.parentNode;
  const aElements = ulElement.querySelectorAll("li > a");
  const tabContents = document.getElementById("tabs-id1").querySelectorAll(".tab-content1 > div");

  aElements.forEach(function (aElement) {
    aElement.classList.remove("text-white", "bg-pink-600");
    aElement.classList.add("text-pink-600", "bg-white");
  });

  tabContents.forEach(function (tabContent) {
    tabContent.classList.add("hidden");
    tabContent.classList.remove("block");
  });

  element.classList.remove("text-pink-600", "bg-white");
  element.classList.add("text-white", "bg-pink-600");

  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}
