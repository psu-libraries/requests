<?php

$errorMessage = [];
$insertFlag = 0;

if ((!isset($nextApprover)) || (isset($nextApprover) && length($nextApprover) === 0)):
    $nextApprover = 'BusOff';
endif;

$arrRequest = [
    "travelType" => $travelType,
    "empName" => $empName,
    "accessId" => $accessId,
    "department" => $department,
    "submitterId" => $userId,
    "submissionDate" => $now
];
    $requestId = createRequest($conn, $arrRequest);

// If there is a value other than 0 for the requestId, then continue with
// inserting into the other tables.
if ($requestId > 0):

    // ********** GENERAL TABLE
    $arrGeneral = [
        "requestId" => $requestId,
        "destination" => $destination,
        "departureDate" => $departureDate,
        "departureTime" => $departureTime,
        "returnDate" => $returnDate,
        "returnTime" => $returnTime,
        "conference" => $conference,
        "sponsor" => $sponsor,
        "member" => $member,
        "notes" => $gINotes
    ];

//    $insertFlag = createGeneral($conn, $arrGeneral);
    $insertFlag = createGeneral($conn, $arrGeneral);

    // ********** EXPENSES TABLE
    if ($insertFlag != 100):

        $arrExpenses = [
            "requestId" => $requestId,
            "transportation" => $transportation,
            "estMileage" => $estMileage,
            "lodging" => $lodging,
            "food" => $food,
            "registration" => $registration,
            "prepay" => $prepay,
            "other" => $other,
            "persTravel" => $persTravel,
            "notes" => $expNotes
        ];

        $insertFlag = createExpenses($conn, $arrExpenses);
    endif;

    // ********** FLEET TABLE
    // If the length of the "fleet" variable is greater than 0, then
    // insert the data into the "fleet" table.
    if ($insertFlag != 100):
        if(length($fleet) > 0):
            $arrFleet = [
                "requestId" => $requestId,
                "vehicle" => $fleet,
                "pickupDate" => $pickupDate,
                "pickupTime" => $pickupTime,
                "dropoffDate" => $dropoffDate,
                "dropoffTime" => $dropoffTime,
                "carpool" => $carpool
            ];
            $insertFlag = createFleet($conn, $arrFleet);
        endif;
    endif;

    // ********** FINANCIALS TABLE

    // If the length of either "costType" or "costObjNumber" is greater
    // than 0, then insert the data into the "financials" table.
    if ($insertFlag != 100):
        if (length($costType) > 0 || length($costObjNumber) > 0):
            $arrFinancial = [
                "requestId" => $requestId,
                "costType" => $costType,
                "costObjNumber" => $costObjNumber
            ];

            $insertFlag = createFinancial($conn, $arrFinancial);
        endif;
    endif;

    // ********** APPROVAL WORKFLOW TABLE
    // Insert the data into the "approval_workflow" table.
    if ($insertFlag != 100):
        $arrWorkflow = [
            "requestId" => $requestId,
            "nextApprover" => $nextApprover,
            "dateEntered" => $now
        ];
        $insertFlag = createWorkflow($conn, $arrWorkflow);
    endif;


    // ********** APPROVAL COMMENTS TABLE
    // If there are any comments added in the "APPROVALS" section of the
    // form, insert them into the "approval_comments" table.
    if ($insertFlag != 100):
        if(length($comments) > 0):
            $arrComments = [
                "requestId" => $requestId,
                "commenterId" => $_SESSION['user'],
                "comments" => $comments,
                "dateEntered" => $now
            ];

            $insertFlag = createComment($conn, $arrComments);
        endif;
    endif;

    // Validate file information and upload
    if ($insertFlag != 100):
        if (!empty($_FILES['files']['name'][0])):
            $tmpFolder = "TR";
            require_once $rootFunc . 'fncFiles.php';
            require_once $rootInc . 'incUpload.php';
        endif;
    endif;

    // Display the correct message at the top of the form.
    if ($insertFlag == 100):
        $errorFlag = 2;
    elseif ($fileFlag == 100):
        $errorFlag = 3;
    endif;
endif;
