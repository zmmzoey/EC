//点击头部右侧让菜单栏显示出来
$(".right-more").on("touchstart",function(e){
    $(".menubox").toggleClass("active")
})
// 轮播
 var swiper = new Swiper('.swiper-container', {
    autoplay:2500,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop:true
    },
 
  });
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
      // $(".most").html(str)
    }
  })
   

