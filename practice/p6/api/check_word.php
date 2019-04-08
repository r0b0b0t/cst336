<?php
//Used to check the letter the user inputed in the form, and if the letter is in the word
//Should return an array of booleans as the api
include 'dbConnection.php';
$conn = getDatabaseConnection("hangman");

$wordNum =  $_GET['id'];
$status = $_GET['status'];
$letter = $_GET['letter'];

$sql = "SELECT word FROM words WHERE word_id = $wordNum";
$stmt = $conn -> prepare($sql);  
$stmt->execute();
$record = $stmt->fetch(PDO::FETCH_ASSOC); 

$result = $record['word'];
$returnArr = [];

for ($x = 1; $x < strlen($result); $x++) {
    if ($result[$x] === $letter) {
        $returnArr[$x] = true;
    } else {
        $returnArr[$x]  = false;
    }
} 

echo json_encode($returArr);

?>