<?
    //db.php
    $db = mysqli_connect('localhost','root','','portfolio');

    function sql($query){
        global $db;
        return mysqli_query($db,$query);
    }
?>