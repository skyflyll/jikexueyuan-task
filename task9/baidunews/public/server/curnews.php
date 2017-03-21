<?php
/**
 * Created by PhpStorm.
 * User: handsome_ll
 * Date: 2017/2/16
 * Time: 19:17
 */
header("Content-type:applicaton.json;charset=utf-8");
require_once ('db.php');
if ($con) {
    // echo json_encode(array('链接信息' => '链接服务器成功1'));
    //链接数据库
    $link = mysqli_select_db($con, "baidunews");
    //设置中文样式
    mysqli_query($con, "SET NAMES utf8");
    $newsid= $_POST['newsid'];
    $sql="SELECT * FROM `news` WHERE `id`={$newsid}";
    $result=mysqli_query($con,$sql);
    $senddata=array();
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