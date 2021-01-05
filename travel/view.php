<?php

session_start();

$action = "view";

$root = $_SERVER['DOCUMENT_ROOT'];

include "src/database/connection.php";

if (isset($_GET['id']) && $_GET['id'] >= 1):
  $id = $_GET['id'];
else:
  $id = 0;
endif;

if (isset($_GET['success']) && $_GET['success'] == 1):
  $errorFlag = 0;
endif;

$appName = "Travel Request";

$arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class'=>''],
    2 => ['title'=>'Request List','url'=>'requestList.php','class'=>'is-active'],
    3 => ['title'=>'Search Results','url'=>'search.php','class'=>'']
  ];

require 'src/inc/incRequestDefaults.php';


?>

<?php 
require_once 'pagelayout/templates/header.php'; 
require_once 'src/inc/incDefaultTravelClasses.php';
// Displays error and success messages
include_once $root . '/src/inc/incErrorSuccessMessage.php';
require_once 'pagelayout/views/vTravelRequest.php';
require_once 'pagelayout/templates/footer.php';


