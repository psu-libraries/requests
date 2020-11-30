<?php

session_start();

$appName = "Travel Request";

$arrTabs = [
    0 => ['title' => 'Home', 'url' => '../index.php', 'class' => ''],
    1 => ['title' => 'New Request', 'url' => 'new.php', 'class' => 'is-active'],
    2 => ['title' => 'Request List', 'url' => 'requestList.php', 'class' => ''],
    3 => ['title' => 'Search Results', 'url' => 'search.php', 'class' => '']
  ];

require_once 'pagelayout/templates/header.php';

require_once 'src/inc/incDefaultTravelClasses.php';
require_once 'src/inc/incNewDefaults.php';

// Runs when the "submit" buttons is clicked
if (isset($_POST['submit'])) :

    // Create a connection to the database
    require_once 'src/database/connection.php';

    // Sanitize all of the values in the $_POST array.
    include_once '../src/functions/fncSanitizer.php';

    // Validation functions specific for travel request.
    require_once 'src/functions/fncValidations.php';

    // Validate all of the values in the $_POST array.
        include_once 'src/validations.php';

        if ($errorFlag === 0): // Default value set in validations.php
            // Script that inserts data into the database.
            require_once 'src/database/insertRequest.php';
        endif;

    // Displays error and success messages
    include_once '../src/inc/incErrorSuccessMessage.php';
endif;

require_once 'pagelayout/forms/frmTravelRequest.php';

require_once 'pagelayout/templates/footer.php';
