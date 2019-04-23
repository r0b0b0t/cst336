<?php

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("hw4");

$arr = array();
$arr[":term"] = $_GET["searchTerm"];

$sql = "SELECT * FROM `search_terms` WHERE `term` = :term ";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);
$records = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$records) {
    $sql = "INSERT INTO `search_terms` (`termId`, `term`, `count`) VALUES (NULL, :term, '1')";
} else {
    $count = $records["count"] + 1;
    $sql = "UPDATE `search_terms`
        SET `count` = " . $count . " 
        WHERE `term` = :term";
}

$stmt = $conn->prepare($sql);
$stmt->execute($arr);

$sql = "SELECT * FROM `search_terms` WHERE `term` = :term ";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);
$records = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($records);

?>
