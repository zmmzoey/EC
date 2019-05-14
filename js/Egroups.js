// 头部导航切换


$('.content>.nav>.navgation').on('tap','li',function(e){
    $(this).addClass('active').siblings().removeClass('active')
    $('#nav-title-img').attr('src','../images/Egroups/title'+parseInt($(this).index()+1)+'.jpg')
    
})