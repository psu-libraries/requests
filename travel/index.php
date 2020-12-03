<?php

session_start();

$appName = "Travel Request";

$arrTabs = [
    0 => ['title' => 'Home','url' => '../index.php','class' => 'is-active'],
    1 => ['title' => 'New Request','url' => 'new.php','class' => ''],
    2 => ['title' => 'Request List','url' => 'requestList.php','class' => ''],
    3 => ['title' => 'Search Results','url' => 'search.php','class' => '']
];
 require_once 'pagelayout/templates/header.php';

 require_once 'pagelayout/templates/footer.php';
