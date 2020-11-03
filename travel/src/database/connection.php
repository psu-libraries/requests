<?php

echo "DIR: " . __DIR__ . "<br>";

require_once "vendor/autoload.php";

//use Doctrine\Orm;

DEFINE('DRIVER', 'mysqli');
DEFINE('HOST', 'localhost');
DEFINE('USERNAME', 'travel');
DEFINE('PASSWORD', 'travel');
DEFINE('DBNAME', 'travel');
//DEFINE('PORT', 8888);

// Setup Doctrine
$configuration = Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration(
    $paths = [__DIR__ . '/entities'],
    $isDevMode = true
);

$connection_parameters = [
    "dbname" => DBNAME,
    "user" => USERNAME,
    "password" => PASSWORD,
    "host" => HOST,
    "driver" => DRIVER
];

// Get the entity manager
$entity_manager = Doctrine\ORM\EntityManager::create($connection_paramteters, $configuration);
