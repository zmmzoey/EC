// 头部
$(".right-more").on("touchstart", function(e) {
  $(".menubox").toggleClass("active");
});
// banner图轮播
var swiper = new Swiper(".swiper-container", {
  autoplay: true,
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
    for(var i=0;i<json.length;i++){
      str+="<div class='square'><a class='tiaozhuan'><img src='"+json[i].src+"'class='baozhuang'><div class='c33'>"+json[i].about+"</div></a><div class='c11'><span class='c44'>"+json[i].price+"</span><div class='buy'><a href='跳转至购物车'><img src='../images/imgh/car.png'></a></div> </div></div>"
    }
    $(".most")[0].innerHTML=str
  }
})
// 返回顶部
function goTop(acceleration, time) {
  acceleration = acceleration || 0.1;
  time = time || 16;
  var x1 = 0;
  var y1 = 0;
  var x2 = 0;
  var y2 = 0;
  var x3 = 0;
  var y3 = 0;
  if (document.documentElement) {
  x1 = document.documentElement.scrollLeft || 0;
  y1 = document.documentElement.scrollTop || 0;
  }
  if (document.body) {
  x2 = document.body.scrollLeft || 0;
  y2 = document.body.scrollTop || 0;
  }
  var x3 = window.scrollX || 0;
  var y3 = window.scrollY || 0;
  // 滚动条到页面顶部的水平距离
  var x = Math.max(x1, Math.max(x2, x3));
  // 滚动条到页面顶部的垂直距离
  var y = Math.max(y1, Math.max(y2, y3));
  // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
  var speed = 1 + acceleration;
  window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
  // 如果距离不为零, 继续调用迭代本函数
  if (x > 0 || y > 0) {
  var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
  window.setTimeout(invokeFunction, time);
  }
}
$(".backtop").on("touchstart",function(){
     goTop()
})