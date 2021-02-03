<?php

$now = date('m/d/Y');
$errorMessage = [];
$updateFlag = 0;

if ((!isset($nextApprover)) || (isset($nextApprover) && length($nextApprover) === 0)):
    $nextApprover = 'BusOff';
endif;

$arrRequest = [
    "requestId" => $id,
    "travelType" => $travelType,
    "empName" => $empName,
    "accessId" => $accessId,
    "department" => $department,
    "requestStatus" => $newStatus,
    "dateUpdated" => $now
];
    $updateFlag = modifyRequest($conn, $arrRequest);

// If there is a value other than 0 for the requestId, then continue with
// inserting into the other tables.
if ($updateFlag != 100):

// ********** GENERAL TABLE
    $arrGeneral = [
        "requestId" => $id,
        "destination" => $destination,
        "departureDate" => $departureDate,
        "departureTime" => $departureTime,
        "returnDate" => $returnDate,
        "returnTime" => $returnTime,
        "conference" => $conference,
        "sponsor" => $sponsor,
        "member" => $member,
        "notes" => $gINotes,
        "dateUpdated" => $now
    ];

    $updateFlag = modifyGeneral($conn, $arrGeneral);

// ********** EXPENSES TABLE
    if ($updateFlag != 100):

        $arrExpenses = [
            "requestId" => $id,
            "transportation" => $transportation,
            "estMileage" => $estMileage,
            "lodging" => $lodging,
            "food" => $food,
            "registration" => $registration,
            "prepay" => $prepay,
            "other" => $other,
            "persTravel" => $persTravel,
            "notes" => $expNotes,
            "dateUpdated" => $now
        ];

        $updateFlag = modifyExpenses($conn, $arrExpenses);

    endif;
// ********** FLEET TABLE
    // If the length of the "fleet" variable is greater than 0, then
    // insert the data into the "fleet" table.
    if ($updateFlag != 100):
        if(length($fleet) > 0):
            $arrFleet = [
                "requestId" => $id,
                "vehicle" => $fleet,
                "pickupDate" => $pickupDate,
                "pickupTime" => $pickupTime,
                "dropoffDate" => $dropoffDate,
                "dropoffTime" => $dropoffTime,
                "carpooling" => $carpool,
                "dateUpdated" => $now
            ];

            $updateFlag = modifyFleet($conn, $arrFleet);
        endif;
    endif;

// ********** FINANCIALS TABLE

    // If the length of either "costType" or "costObjNumber" is greater
    // than 0, then insert the data into the "financials" table.
    if ($updateFlag != 100):
        if (length($costType) > 0 || length($costObjNumber) > 0):

            $arrFinancials = [
                "requestId" => $id,
                "costType" => $costType,
                "costObjNumber" => $costObjNumber,
                "dateUpdated" => $now
            ];

            $updateFlag = modifyFinancials($conn, $arrFinancials);
        endif;
    endif;

// ********** APPROVAL WORKFLOW TABLE
    // Insert the data into the "approval_workflow" table.

    if ($updateFlag != 100):

        $workflow = getApproverWorkflow($conn, $id, $userId);

        $workflowId = $workflow['workflow_id'];

        if ($newStatus == 'Approve'):
            $arrWorkflows = [
                "workflowId" => $workflowId,
                "approverId" => $userId,
                "nextApprover" => $nextApprover,
                "dateUpdated" => $now
            ];
            $updateFlag = insertWorkflows($conn, $arrWorkflows);
        elseif ($newStatus == 'Reject'):
            $arrWorkflows = [
                "workflowId" => $workflowId,
                "approverId" => $userId,
                "nextApprover" => '',
                "dateEntered" => $now
            ];
            $updateFlag = modifyApproverWorkflow($conn, $arrWorkflows);
        endif;
    endif;
// ********** APPROVAL COMMENTS TABLE

    // If there are any comments added in the "APPROVALS" section of the
    // form, insert them into the "approval_comments" table.
    if ($updateFlag != 100):
        if(length($comments) > 0):

            $arrComments = [
                "requestId" => $id,
                "commenterId" => $accessId,
                "comments" => $comments,
                "dateEntered" => $now
            ];

            $updateFlag = insertComments($conn, $arrComments);
        endif;
    endif;

    // Validate file information and upload
    if ($updateFlag != 100):
        if (!empty($_FILES['files']['name'][0])):
            $tmpFolder = "TR";
            require_once $root . '/src/functions/fncFiles.php';
            require_once $root . '/src/inc/incUpload.php';
        endif;
    endif;

    // Display the correct message at the top of the form.
    if ($updateFlag == 100):
        $errorFlag = 2;
    elseif ($fileFlag == 100):
        $errorFlag = 3;
    endif;

//    if ($errorFlag > 0):
//        deleteRequest($conn, $requestId);
//        deleteGeneral($conn, $requestId);
//        deleteExpenses($conn, $requestId);
//        deleteFleet($conn, $requestId);
//        deleteFinancials($conn, $requestId);
//        deleteAllWorkflows($conn, $requestId);
//        deleteAllComments($conn, $requestId);
//    endif;
endif;