<?php

$primaryTypes = array("Poison", "Psychic", "Bug", "Ice", "Fire", "Poison", "Fighting", "Dragon", "Rock", "Flying", "Ground", "Grass", "Ghost", "Water", "Water", "Normal", "Normal", "Normal", "Flying", "Water", "Water", "Flying", "Fire", "Dark", "Steel", "Electric", "Bug", "Grass", "Ground", "Psychic", "Fairy");

$secondaryTypes = array("Normal", "Ground", "Flying", "Rock");
array_push($secondaryType, "Dragon", "Fire", "Poison", "Electric");
array_push($secondaryType, "Fairy", "Dark", "Fighting", null);
array_push($secondaryType, null, "Steel", "Ghost", "Grass");
array_push($secondaryType, null, "Psychic", "Water", "Bug");
array_push($secondaryType, null, null, "Ice", null);
array_push($secondaryType, null, null);

$primary = $primaryTypes[$_GET['birthday']];
$secondary= $secondaryTypes[ord(ucfirst($_GET['firstInit'])) - 65];

$typeArr = array($primary, $secondary);

echo json_encode($_GET['birthday']);

?>