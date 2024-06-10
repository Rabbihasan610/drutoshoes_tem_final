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
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

