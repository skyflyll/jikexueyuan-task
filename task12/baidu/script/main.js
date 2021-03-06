/**
 * Created by lang on 2017/2/3.
 */
var timeId;
var baiduSkin;
$(document).ready(function () {
    //下拉菜单切换
    $(".right_menu").click(function () {
        $(".show_rightM").slideToggle("slow");
    });
    //设置导航条切换属性
    $("#nav_list li").each(function (index) {
        $(this).click(function () {
            $("div.show").removeClass("show");
            $(".menu_nav div").eq(index).addClass("show");
        })
    });
    //换肤功能显示与隐藏
    show1(".list_show", ".bg_list");
    show1(".name", ".user_name");
    show1(".stt", ".setting");
    show1(".more",".more_list");
    function show1(list, bg) {
        $(list).mouseover(function () {
            $(bg).addClass('show_list');
        }).mouseout(function () {
            $(bg).removeClass('show_list');
        });
    }

    //切换背景图片
    var bg_list = $(".bg_list ul li");
    var bg_image = $(".bg_image");
    bg_list.each(function (index) {
        $(this).click(function () {

            //设置背景值的cookie和local storage
            localStorage.setItem('baiduSkin', index);
            docCookies.setItem('baiduSkin', index);
            //移除css样式
            bg_image.removeClass("bg_img bg_img1 bg_img2 bg_img3");
            switch (index) {
                case 0:
                    bg_image.addClass("bg_img");
                    break;
                case 1:
                    bg_image.addClass("bg_img1");
                    break;
                case 2:
                    bg_image.addClass("bg_img2");
                    break;
                default:
                    bg_image.addClass("bg_img3");
                    break;
            }
        });
    });
    // 背景储存
    if (localStorage.getItem('baiduSkin') || docCookies.getItem('baiduSkin')) {
        var skin = parseInt(localStorage.getItem('baiduSkin')) || docCookies.getItem('baiduSkin');
        switch (skin) {
            case 1:
                bg_image.addClass("bg_img1");
                break;
            case 2:
                bg_image.addClass("bg_img2");
                break;
            case 3:
                bg_image.addClass("bg_img2");
                break;
            default:
                bg_image.addClass("bg_img");
                break;
        }
    } else {
        localStorage.setItem('baiduSkin', '0');
        docCookies.setItem('baiduSkin', '0');
        bg_image.addClass("bg_img");
    }

});
