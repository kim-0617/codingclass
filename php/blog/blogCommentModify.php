<?php
    include "../connect/connect.php";
    $myCommentID = $_POST['commentID'];
    $pass = $_POST['pass'];
    $commentMsg = $_POST['commentMsg'];

    $sql = "UPDATE myComment SET commentMsg='$commentMsg' WHERE myCommentID=$myCommentID";
    $result = $connect -> query($sql);

    echo json_encode(array("info" => $sql));
?>