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

// Create a connection to the database
//    require_once SRC . 'database/dbConnection.php';

// Runs when the "submit" buttons is clicked
if (isset($_POST['submit'])) :

    require_once 'src/functions/fncValidations.php';

    //    displayArray($_POST);

    //displayArray(json_encode($_POST));
    //    echo json_encode($_POST);
    //        require_once SRC . '/database/connection.php';

    //        require_once SRC . '/database/queries.php';

    // Sanitize all of the values in the $_POST array.
        include_once '../src/functions/fncSanitizer.php';

    // Validate all of the values in the $_POST array.
        include_once 'src/validations.php';

    // Script that inserts data into the database.
    //        require_once SRC . '/database/insertRequest.php';

    // Displays error and success messages
    include_once '../src/inc/incErrorSuccessMessage.php';
endif;

require_once 'pagelayout/forms/frmTravelRequest.php';

require_once 'pagelayout/templates/footer.php';
