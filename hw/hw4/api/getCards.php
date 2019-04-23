<?php

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("hw4");

$arr = array();
$arr[":searchTerm"] = $_GET["searchTerm"];  

$data = file_get_contents("https://db.ygoprodeck.com/api/v4/cardinfo.php?fname=".$arr[":searchTerm"]);

$data = json_decode($data, true);  //from JSON format to an Array

$cards = array();

for ($i = 0; $i < count($data[0]); $i++) {
    $cards[] = $data[0][$i]["image_url"];
}

shuffle($cards);

echo json_encode(array_slice($cards, 0, 3)); 
?>