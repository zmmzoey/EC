<?php
 header("content-type:text/html;charset=utf8");
$hostname="localhost";
$uname="root";
$pwd="root";
$dbname="ec";
$conn=new mysqli($hostname,$uname,$pwd,$dbname);
if($conn->connect_error){
    die("数据库连接失败:".$conn->connect_error);
}
?>