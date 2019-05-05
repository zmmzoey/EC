$(".header").on("tap", "a", function() {

  $(this).find("span").addClass("active").closest(".header").find("span").not($(this).find("span")).removeClass("active");
    var index = $(this).parent().index()
    console.log(index)
    $(".main .tab").hide().eq(index).show()
});
