<?php

session_start();

$root = $_SERVER['DOCUMENT_ROOT'];

$id = 0;

if (isset($_GET['id']) && is_int((int)$_GET['id'])):
  $id = $_GET['id'];
elseif (isset($_POST['id']) && is_int((int)$_POST['id'])):
  $id = $_POST['id'];
endif;

require_once 'src/database/connection.php';
require_once $root . "/vendor/autoload.php";

require_once $root . '/src/functions/fncFormatter.php';
require_once $root . "/src/functions/fncUtility.php";

require_once 'src/inc/incDefaultTravelClasses.php';
require_once 'src/inc/incRequestDefaults.php';

// Runs when the "submit" buttons is clicked
if (isset($_POST['submit'])) :

  // Sanitize all of the values in the $_POST array.
  include_once $root . '/src/functions/fncSanitizer.php';

  // Validation functions specific for travel request.
  require_once 'src/functions/fncValidations.php';

  // Validate all of the values in the $_POST array.
      include_once 'src/validations.php';

      if ($errorFlag === 0): // Default value set in validations.php
          // Script that inserts data into the database.
          require_once 'src/database/modifyRequest.php';

          if ($errorFlag === 0):
              header("Location: view.php?id=" . $requestId . "&success=1");
              exit;
          endif;
      endif;

  // Displays error and success messages
  include_once $root . '/src/inc/incErrorSuccessMessage.php';
endif;

$appName = "Travel Request";

$arrTabs = [
  0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
  1 => ['title'=>'New Request','url'=>'new.php','class'=>''],
  2 => ['title'=>'My Requests','url'=>'myRequests.php','class'=>''],
  3 => ['title'=>'Search Requests (Approver)','url'=>'approverRequests.php','class'=>''],
  4 => ['title'=>'Search Requests (Business)','url'=>'search.php','class'=>'is-active'],
  5 => ['title'=>'Administration','url'=>'../admin/index.php','class'=>'']
];


?>

<?php require_once 'pagelayout/templates/header.php'; ?>

<form action="modify.php" method="post">
  <input type="hidden" name="id" value="<?php echo $id;?>">
  <?php require_once 'pagelayout/forms/frmTravelRequest.php'; ?>
</form>

<?php require_once 'pagelayout/templates/footer.php';
