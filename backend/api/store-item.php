<?php
// leggere il file
$json_todolist = file_get_contents('../data/todolist.json');

// trasformare il json in array di php, che php lo possa capire
$todolist_array = json_decode($json_todolist);

$todolist_array[] = $_POST['item'];

// codifica  per il file json
$json_result = json_encode($todolist_array);

// fornire la nuova lista aggiornata
file_put_contents('../data/todolist.json', $json_result);

// avvisare il browser che stiamo inviando il json per far si che vue riceva l'informazione
header('Content-Type: application/json');

// stampare la lista aggiornata
echo $json_result;