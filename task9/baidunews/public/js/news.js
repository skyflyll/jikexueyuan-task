$(document).ready(function () {
    //导航宽度的设置
    var deviceWhidth = $("body").width();
    $("nav ul li").each(function (index, item) {
        if ($(this).find('a').html().split('').length > 2) {
            $(this).width(deviceWhidth / 3);
        } else {
            $(this).width(deviceWhidth / 6);
        }
    });
    refreshNews("推荐");
    $("nav a").click(function (e) {
        e.preventDefault();
        var type=$(this).text();
        refreshNews(type);
    });

});
//dom添加资源
function refreshNews(type) {
    var $lists = $(".news-lists");
    $lists.empty();
    //ajax引入文件
    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function (data) {
            // console.log(data);
            // refreshNews(data);
            data.forEach(function (item,index,array) {
                var $list = $('<li></li>').addClass("news-list").prependTo($lists);
                var $newsimg = $('<div></div>').addClass("newsimg").appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsimg);
                var $newsContent = $('<div></div>').addClass("news-content").appendTo($list);
                var $h1 = $("<h2></h2>").html(item.newstitle).appendTo($newsContent);
                var $p = $("<p></p>").appendTo($newsContent);
                var $newsTime = $("<span></span>").addClass('news-time').html(item.newstime).appendTo($p);
                var $newssrc = $("<span></span>").addClass('news-src').html(item.newssrc).appendTo($p);
            });

        }
    });
}