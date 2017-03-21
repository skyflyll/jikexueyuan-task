var nav_bg="#fff";
var body_bg="#fff";
window.onload = function() {
    changeBgColor();
    check();
}

function changeBgColor() {
    var bgColor = document.getElementsByClassName("change_c");
    for (var i = 0; i < bgColor.length; i++) {
        // bgColor[i].onclick = bg_Color;
        // 款浏览器dom处理
        addhandaler(bgColor[i]);
    }
}

function bg_Color(event) {

    var e=event?event:window.event;

    var colorArr = ['red', 'blue', 'yellow', 'orange', 'brown'];
    var numC = parseInt(Math.random() * 5);
    //取得body
    var body_bg = document.getElementById('body_bg');
    //取得导航nav
    var nav_id = document.getElementById('nav_id');
    //获取颜色
    var e_color = e.target.style.background || e.srcElement.style.background;
    // console.log(e_color);
    //设置body背景色
    body_bg.style.background = e_color;
    //设置导航nav背景色
    nav_id.style.background = colorArr[numC];

    // 写入储存
    localStorage.setItem("body_bg", e_color);
    localStorage.setItem("nav_bg", colorArr[numC]);
}
// 读取储存
function check() {
    var bg = localStorage.getItem("body_bg");
    var nav_bg = localStorage.getItem('nav_bg');
    if (bg != "") {
        //取得body
        var body_bg = document.getElementById('body_bg');
        //取得body
        var nav_id = document.getElementById('nav_id');
        //设置背景色
        body_bg.style.background = bg;
        nav_id.style.background = nav_bg;

    }
}
// dom处理
function addhandaler(c) {
    if (c.addEventListener){
        c.addEventListener("click",bg_Color,false);
    }else if(c.attachEvent){
        c.attachEvent("onclick",bg_Color);
        console.log("hello");
    }else {
        c.onclick=bg_Color;
    }
}
