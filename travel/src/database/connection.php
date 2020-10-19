<?php

//use vendor\Doctrine\DBAL\DriverManager as dman;
//use Vendor\Doctrine\ORM\EntityManager;

//DEFINE('DB_DRIVER', 'mysqli');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_USERNAME', 'root');
DEFINE('DB_PASSWORD', 'root');
DEFINE('DB_DATABASE', 'travel_request');
DEFINE('DB_PORT', 8888);

//$dbParams = [
//    'driver' => DB_DRIVER,
//    'host' => DB_HOST,
//    'user' => DB_USERNAME,
//    'password' => DB_PASSWORD,
//    'dbname' => DB_DATABASE,
//    'port' => DB_PORT
//];

//$conn = dman::getConnection($dbParams, $config);
$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);
//$conn = new Database(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);

if(mysqli_connect_errno()):
    array_push($errorMessage, "Database is currently unavailable.");
    die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
endif;

$conn->autocommit(FALSE);
