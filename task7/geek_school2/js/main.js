
$(document).ready(function () {
    // 侧边栏的显示
    var list = $(".bd ul li");
    list.each(function (index) {
        // console.log();
        $(this).hover(function () {
            var px=-index*37-47+"px";
            $(".list-show").eq(index).addClass("show");
            $(".list-show").eq(index).css({"top":px});
        },function () {
            $(".list-show").eq(index).removeClass("show");
        });
    });
$("#lesson_list ul li").each(function (index) {
    // console.log(index);
     $(this).hover(function () {
         // console.log(index);
        var aa=$(".lesson_info p").eq(index);
         // console.log(aa);
         aa.css({"display":"block","opacity":"1","height":"30px"})
     },function () {
         var aa=$(".lesson_info p").eq(index);
         // console.log(aa);
         aa.css({"display":"none","opacity":"0","height":"0"})
     })
})
});