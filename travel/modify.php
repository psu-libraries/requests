<?php
  $appName = "Travel Request";

$arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class'=>''],
    2 => ['title'=>'Request List','url'=>'requestList.php','class'=>'is-active'],
    3 => ['title'=>'Search Results','url'=>'search.php','class'=>'']
  ];

  $travelType = 'administrative';
  $empName = 'Bugs Bunny';
  $accessId = 'bbb1';
  $department = 'Carrot Library';
  $submissionDate = '08/10/2020';
?>

<?php require_once 'pagelayout/templates/header.php'; ?>

<form action="modify.php" method="post">
  <?php require_once 'pagelayout/forms/frmTravelRequest.php'; ?>
</form>

<?php require_once 'pagelayout/templates/footer.php';
