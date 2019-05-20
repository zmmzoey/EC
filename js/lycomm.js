//五个页面的头部下拉
$(function () {
    let btnflag = true;
    let lockd, timer;
    lockd = true;
    $('.header>.title').on('tap', '.right-more', function (e) {
        if (lockd) {
            lockd=false
            if (btnflag) {
                $('.header>.menu_list').animate({
                    height: '0',
                }, 500, 'ease-out')
                btnflag = false;
            } else {
                $('.header>.menu_list').animate({
                    height: '65px',
                }, 500, 'ease-out')
                btnflag = true;
            }
            timer = setTimeout(function () {
                lockd=true;
            }, 500)
        }
    })
})


