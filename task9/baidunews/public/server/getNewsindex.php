<?php
header("Content-type:applicaton.json;charset=utf-8");
//    $arr=array(
//        'newstype'=>'百家',
//        'newsimg'=>'img/3.jpg',
//        'newstime'=>'2017.02.14',
//        'newssrc'=>'百度百科',
//        'newstitle'=>'测试标题',
// );
// echo json_encode($arr);
$servername = "localhost";
$username = "root";
$password = "";
// 连接服务器
$con = mysqli_connect($servername, $username, $password);
// 检测连接
if ($con) {
//    echo json_encode(array('链接信息' => '链接服务器成功'));
    //链接数据库
$newstype=$_GET['newstype'];
    $link = mysqli_select_db($con, "baidunews");
    $sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}'";
    //设置中文样式
    mysqli_query($con, "SET NAMES utf8");
    $result = mysqli_query($con, $sql);
    $senddata = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($senddata, array(
            'id' => $row['id'],
            'newstype' => $row['newstype'],
            'newstitle' => $row['newstitle'],
            'newsimg' => $row['newsimg'],
            'newstime' => $row['newstime'],
            'newssrc' => $row['newssrc']

        ));
    }
    echo json_encode($senddata);

} else {
    echo json_encode(array('链接信息' => '链接服务器失败'));
};
mysqli_close($con);
?>