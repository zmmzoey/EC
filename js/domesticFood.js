//点击头部右侧让菜单栏显示出来
$(".right-more").on("touchstart", function(e) {
  $(".menubox").toggleClass("active");
});
/* 维持健康体态 */
!(function(){
  var myScroll = new IScroll('.jiankang #wrapper',{
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType:3 //每滚动一像素触发一次
  });
  
  myScroll.on("scroll",function(){
    // console.log(this.x);
  });
})()
/* 维持健康体态下的品牌 */
!(function(){
  var myScroll = new IScroll('.fang #wrapper',{
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType:3 //每滚动一像素触发一次
  });
  
  myScroll.on("scroll",function(){
    console.log(this.x);
  });
})()
// 超值幼犬长肉方案
!(function(){
  var myScroll = new IScroll('.zhangrou #wrapper',{
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType:3 //每滚动一像素触发一次
  });
  
  myScroll.on("scroll",function(){
    console.log(this.x);
  });
})()
// 超值幼犬长肉方案下的品牌
!(function(){
  var myScroll = new IScroll('.roupai #wrapper',{
    scrollX: true,
    scrollY: false,
    snap: "li",
    probeType:3 //每滚动一像素触发一次
  });
  
  myScroll.on("scroll",function(){
    console.log(this.x);
  });
})()
// swiper滑动
// window.onload = function() {
//   var mySwiper = new Swiper(".swiper-container", {
//     direction: "vertical", // 垂直切换选项
//     loop: true, // 循环模式选项

//     // 如果需要分页器
//     pagination: {
//       el: ".swiper-pagination"
//     }
//   });
// };



  // 渲染猜你喜欢的数据
  $.ajax({
    url:"../php/domesticFood.php",
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