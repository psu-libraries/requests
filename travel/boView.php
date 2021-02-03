<?php
require_once 'config/config.php';

$updateFlag = 0;
$action = "view";

include_once $rootFunc . 'fncFiles.php';
require_once $dataBase . 'boQueries.php';
require_once $defaults . 'incDefaultTravelClasses.php';
require $defaults . 'incBoRequestDefaults.php';

if (isset($_POST['reviewed'])):
    $appStatus = 'Reviewed';
    
    // Sanitize all of the values in the $_POST array.
    include_once $rootFunc . 'fncSanitizer.php';
    // Validate all of the values in the $_POST array.
    include_once $validations . 'validations.php';


    if (isset($_POST['nextApprover']) && length($_POST['nextApprover']) > 0):
        $arrWorkflows = [
            "requestId" => $requestId,
            "nextApprover" => $nextApprover,
            "approvalStatus" => 'Pending',
            "dateEntered" => $now
        ];

        $updateFlag = createWorkflow($conn, $arrWorkflows);
    endif;

    if ($updateFlag == 0):
        if(length($comments) > 0):
            $arrComments = [
                "requestId" => $requestId,
                "commenterId" => $accessId,
                "comments" => $comments,
                "dateEntered" => $now
            ];

            $updateFlag = createComment($conn, $arrComments);
        endif;
    endif;

    if ($updateFlag == 100):
        $errorFlag = 2;
    endif;
endif;

require_once $templates . 'header.php'; 
require_once $views . 'vTravelRequest.php';
require_once $templates . 't/templates/footer.php';



