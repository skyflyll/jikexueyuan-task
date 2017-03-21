<?php
/**
 * Created by PhpStorm.
 * User: handsome_ll
 * Date: 2017/2/16
 * Time: 10:30
 */
$serversName = "localhost";
$username = "root";
$password = "";
$con = mysqli_connect($serversName, $username, $password);
//$con = mysqli_connect($servername, $username, $password);
if ($con){
    echo '成功';
    mysqli_select_db($con,"baidunews");
    $sql="SELECT `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc` FROM `news` WHERE `id`=1 ";
    $result = mysqli_query($con,$sql);
    $row=mysqli_fetch_array($result);
    print_r($row);
}else{
    echo '失败';
}
