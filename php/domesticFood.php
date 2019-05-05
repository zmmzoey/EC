<?php
header('Access-Control-Allow-Origin: *');
include "commen.php";
$sql="select * from importedFood";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){
        $arr[]=$row;
    }
    echo json_encode($arr);
}else{
    echo("数据不存在");
}
$conn->close();
?>