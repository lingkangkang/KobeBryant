/**
 * Created by Administrator on 2017/3/16.
 */
//touch event
$('.footContent .footBody label').on('touchstart',function(e) {
   console.log("ssss111")
    $(this).addClass("touchStart")
    //$(this).css({
    //    "background-color":"wheat",
    //    "color":"black"
    //})
});
$('.footContent .footBody label').on('touchmove',function(e) {
    console.log("ssss2222")
    $(this).removeClass("touchStart")
})
$('.footContent .footBody label').on('touchend',function(e) {
    console.log("ssss3333")
    $(this).removeClass("touchStart")
})

//swipe event
$(".footContent .footBody label").on("swipeleft",function(){
    console.log("you can not swipe left")
})
//¹Ì¶¨footer
$(".footContent .footBody label").eq(0).on("click",function(){
    alert("111")
})