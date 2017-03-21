// $(document).ready(function () {
//     //导航宽度的设置
//     var deviceWhidth = $("body").width();
//     $("nav ul li").each(function (index, item) {
//         if ($(this).find('a').html().split('').length > 2) {
//             $(this).width(deviceWhidth / 3);
//         } else {
//             $(this).width(deviceWhidth / 6);
//         }
//     });
//    //ajax引入文件
//    $.ajax({
//        url:'../news-baidu/server/getNewsadmin.php',
//        type:'get',
//        datatype:'json',
//        success:function (data) {
//            // console.log(data);
//            refreshNews(data);
//        }
//    });
// });
// //dom添加资源
// function refreshNews(data) {
//     // var $lists = $(".news-lists");
//     // $lists.empty();
//     // var $list = $('<li></li>').addClass("news-list").prependTo($lists);
//     // var $newsimg = $('<div></div>').addClass("newsimg").appendTo($list);
//     // var $img = $('<img>').attr('src',data.newsimg).appendTo($newsimg);
//     // var $newsContent = $('<div></div>').addClass("news-content").appendTo($list);
//     // var $h1 = $("<h2></h2>").html(data.newstitle).appendTo($newsContent);
//     // var $p = $("<p></p>").appendTo($newsContent);
//     // var $newsTime = $("<span></span>").addClass('news-time').html(data.newstime).appendTo($p);
//     // var $newssrc = $("<span></span>").addClass('news-src').html(data.newssrc).appendTo($p);
// console.log(data);
// }