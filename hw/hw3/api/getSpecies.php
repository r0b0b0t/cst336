<?php

$birthNum = $_GET['month'] + $_GET['day'] + substr($_GET['year'], -2);

// $firstInit = ord(ucfirst($_GET['firstName']));
// $lastInit =ord(ucfirst($_GET['lastName']));

// $initNum = ($firstInit - 65 + 1)*0.1 + ($lastInit - 65 + 1)*0.1;

$array1 = str_split($_GET['firstName']);
$array2 = str_split($_GET['lastName']);

$nameNum = 0;

foreach ($array1 as $char) {
    if (ord($char) < 65) {
        $nameNum = $nameNum + (ord($char) - 65)*(-0.1);
    }
    else {
        $nameNum = $nameNum + (ord($char) - 65)*0.1;
    }
}

foreach ($array2 as $char) {
    if (ord($char) < 65) {
        $nameNum = $nameNum + (ord($char) - 65)*(-0.1);
    }
    else {
        $nameNum = $nameNum + (ord($char) - 65)*0.1;
    }
}

$pokedexNum = round($birthNum * $nameNum);

while ($pokedexNum > 721) {
    $pokedexNum = $pokedexNum % 721;
}

if ($pokedexNum == 0) {
    echo json_encode(0);
}

$baseUrl = "http://pokeapi.co/api/v2/pokemon/";
$data = file_get_contents($baseUrl.$pokedexNum.'/');
$pkmn = json_decode($data);
$pkmnArr = array(ucfirst($pkmn->name), $pkmn->sprites->front_default);

echo json_encode($pkmnArr);
?>