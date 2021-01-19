<?php

session_start();

$appName = "Travel Request";

$arrTabs = [
    0 => ['title' => 'Home','url' => '../index.php','class' => 'is-active'],
    1 => ['title' => 'New Request','url' => 'new.php','class' => ''],
    2 => ['title' => 'My Requests', 'url' => 'myRequests.php', 'class' => ''],
    3 => ['title' => 'Search Requests','url' => 'approverRequests.php','class' => ''],
    4 => ['title' => 'Search Requests','url' => 'search.php','class' => ''],
    5 => ['title' => 'Administration', 'url' => '../admin/index.php', 'class' => '']
];
 require_once 'pagelayout/templates/header.php';

 require_once 'pagelayout/templates/footer.php';
