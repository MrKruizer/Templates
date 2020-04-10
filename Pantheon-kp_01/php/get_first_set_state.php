<?php
$link=mysqli_connect('localhost','root','','Pantheon','3306')
or die("Error ".mysqli_connect_error());
$query = 'SELECT * FROM first_set_state';
$result=mysqli_query($link,$query);
$arr=[];
while($cur=mysqli_fetch_object($result)) $arr[]=$cur;
if(mysqli_query($link,$query)==TRUE){
	echo '';
}else{
	$link->error.' ';
}
echo json_encode($arr);
?>