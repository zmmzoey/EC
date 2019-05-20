//点击头部右侧让菜单栏显示出来
$(".right-more").on("touchstart",function(e){
    $(".menubox").toggleClass("active")
})
// 选择框
!(function(){
   var num=0; 
   $('.checked1').tap(function(){
       if($(this).prop('checked')){
           num++
       }
       console.log(num)
       if(num == $('.checked1').length){
           $('.checked2').prop('checked',this.checked)
       }
   })
})();


