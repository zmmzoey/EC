<?php
   include "inc/dbconn.php";
   include "init.inc.php";
   header('Access-Control-Allow-Origin: *');
    $sql="select * from recommend where id1='1'";
   $result=$conn->query($sql);
   if($result->num_rows>0){
       while($row=mysqli_fetch_assoc($result)){       
           $arr[]=$row;        
       }
    //    echo json_encode($arr);
   }else{
       echo("数据不存在");
   };
   $conn->close();
   $smarty->assign("arr",$arr);
   $smarty->display("book.html");
   
?>