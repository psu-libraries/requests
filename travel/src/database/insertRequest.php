<?php

$now = date('m/d/Y');
$status = "Needs Reviewed";
$errorMessage = [];
$insertFlag = 0;

if ((!isset($nextApprover)) || (isset($nextApprover) && length($nextApprover) === 0)):
    $nextApprover = 'BusOff';
endif;

$conn->beginTransaction();
try {
    // Insert data into the "request" table.
    $sql = "INSERT INTO TrRequests (travel_type, requestor_name, access_id,"
        . " department, submission_date, destination, departure_date,"
        . " departure_time, return_date, return_time, conference, sponsor,"
        . " member, notes)"
        . " VALUES (:traveltype, :requestorname, :accessid, :department, "
        . " :submissiondate, :destination, :departuredate, :departuretime, "
        . " :returndate, :returntime, :conference, :sponsor, :member, :notes)";

    $req = $conn->prepare($sql);

    $req->bindParam(':traveltype', $travelType);
    $req->bindParam(':requestorname', $empName);
    $req->bindParam(':accessid', $_SESSION['user']);
    $req->bindParam(':department', $department);
    $req->bindParam(':submissiondate', $now);
    $req->bindParam(':destination', $destination);
    $req->bindParam(':departuredate', $departureDate);
    $req->bindParam(':departuretime', $departureTime);
    $req->bindParam(':returndate', $returnDate);
    $req->bindParam(':returntime', $returnTime);
    $req->bindParam(':conference', $conference);
    $req->bindParam(':sponsor', $sponsor);
    $req->bindParam(':member', $member);
    $req->bindParam(':notes', $gINotes);

    $req->execute();
    unset($sql);

    $requestId = $conn->lastInsertId();

} catch (PDOException $e) {
    $insertFlag += 1;
}

// If there is a value other than 0 for the requestId, then continue with
// inserting into the other tables.
if ($requestId > 0):

// ********** EXPENSES TABLE
    // Insert data into the "expenses" table.
    try {
        $sql = "INSERT INTO TrExpenses (request_id, transportation,"
            . " estimated_mileage, lodging, food, registration,"
            . " prepay_registration, other, personal_travel, notes,"
            . " date_entered)"
            . " VALUES (:requestid, :transportation, :estimatedmileage,"
            . " :lodging, :food, :registration, :prepayregistration, :other,"
            . " :personaltravel, :notes, :dateentered)";

        $exp = $conn->prepare($sql);

        $exp->bindParam(':requestid', $requestId);
        $exp->bindParam(':transportation', $transportation);
        $exp->bindParam(':estimatedmileage', $estMileage);
        $exp->bindParam(':lodging', $lodging);
        $exp->bindParam(':food', $food);
        $exp->bindParam(':registration', $registration);
        $exp->bindParam(':prepayregistration', $prepay);
        $exp->bindParam(':other', $other);
        $exp->bindParam(':personaltravel', $persTravel);
        $exp->bindParam(':notes', $expNotes);
        $exp->bindParam(':dateentered', $now);

        $exp->execute();
        unset ($sql);
    } catch (PDOException $e) {
        $insertFlag += 1;
    }

// ********** FLEET TABLE
    // If the length of the "fleet" variable is greater than 0, then
    // insert the data into the "fleet" table.
    if(length($fleet) > 0):
        try {
            $sql = "INSERT INTO TrFleet (request_id, vehicle, pickup_date,"
                . " pickup_time, dropoff_date, dropoff_time, carpooling,"
                . " date_entered)"
                . "VALUES(:requestid, :vehicle, :pickupdate, :pickuptime, "
                . ":dropoffdate, :dropofftime, :carpooling, :dateentered)";

            $flt = $conn->prepare($sql);

            $flt->bindParam(':requestid', $requestId);
            $flt->bindParam(':vehicle', $fleet);
            $flt->bindParam(':pickupdate', $pickupDate);
            $flt->bindParam(':pickuptime', $pickupTime);
            $flt->bindParam(':dropoffdate', $dropoffDate);
            $flt->bindParam(':dropofftime', $dropoffTime);
            $flt->bindParam(':carpooling', $carpool);
            $flt->bindParam(':dateentered', $now);

            $flt->execute();
            unset($sql);
        } catch (PDOException $e) {
            $insertFlag += 1;
        }
    endif;

// ********** FINANCIALS TABLE

    // If the length of either "costType" or "costObjNumber" is greater
    // than 0, then insert the data into the "financials" table.
    if (length($costType) > 0 || length($costObjNumber) > 0):
        try {
            $sql = "INSERT INTO TrFinancials (request_id, cost_type, "
                    . "cost_object_number, date_entered) "
                    . "VALUES (:requestid, :costtype, :costobjectnumber, "
                    . ":dateentered)";

            $fin = $conn->prepare($sql);

            $fin->bindParam(':requestid', $requestId);
            $fin->bindParam(':costtype', $costType);
            $fin->bindParam(':costobjectnumber', $costObjNumber);
            $fin->bindParam(':dateentered', $now);

            $fin->execute();
            unset($sql);
        } catch (PDOException $e) {
            $insertFlag += 1;
        }
    endif;

// ********** APPROVAL WORKFLOW TABLE
    // Insert the data into the "approval_workflow" table.


    try {
        $sql = "INSERT INTO TrApprovalWorkflows (request_id, approver_id, next_approver_id,"
             . " approval_status, date_entered)"
             . " VALUES (:requestid, :approverid, :nextapproverid, :approvalstatus,"
             . " :dateentered)";

        $app = $conn->prepare($sql);

        $app->bindParam(':requestid', $requestId);
        $app->bindParam(':approverid', $_SESSION['user']);
        $app->bindParam(':nextapproverid', $nextApprover);
        $app->bindParam(':approvalstatus', $status);
        $app->bindParam(':dateentered', $now);

        $app->execute();
        unset($sql);
    } catch (PDOException $e) {
        $insertFlag += 1;
    }

// ********** APPROVAL COMMENTS TABLE

    // If there are any comments added in the "APPROVALS" section of the
    // form, insert them into the "approval_comments" table.
    if(length($comments) > 0):
        try {
            $sql = "INSERT INTO TrApprovalComments (request_id, commenter_id, "
                . "comments, date_entered)"
                . " VALUES(:requestid, :commenterid, :comments, :dateentered)";

            $apc = $conn->prepare($sql);

            $apc->bindParam(':requestid', $requestId);
            $apc->bindParam(':commenterid', $_SESSION['user']);
            $apc->bindParam(':comments', $comments);
            $apc->bindParam(':dateentered', $now);

            $apc->execute();
            unset($sql);
        } catch (PDOException $e) {
            $insertFlag += 1;
        }
    endif;

    // Validate file information and upload
    if (!empty($_FILES['files']['name'][0])):
        $folder = "TR";
        require_once '../src/functions/fncFiles.php';
        require_once '../src/inc/incUpload.php';
    endif;

endif;

// Display the correct message at the top of the form.
if ($insertFlag == 0):
    $conn->commit();
else:
    $conn->rollBack();
    $errorFlag = 2;
endif;
