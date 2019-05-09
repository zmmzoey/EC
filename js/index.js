//banner自动无缝轮播
var swiper1 = new Swiper('.banner', {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
});
var swiper2 = new Swiper('.nav', {
    slidesPerView: 4,
    spaceBetween: 0,
   
  });
  //con4内容无缝轮播
  var gallery = mui('.mui-slider');
  gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});