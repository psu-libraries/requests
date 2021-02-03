<?php

session_start();

$userId = $_SESSION['user'];

include_once 'src/includes/incBuildPaths.php';
include_once 'src/includes/incTableQueries.php';

require_once $rootDb . 'connection.php';
require_once $root . "vendor/autoload.php";
require_once $defaults . 'incDefaultTravelClasses.php';

$action = "view";

include $rootFunc . 'fncUtility.php';
include $rootFunc . 'fncFormatter.php';
include $rootFunc . 'fncFiles.php';

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

  require 'src/inc/incRequestDefaults.php';
 
  require_once 'pagelayout/templates/header.php'; 

// Displays error and success messages
include_once $root . '/src/inc/incErrorSuccessMessage.php';

require_once 'pagelayout/views/vTravelRequest.php';
require_once 'pagelayout/templates/footer.php';



