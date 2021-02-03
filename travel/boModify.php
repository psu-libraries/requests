<?php
require_once 'config/config.php';

$errorFlag = 0;

require_once $rootFunc . 'fncFiles.php';
require_once $dataBase . 'boQueries.php';
require_once $dataBase . 'commonQueries.php';
require_once $defaults . 'incDefaultTravelClasses.php';
require_once $defaults . 'incBoRequestDefaults.php';

require_once $includes . 'incVehicleArray.php';

// Runs when the "submit" buttons is clicked
if (isset($_POST['submit'])) :

    $newStatus = $_POST['submit'];

    require_once $includes . 'incSanitizeValidate.php';

    if ($errorFlag === 0): // Default value set in validations.php
        // Script that inserts data into the database.
        require_once $dataBase . 'modifyBoRequest.php';

        if ($errorFlag === 0):
                header("Location: boView.php?id=" . $id . "&success=1");
                exit;
        endif;
    endif;
endif;

require_once $templates . 'header.php'; 
?>

  <input type="hidden" 
         name="id"
         form="travelform"
         value="<?php echo $id;?>">

  <?php require_once $forms . 'frmTravelRequest.php';

require_once $templates . 'footer.php';
