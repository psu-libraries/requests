<?php
//echo "<pre>";
//var_dump(get_declared_classes());
//echo "</pre>";
//die();


    $now = date('m/d/Y');
    $status = "Needs Reviewed";
    $errorMessage = [];
displayArray($conn);
    // Insert data into the "request" table.
    $sql = "INSERT INTO request (travel_type, requestor_name, access_id,"
         . " department, submission_date, destination, departure_date,"
         . " departure_time, return_date, return_time, conference, sponsor,"
         . " member, notes)"
         . " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    $req = $conn->prepare($sql);

    $req->bind_param("sssssssssssssss", $travelType,$empName, $accessId, $department, $now, $destination, $departureDate, $departureTime, $returnDate, $returnTime, $conference, $sponsor, $member, $notes);

    $req->execute();
    unset($sql);

    // Check to see if the data was inserted into the "request" table.
    if (isset($req->insert_id)):
        $requestId = $req->insert_id;
    else:
        array_push($errorMessage, "The system has encountered an error. Try again later.");
        $requestId = 0;
    endif;

    // If there is a value other than 0 for the requestId, then continue with
    // inserting into the other tables.
    if ($requestId > 0):

// ********** EXPENSES TABLE
        // Insert data into the "expenses" table.
        $sql = "INSERT INTO expenses (request_id, transportation,"
             . " estimated_mileage, lodging, food, registration,"
             . " prepay_registration, other, total, personal_travel, notes,"
             . " date_added)"
             . " VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

        $exp = $conn->prepare($sql);

        $exp->bind_param('ididddsddsss', $requestId, $transportation, $estMileage, $lodging, $food, $registration, $prepay, $other, $total, $persTravel, $expNotes, $now);

        $exp->execute();
        unset ($sql);

        // Check to see if the data was inserted into the "request" table.
        if (isset($exp->insert_id)):
            $expId = $exp->insert_id;
        else:
            array_push($errorMessage, "The system has encountered an error. Try again later.");
            $expId = 0;
        endif;

// ********** FLEET TABLE
        // If the length of the "fleet" variable is greater than 0, then
        // insert the data into the "fleet" table.
        if(length($fleet) > 0):
            $sql = "INSERT INTO fleet (request_id, vehicle, pickup_date,"
                . " pickup_time, dropoff_date, dropoff_time, carpooling,"
                . " date_added)"
                . "VALUES(?,?,?,?,?,?,?,?)";

            $flt = $conn->prepare($sql);

            $flt->bind_param('isssssss',$requestId, $fleet, $pickupDate, $pickupTime, $dropoffDate, $dropoffTime, $carpool, $now);

            $flt->execute();
            unset($sql);
        endif;

// ********** FINANCIALS TABLE

        // If the length of either "costType" or "costObjNumber" is greater
        // than 0, then insert the data into the "financials" table.
        if (length($costType) > 0 || length($costObjNumber) > 0):
            $sql = "INSERT INTO financials (request_id, cost_type,"
                    . " cost_object_number, date_added)"
                    . "VALUES (?,?,?,?)";

            $fin = $conn->prepare($sql);

            $fin->bind_param('isis', $requestId, $costType, $costObjNumber, $now);

            $fin->execute();
            unset($sql);
        endif;

// ********** APPROVAL WORKFLOW TABLE
       // Insert the data into the "approval_workflow" table.
        $sql = "INSERT INTO approval_workflow (request_id, next_approver_id,"
             . " approval_status, date_added)"
             . " VALUES (?,?,?,?)";

        $app = $conn->prepare($sql);

        $app->bind_param('isss', $requestId, $status, $nextApprover, $now);

        $app->execute();
        unset($sql);

// ********** APPROVAL COMMENTS TABLE

        // If there are any comments added in the "APPROVALS" section of the
        // form, insert them into the "approval_comments" table.
        if(length($comments) > 0):
            $sql = "INSERT INTO approval_comments (request_id, comment,"
                 . " date_of_added)"
                 . " VALUES(?,?,?)";

            $apc = $conn->prepare($sql);

            $apc->bind_param('iss', $requestId, $comments, $now);

            $apc->execute();
            unset($sql);

        endif;

        // Validate file information and upload
        if (!empty($_FILES['files']['name'])):
            require_once SRC . '/functions/fncFiles.php';
            require_once SRC . '/inc/incUpload.php';
        endif;


    endif;

    // Display the correct message at the top of the form.
    if (count($errorMessage) == 0):
        $conn->commit();
        $successMessage = "Your request has been successfully submitted.";
    else:
//        array_push($errorMessage, "The system has encountered an error. Try again later.");
        $conn->rollBack();
    endif;
