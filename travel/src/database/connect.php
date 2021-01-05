<?php

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
} catch (PDOException $e) {
    echo "<pre>";
    var_dump($e);
    echo "</pre>";
    die();
}