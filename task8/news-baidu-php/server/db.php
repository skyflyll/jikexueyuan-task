<?php
/**
 * Created by PhpStorm.
 * User: handsome_ll
 * Date: 2017/2/16
 * Time: 16:32
 */
header("Content-type:applicaton.json;charset=utf-8");
$servername = "localhost";
$username = "root";
$password = "";
// 连接服务器
$con = mysqli_connect($servername, $username, $password);