<?php
// leggiamo contenuto del file
$json_list_content = file_get_contents("../data/todolist.json");

// avvisiamo il browser che ricevera' del json
header('Content-Type: application/json');

// stampiamo il contenuto del file.
echo $json_list_content;