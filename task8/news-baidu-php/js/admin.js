//打开页面发送请求 刷新
$(document).ready(function() {
    var $newsTable = $("#newsTable tbody");
    refreshNews();
    //添加新闻
    $("#btnsubmit ").click(function(e) {
        e.preventDefault();
        //判断输入内容
        //输入内容为空
        if ($("#newstitle").val() === "" || $("#newstype").val() === "" || $("#newsimg").val() === "" || $("#newssrc").val() === "" || $("#newsdate").val() === "") {
            if ($("#newstitle").val() === "") {
                $("#newstitle").parent().addClass("has-error");
            } else {
                $("#newstitle").parent().removeClass("has-error");
            }
            if ($("#newsimg").val() === "") {
                $("#newsimg").parent().addClass("has-error");
            } else {
                $("#newsimg").parent().removeClass("has-error");
            }
            if ($("#newssrc").val() === "") {
                $("#newssrc").parent().addClass("has-error");
            } else {
                $("#newssrc").parent().removeClass("has-error");
            }
            if ($("#newsdate").val() === "") {
                $("#newsdate").parent().addClass("has-error");
            } else {
                $("#newsdate").parent().removeClass("has-error");
            }
        } else {
            //输入内容不为空
            var jsonNews = {
                newstitle: $("#newstitle").val(),
                newstype: $("#newstype").val(),
                newsimg: $("#newsimg").val(),
                newssrc: $("#newssrc").val(),
                newsdate: $("#newsdate").val(),
            };
            //新闻添加
            $.ajax({
                url: '../news-baidu/server/insert.php',
                type: 'post',
                data: jsonNews,
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    refreshNews();
                }
            })
        }

    });

    //删除新闻
    var deteleId = null;
    $newsTable.on('click', '.btn-danger', function() {
        // console.log('click');
        $("#deleteModal").modal('show');
        deteleId = $(this).parent().prevAll().eq(5).html();
        // console.log(deteleId);

    });
    $("#deleteModal #confirmDelete").click(function(e) {
        if (deteleId) {
            $.ajax({
                url: '../news-baidu/server/detele.php',
                type: 'post',
                dataType: 'json',
                data: { newsid: deteleId },
                success: function(data) {
                    console.log("删除成功");
                    $("#deleteModal").modal('hide');
                    refreshNews();
                }
            });
        }
    });

    //修改新闻
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function() {
        // console.log('click');
        $("#updateModal").modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        // console.log(updateId);
        $.ajax({
            url: '../news-baidu/server/curnews.php',
            type: 'post',
            dataType: 'json',
            data: { newsid: updateId },
            success: function(data) {
                console.log(data);
                $("#unewstitle").val(data[0].newstitle);
                $("#unewstype").val(data[0].newstype);
                $("#unewsimg").val(data[0].newsimg);
                $("#unewssrc").val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
                $("#unewsdate").val(utime);
            }
        });

    });
    $("#updateModal #confirmUpdate").click(function(e) {
        $.ajax({
            url: '../news-baidu/server/update.php',
            type: 'post',
            dataType: 'json',
            data: {
                newstitle: $("#unewstitle").val(),
                newstype: $("#unewstype").val(),
                newsimg: $("#unewsimg").val(),
                newssrc: $("#unewssrc").val(),
                newsdate: $("#unewsdate").val(),
                id: updateId,
            },
            success: function(data) {
                console.log(data);
                $("#updateModal").modal('hide');
                refreshNews();
            }
        });
    });



    function refreshNews() {
        //清空
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: '../news-baidu/server/getNewsadmin.php',
            datatype: 'json',
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $btntrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary').html('修改');
                    var $btndetate = $('<button>').addClass('btn btn-danger').html('删除');
                    $btntrl.append($btnupdate, $btndetate);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $tdsrc, $btntrl);
                    $newsTable.append($tRow);
                })
            }
        });

    }
});
