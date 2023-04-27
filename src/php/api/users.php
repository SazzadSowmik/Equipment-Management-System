<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../models/GetUser.php';

    $database = new Database();

    
    
    $getUser = new GetUsers($database);

    $users = $getUser->getUsers();

    echo $users;


    //return $users;
    
?>