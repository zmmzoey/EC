$(function () {
    $('.mid_nav').on('tap', 'li', function () {
        console.log($(this).offset())
        console.log($(this).scrollTop())
    })
    $(window).on('touchmove', function (e) {
        let wScrollTop = $(window).scrollTop()
        console.log(wScrollTop, $('.mid_nav').offset().top)
        if (wScrollTop > $('.mid_nav').offset().top) {
            $('.mid_nav').addClass('posfixed');
        } else {
            $('.mid_nav').removeClass('posfixed')
        }
    })
})