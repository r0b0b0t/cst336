<?php

//receive email and score from the quiz

//1. Get latest score based on email
//2. If record found, first display it in JSON format, then update record
//3. If record not found, insert a new record for that email

include 'dbConnection.php';
$conn = getDatabaseConnection("tcp");

$arr = array();
$arr[":email"] = $_GET["email"];

$sql = "SELECT * FROM `quiz` WHERE `email` = :email ";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);
$records = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$records) {
    $arr[":score"] = $_GET["score"];
    $sql = "INSERT INTO `quiz` (`email`, `score`, `taken`) VALUES (:email, :score, '1')";
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
} else {
    $taken = $records["taken"] + 1;
    $sql = "UPDATE `quiz`
        SET `taken` = " . $taken . " 
        WHERE `email` = :email";
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    
    $arr[":score"] = $_GET["score"];
    $sql = "UPDATE `quiz`
        SET `score` = :score 
        WHERE `email` = :email";
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
}

$sql = "SELECT * FROM `quiz` WHERE `email` = :email ";

$arr2[":email"] = $arr[":email"];

$stmt = $conn->prepare($sql);
$stmt->execute($arr2);
$records2 = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$records) {
    echo json_encode($records2);
} else {
    $records2["score"] = $records["score"];
    echo json_encode($records2);
}



?>