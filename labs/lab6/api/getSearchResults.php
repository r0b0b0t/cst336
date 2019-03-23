<?php

include '../../../inc/dbConnection.php';

$conn = getDatabaseConnection("ottermart");

$product = $_GET['product'];

//This query works BUT it allows SQL INJECTION (because it's using single quotes)
//$sql = "SELECT * FROM `om_product` WHERE productName LIKE '%$product%'";

$namedParameters = array();
$sql = "SELECT * FROM om_product WHERE 1"; //Retrieves ALL records

if (!empty($product)) { //user entered a product keyword
    $sql .= " AND productName LIKE :productName";
    $namedParameters[":productName"] = "%" . $_GET['product'] . "%";
}

if (!empty($_GET['category'])) {
    $sql .= " AND catId = :categoryId";
    $namedParameters[":categoryId"] = $_GET['category'];
}

if (!empty($_GET['priceFrom'])) {
    $sql.= " AND price >= :priceFrom";
    $namedParameters[":priceFrom"] = $_GET['priceFrom'];
}

if (!empty($_GET['priceTo'])) {
    $sql .= " AND price <= :priceTo";
    $namedParameters[":priceTo"] = $_GET['priceTo'];
}

if (isset($_GET['orderBy'])) {
    if ($_GET['orderBy'] == "price") {
        $sql .= " ORDER BY price";
    }
    else if ($_GET['orderBy'] == "name") {
        $sql .= " ORDER BY productName";
    }
}

$stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
$stmt->execute($namedParameters);
$records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple

//print_r($records); //debugging    

echo json_encode($records);

?>