<?php
require_once 'config/config.php';

$updateFlag = 0;
$action = "view";

require_once $dataBase . 'boQueries.php';
require_once $defaults . 'incDefaultTravelClasses.php';
require $defaults . 'incApproverRequestDefaults.php';

include $root . 'src/functions/fncFiles.php';

  if (isset($_POST['reviewed'])):
    $appStatus = 'Reviewed';
    // Sanitize all of the values in the $_POST array.
    include_once $root . 'src/functions/fncSanitizer.php';
    // Validate all of the values in the $_POST array.
    include_once 'src/validations.php';


    if (isset($_POST['nextApprover']) && length($_POST['nextApprover']) > 0):
        $arrWorkflows = [
            "requestId" => $requestId,
            "nextApprover" => $nextApprover,
            "approvalStatus" => 'Pending',
            "dateEntered" => $now
        ];

        $updateFlag = insertWorkflows($conn, $arrWorkflows);
    endif;

    if ($updateFlag == 0):
        if(length($comments) > 0):
            $arrComments = [
                "requestId" => $requestId,
                "commenterId" => $accessId,
                "comments" => $comments,
                "dateEntered" => $now
            ];

            $updateFlag = insertComments($conn, $arrComments);
        endif;
    endif;

    if ($updateFlag == 100):
        $errorFlag = 2;
    endif;
  endif;

  require_once 'pagelayout/templates/header.php'; 

// Displays error and success messages
include_once $root . 'src/inc/incErrorSuccessMessage.php';

require_once 'pagelayout/views/vTravelRequest.php';
require_once 'pagelayout/templates/footer.php';



