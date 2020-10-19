<?php
  session_start();
//echo "is file: " . is_file("../src/inc/incConstants.php");
//  require_once '../src/inc/incConstants.php';

//echo "pagelayout: " . ROOT . "<br>";

  $appName = "Travel Request";

  $arrTabs = [
    0 => ['title' => 'Home','url' => '../index.php','class' => 'is-active'],
    1 => ['title' => 'New Request','url' => 'new.php','class' => ''],
    2 => ['title' => 'Request List','url' => 'requestList.php','class' => ''],
    3 => ['title' => 'Search Results','url' => 'search.php','class' => '']
  ];
?>

<?php require_once 'pagelayout/templates/header.php';?>
<p>
  This is the home page. Probably need some text for this page.
</p>

<?php include_once 'pagelayout/templates/footer.php';
