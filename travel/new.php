<?php
require_once 'config/config.php';

require_once $defaults . 'incDefaultTravelClasses.php';
require_once $defaults . 'incNewDefaults.php';
require_once $dataBase . 'myQueries.php';

// Runs when the "submit" buttons is clicked
if (isset($_POST['submit'])) :

    require_once $includes . 'incSanitizeValidate.php';

    if ($errorFlag === 0): // Default value set in validations.php
        // Script that inserts data into the database.
        require_once $dataBase . 'insertRequest.php';

        if ($errorFlag === 0):
            header("Location: myView.php?id=" . $requestId . "&success=1");
            exit;
        endif;
    endif;
endif;

require_once 'pagelayout/templates/header.php';

require_once $forms . 'frmTravelRequest.php';

require_once 'pagelayout/templates/footer.php';
