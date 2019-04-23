<?php
    include '../../../inc/dbConnection.php';
    $conn = getDatabaseConnection("c9");
    
    $action = $_POST["action"];
    
    $arr = array();
    
    $arr[":url"] = $_POST["url"];
    $arr[":keyword"] = $_POST["keyword"];
  

    if ($action == "add") {
        $sql = "INSERT INTO `lab8_pixabay`( `imageURL`, `keyword`) 
            VALUES (:url, :keyword)";

    }
    
    if ($action == "delete") {
        $sql = "DELETE FROM `lab8_pixabay` WHERE `imageURL` = :url";
    }
   
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    
?>