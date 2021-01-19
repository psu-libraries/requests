<?php

session_start();

$action = "view";

$root = $_SERVER['DOCUMENT_ROOT'];

include "src/database/connection.php";
include $root . '/src/functions/fncUtility.php';
include $root . '/src/functions/fncFormatter.php';
include $root . '/src/functions/fncFiles.php';

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
    2 => ['title' => 'My Requests', 'url' => 'myRequests.php', 'class' => ''],
    3 => ['title'=>'Search Requests (Approver)','url'=>'approverRequests.php','class'=>'is-active'],
    4 => ['title'=>'Search Results (Business Office)','url'=>'search.php','class'=>''],
    5 => ['title' => 'Administration', 'url' => '../admin/index.php', 'class'=>'']
  ];

  require_once 'src/inc/incDefaultTravelClasses.php';
  require 'src/inc/incRequestDefaults.php';
 
  require_once 'pagelayout/templates/header.php'; 

// Displays error and success messages
include_once $root . '/src/inc/incErrorSuccessMessage.php';

require_once 'pagelayout/views/vTravelRequest.php';
require_once 'pagelayout/templates/footer.php';



