<?php

//DEFINE('DRIVER', 'mysqli');
//DEFINE('HOST', 'mysql');
//DEFINE('USERNAME', 'request');
//DEFINE('PASSWORD', 'request');
//DEFINE('DBNAME', 'request');
//DEFINE('PORT', 8888);


$conn = new mysqli(HOST, USERNAME, PASSWORD, DBNAME);

echo "<pre>";
var_dump($conn);
echo "</pre>";

if ($conn->connect_error):
    die("Connection failed " . $conn->connect_error);
endif;

// Create a default configuration
//$isDevMode = true;
//$proxyDir = null;
//$cache = null;
//$usesSimpleAnnotationReader = false;

// Setup Doctrine
//$config = Setup::createAnnotationMetadataConfiguration(
//    $paths = [__DIR__ . '/entities'],
//    $isDevMode = true
//);

//$connection_parameters = [
//    "dbname" => DBNAME,
//    "user" => USERNAME,
//    "password" => PASSWORD,
//    "host" => HOST,
//    "driver" => DRIVER
//];

// Get the entity manager
//$entity_manager = Doctrine\ORM\EntityManager::create($connection_paramteters, $configuration);

