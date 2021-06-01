<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $sendString = '';
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        $name = $data->name;
        $sendString = "Hello $name. Your are a Post Requester. Success from the PHP Server";
    } else {
        $sendString = "Hello Unknown Get Requester. Success from the PHP Server";
    }
    echo $sendString;
?>


