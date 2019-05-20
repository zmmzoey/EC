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
mui.init({

});

mui.ready(function () {
  mui(".mui-scroll-wrapper").scroll({
    bounce: true //是否启用回弹
  });

});

var gallery1= mui('.con4 .mui-slider');
gallery.slider({
  interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
});
//con5内容无缝轮播
//获得slider插件对象
var gallery2 = mui('.con5 .mui-slider');
gallery.slider({
  interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
});
//
var gallery3 = mui('.con6 .mui-slider');
gallery.slider({
  interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
});