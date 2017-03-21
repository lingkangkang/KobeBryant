/**
 * Created by Administrator on 2017/3/16.
 */
$(function(){
//touch event
$('.footContent .footBody label').on('touchstart',function(e) {
    $(this).addClass("touchStart")
});
$('.footContent .footBody label').on('touchmove',function(e) {
    $(this).removeClass("touchStart")
})
$('.footContent .footBody label').on('touchend',function(e) {
    $(this).removeClass("touchStart")
})

//swipe event
$(".footContent .footBody label").on("swipeleft",function(){
    console.log("you can not swipe left")
})
//footer
$(".footContent .footBody label").eq(0).on("click",function(){
    alert("黝黑蜗壳 还没开发好")
})
$(".footContent .footBody label").eq(1).on("click",function(){
    alert("黝黑蜗壳 还没开发好")
})
$(".footContent .footBody label").eq(2).on("click",function(){
    alert("黝黑蜗壳 还没开发好")
})
$(".footContent .footBody label").eq(3).on("click",function(){
    alert("黝黑蜗壳 还没开发好")
    })

//表头颜色变化
 var colorVally=['yellow','white','black','blue','yellow','white','black','blue','yellow','blue']
 setInterval(function(){
     var numbers=Math.ceil(Math.random()*10)
     $(".headContent p ").css({
         "color":colorVally[numbers]
     })
 },2000)

})