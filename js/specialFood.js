// 头部
$(".right-more").on("touchstart", function(e) {
  $(".menubox").toggleClass("active");
});
// banner图轮播
var swiper = new Swiper(".swiper-container", {
  autoplay: 2500,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    disableOnInteraction: false
  }
});
// 超值增重套餐
!(function() {
  var myScroll = new IScroll(".zengzhong #wrapper", {
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType: 3 //每滚动一像素触发一次
  });

  myScroll.on("scroll", function() {
    console.log(this.x);
  });
})();
//  超值增重套餐下的品牌
!(function() {
  var myScroll = new IScroll(".fang #wrapper", {
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType: 3 //每滚动一像素触发一次
  });
  myScroll.on("scroll", function() {
    console.log(this.x);
  });
})();
// 超值减肥套餐 
!(function() {
  var myScroll = new IScroll(".jianfei #wrapper", {
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType: 3 //每滚动一像素触发一次
  });
  myScroll.on("scroll", function() {
    console.log(this.x);
  });
})();
// 超值减肥套餐下的品牌
!(function() {
  var myScroll = new IScroll(".roupai #wrapper", {
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType: 3 //每滚动一像素触发一次
  });
  myScroll.on("scroll", function() {
    console.log(this.x);
  });
})();
// 超值老犬套餐
!(function() {
  var myScroll = new IScroll(".laoquan #wrapper", {
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType: 3 //每滚动一像素触发一次
  });
  myScroll.on("scroll", function() {
    console.log(this.x);
  });
})();
// 超值老犬套餐的品牌
!(function() {
  var myScroll = new IScroll(".lao #wrapper", {
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType: 3 //每滚动一像素触发一次
  });
  myScroll.on("scroll", function() {
    console.log(this.x);
  });
})();
 // 渲染猜你喜欢的数据
 $.ajax({
  url:"../php/importedFood.php",
  success:function(data){
    var json=JSON.parse(data);
    var str="";
    console.log(json)
    for(var i=0;i<json.length;i++){
      // console.log(json[i].src)
      str+="<div class='square'><a class='tiaozhuan'><img src='"+json[i].src+"'class='baozhuang'><div class='c33'>"+json[i].about+"</div></a><div class='c11'><span class='c44'>"+json[i].price+"</span><div class='buy'><a href='跳转至购物车'><img src='../images/imgh/car.png'></a></div> </div></div>"
      // console.log(json[i].price)
    }
    $(".most")[0].innerHTML=str
  }
})