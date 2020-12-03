<?php

session_start();

$host = $_SERVER['HTTP_HOST'];
$uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
$extra = "view.php";

echo "host: " . $host . "<br>";
echo "uri: " . $uri . "<br>";
echo "extra: " . $extra . "<br>";
echo "url: " . $host.$uri.'/'.$extra;

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
    include_once $root . '/src/functions/fncSanitizer.php';

    // Validation functions specific for travel request.
    require_once 'src/functions/fncValidations.php';

    // Validate all of the values in the $_POST array.
        include_once 'src/validations.php';

        if ($errorFlag === 0): // Default value set in validations.php
            // Script that inserts data into the database.
//            require_once 'src/database/insertRequest.php';

            if ($errorFlag === 0):
                header("Location: $host.$uri.'/view.php?id=$request_id'");
                exit;
            endif;
        endif;

    // Displays error and success messages
    include_once $root . '/src/inc/incErrorSuccessMessage.php';
endif;

require_once 'pagelayout/forms/frmTravelRequest.php';

require_once 'pagelayout/templates/footer.php';
