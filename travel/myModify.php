<?php

require_once 'config/config.php';

$errorFlag = 0;

require_once $rootFunc . 'fncFiles.php';
include_once $dataBase . 'myQueries.php';
require_once $dataBase . 'commonQueries.php';
require_once $includes . 'defaults/incDefaultTravelClasses.php';
require_once $includes . 'defaults/incMyRequestDefaults.php';
require_once $includes . 'incVehicleArray.php';

// Runs when the "submit" buttons is clicked
if (isset($_POST['submit'])) :
    $newStatus = $_POST['submit'];

    require_once $includes . 'incSanitizeValidate.php';

    if ($errorFlag === 0): // Default value set in validations.php
        // Script that updates data into the database.
        require_once $dataBase . 'modifyMyRequest.php';

        if ($errorFlag === 0):
            header("Location: myView.php?id=" . $id . "&success=1");
            exit;
        endif;
    endif;
endif;
?>

<?php require_once $templates . 'header.php'; ?>

  <input type="hidden" 
         name="id" 
         form="travelform" 
         value="<?php echo $id;?>">

  <input type="hidden" 
         name="workflowId" 
         form="travelform" 
         value="<?php echo $workflowId;?>">
         
<?php 
    require_once $forms . 'frmTravelRequest.php';
   
  require_once $templates . 'footer.php';
