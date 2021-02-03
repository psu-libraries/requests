<?php

$errorMessage = [];
$updateFlag = 0;

$arrRequest = [
    "requestId" => $id,
    "travelType" => $travelType,
    "empName" => $empName,
    "accessId" => strtolower($accessId),
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
        "notes" => $gINotes
    ];

    $updateFlag = createGeneral($conn, $arrGeneral);

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
            "notes" => $expNotes
        ];

            $updateFlag = createExpenses($conn, $arrExpenses);
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
                "carpooling" => $carpool
            ];
            $updateFlag = createFleet($conn, $arrFleet);
        endif;
    endif;

// ********** FINANCIALS TABLE

    // If the length of either "costType" or "costObjNumber" is greater
    // than 0, then insert the data into the "financials" table.
    if ($updateFlag != 100):
        if (length($costType) > 0 || length($costObjNumber) > 0):
            $arrFinancial = [
                "requestId" => $id,
                "costType" => $costType,
                "costObjNumber" => $costObjNumber,
                "dateUpdated" => $now
            ];
            $updateFlag = createFinancial($conn, $arrFinancial);
        endif;
    endif;

// ********** APPROVAL WORKFLOW TABLE

    // If the approver approves the request, then modify the workflow by
    // 
    if ($updateFlag != 100):
     
        if ($oldStatus == 'Approved' || $newStatus == 'Rejected'):
            $arrWorkflow = [
                "workflowId" => $workflowId,
                "approverId" => strtolower($userId),
                "nextApproverId" => ''
            ];
            $updateFlag = modifyWorkflow($conn, $arrWorkflow);
        endif;

        if ($oldStatus == 'Approved'):
            $arrWorkflow = [
                "requestId" => $id,
                "nextApprover" => strtolower($nextApprover),
                "dateEntered" => $now
            ];
            $updateFlag = createWorkflow($conn, $arrWorkflow);
        endif;
 
    endif;
// ********** APPROVAL COMMENTS TABLE

    // If there are any comments added in the "APPROVALS" section of the
    // form, insert them into the "approval_comments" table.
    if ($updateFlag != 100):
        if(length($comments) > 0):

            $arrComments = [
                "requestId" => $id,
                "commenterId" => strtolower($userId),
                "comments" => $comments,
                "dateEntered" => $now
            ];

            $updateFlag = createComment($conn, $arrComments);
        endif;
    endif;

    // Validate file information and upload
    if ($updateFlag != 100):
        if (!empty($_FILES['files']['name'][0])):
            $tmpFolder = "TR";
            require_once $rootFunc . 'fncFiles.php';
            require_once $rootInc . 'incUpload.php';
        endif;
    endif;

    // Display the correct message at the top of the form.
    if ($updateFlag == 100):
        $errorFlag = 2;
    elseif ($fileFlag == 100):
        $errorFlag = 3;
    endif;

endif;