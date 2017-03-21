<?php
/**
 * Created by PhpStorm.
 * User: handsome_ll
 * Date: 2017/2/16
 * Time: 19:10
 */
header("Content-type:applicaton.json;charset=utf-8");
require_once('db.php');
if ($con) {
    //echo json_encode(array('链接信息' => '链接服务器成功'));
    //链接数据库
    $link = mysqli_select_db($con, "baidunews");
    //设置中文样式
    mysqli_query($con, "SET NAMES utf8");
    //插入新闻
    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newsimg = $_POST['newsimg'];
    $newssrc = $_POST['newssrc'];
    $newsdate = $_POST['newsdate'];
    $newsid=$_POST['id'];
    $sql="UPDATE `news` SET `newstype`='{$newstype}',`newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newstime`='{$newsdate}',`newssrc`='{$newssrc}' WHERE `id`='{$newsid}'";
    $result = mysqli_query($con, $sql);
    echo json_encode(array('success' => 'ok'));
} else {
    echo json_encode(array('链接信息' => '链接服务器失败'));
};
mysqli_close($con);