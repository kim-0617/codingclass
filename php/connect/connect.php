<?php
    $host = 'localhost';
    $user = 'root';
    $password = 'root';
    $db = 'phpclass';
    $connect = new mysqli($host, $user, $password, $db);
    $connect -> set_charset("utf8");

    // if(mysqli_connect_errno()) {
    //     echo "Database Connect False <br>";
    // }
    // else {
    //     echo "Database Connect True <br>";
    // }
?>