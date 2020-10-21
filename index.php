<?php
  session_start();
  $appName = "University Libraries Request System";
  $arrTabs = [
    0 => ['title' => 'Home','url' => 'index.php','class' => 'is-active'],
    1 => ['title' => 'Travel Request','url' => 'travel/index.php','class' => '']
  ];
?>

<?php require_once 'pagelayout/templates/header.php'; ?>


<?php require_once 'pagelayout/templates/footer.php';
