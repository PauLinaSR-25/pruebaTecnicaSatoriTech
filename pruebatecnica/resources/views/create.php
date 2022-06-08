<?php

    // $obj = json_decode($_POST["obj"], false);
    $id = $_REQUEST["id"];
    $nombre = $_REQUEST["nombre"];
    $ataque = $_REQUEST["ataque"];
    $defensa = $_REQUEST["defensa"];

    $conn = new mysqli("localhost", "usu_pokemon", "pokemon1", "pokemon");
    $stmt = $conn->prepare("INSERT INTO Pokemon (`id`, `nombre`, `ataque`, `defensa`) VALUES (?,?,?,?)");
    $stmt->bind_param("isii", $id, $nombre, $ataque, $defensa);
    $stmt->execute();
    
   
?>