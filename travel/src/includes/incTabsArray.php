<?php

$page = $_SERVER['PHP_SELF'];

$newtab = strpos($page, '/travel/new.php');
$mytab = strpos($page, '/travel/my');
$apptab = strpos($page, '/travel/approver');
$botab = strpos($page, '/travel/bo');

$newtab === 0 ? $newClass = 'is-active' : $newClass ='';
$mytab === 0 ? $myClass = 'is-active' : $myClass ='';
$apptab === 0 ? $appClass = 'is-active' : $appClass ='';
$botab === 0 ? $boClass = 'is-active' : $boClass ='';

$arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class'=> $newClass],
    2 => ['title' => 'My Requests', 'url' => 'myRequests.php', 'class' => $myClass],
    3 => ['title'=>'Search Requests (Approver)','url'=>'approverRequests.php','class'=>$appClass],
    4 => ['title'=>'Search Results (Business Office)','url'=>'boRequests.php','class'=>$boClass],
    5 => ['title' => 'Administration', 'url' => '../admin/index.php', 'class'=>'']
];