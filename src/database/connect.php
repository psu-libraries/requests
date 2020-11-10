<?php

$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

if(mysqli_connect_errno()):
    array_push($errorMessage, "Database is currently unavailable.");
    die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
endif;

$conn->autocommit(FALSE);
