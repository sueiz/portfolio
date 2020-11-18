<?php
    include_once "db.php";
    $query = "create table contact(
        num int(11) auto_increment,
        name varchar(20),
        email varchar(50),
        phone varchar(100),
        message text,
        primary key (num) 
    )";

    mysqli_query($db,$query);

    $name = $_GET['name'];
    $email = $_GET['email'];
    $phohe = $_GET['phone'];
    $message = $_GET['message'];

    $query = "insert into contact (name,email,phone,message) values ('$name','$email','$phone','$message')";
    mysqli_query($db,$query);

?>










