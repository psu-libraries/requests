<?php

session_start();

$appName = "Travel Request";
$arrAppStatus = [
  "Pending", "Change", "Approved", "Rejected", "Closed"
];

$arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class'=>''],
    2 => ['title'=>'My Requests','url'=>'myRequests.php','class'=>''],
    3 => ['title'=>'Search Requests (Approver)','url'=>'approverRequests.php','class'=>'is-active'],
    4 => ['title'=>'Search Requests (Business)','url'=>'search.php','class'=>''],
    5 => ['title'=>'Administration','url'=>'../admin/index.php','class'=>'']
  ];

  require_once 'src/database/connection.php';
  require_once 'pagelayout/templates/header.php'; 
  include 'src/database/dbReports.php';
