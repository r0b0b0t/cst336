<?php

$primaryTypes = array("Poison", "Psychic", "Bug", "Ice", "Fire", "Poison", "Fighting", "Dragon", "Rock", "Flying", "Ground", "Grass", "Ghost", "Water", "Water", "Normal", "Normal", "Normal", "Flying", "Water", "Water", "Flying", "Fire", "Dark", "Steel", "Electric", "Bug", "Grass", "Ground", "Psychic", "Fairy");

$secondaryTypes = array("Normal", "Ground", "Flying", "Rock");
array_push($secondaryTypes, "Dragon", "Fire", "Poison", "Electric");
array_push($secondaryTypes, "Fairy", "Dark", "Fighting", null);
array_push($secondaryTypes, null, "Steel", "Ghost", "Grass");
array_push($secondaryTypes, null, "Psychic", "Water", "Bug");
array_push($secondaryTypes, null, null, "Ice", null);
array_push($secondaryTypes, null, null);

$primary = $primaryTypes[$_GET['birthday'] - 1];
$secondary= $secondaryTypes[ord(ucfirst($_GET['firstInit'])) - 65];

$typeArr = array($primary, $secondary);

echo json_encode($typeArr);

?>