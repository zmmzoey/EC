// 头部切换
(function(){
  $(".header").on("tap", "a", function() {

    $(this).find("span").addClass("active").closest(".header").find("span").not($(this).find("span")).removeClass("active");
      var index = $(this).parent().index()
      // console.log(index)
      $(".main .tab").hide().eq(index).show()
  });
})()

// 左侧切换
$(".hot-recom").eq(0).addClass("show").show().siblings().removeClass("show").hide();
  $(".leftbox").on("tap","li",function(){
    $(this).addClass("on").siblings().removeClass("on");
    // console.log($(this).scrollTop())
    // if($(this).scrollTop(100)){
    //   $(this).scrollTop(100)
    // }
    var index=$(this).index();
    $(".hot-recom").eq(index).show().siblings().hide();
    console.log()
  })
