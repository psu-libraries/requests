<?php

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
} catch (PDOException $e) {
    echo "<pre>";
    var_dump($e);
    echo "</pre>";
    die();
}

$conn->setAttribute(PDO::ATTR_PERSISTENT, TRUE);
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
