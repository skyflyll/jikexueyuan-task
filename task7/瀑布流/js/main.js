/**
 * Created by handsome_ll on 2017/2/9.
 */
$(document).ready(function(){
        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
        window.onresize=function () {
            window.location.reload();//宽度改变刷新当前页面.
            imgLocation();
        }
});


function scrollside(){
    var box = $(".box");
    //最后一张图片距顶部的距离
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    //判断是否追加图片
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);//取得一排的数量
    var boxArr=[];
    box.each(function(index,value){
//        console.log(index+"--"+value);
        var boxHeight = box.eq(index).height();
        if(index<num){
            boxArr[index]= boxHeight;
        }else{
            // 取得最小高度
            var minboxHeight = Math.min.apply(null,boxArr);
            // 取得最小高度的位置
            var minboxIndex = $.inArray(minboxHeight,boxArr);
            //最小高度后追加图片
            $(value).css({
                "position":"absolute",
                "top":minboxHeight+'px',
                "left":box.eq(minboxIndex).position().left+'px'
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}