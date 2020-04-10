<?php 
$data= file_get_contents('php://input');
$data= json_decode($data);
$link=mysqli_connect('localhost','root','','pantheon','3306')
or die("Error ".mysqli_connect_error());
$query_values = '"'.$data->name.'","'.$data->email.'"';
$query='INSERT INTO mails(`name`,`email`) VALUES('.$query_values.')';
$result=mysqli_query($link,$query);
mysqli_close($link);
?>