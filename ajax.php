<?php
//echo "<div id='main2'>XXXX</div>";
$prenom = $_GET['name'];
$tableau = [
    "color" => "bleu",
    "name" => $prenom
];

echo json_encode($tableau, true);