<?php

function createGeneral($dsn, $array) {
    try {
        $sql = "INSERT INTO TrGeneral (request_id, destination, "
            . "departure_date, departure_time, return_date, return_time, "
            . "conference, sponsor, member, notes) "
            . "VALUES (:requestid, :destination, :departuredate, "
            . ":departuretime, :returndate, :returntime, :conference, "
            . ":sponsor, :member, :notes) "
            . "ON DUPLICATE KEY UPDATE "
            . "destination = :destination, "
            . "departure_date = :departuredate, "
            . "departure_time = :departuretime, "
            . "return_date = :returndate, "
            . "return_time = :returntime, "
            . "conference = :conference, "
            . "sponsor = :sponsor, "
            . "member = :member, "
            . "notes = :notes ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':destination', $array['destination']);
        $stmt->bindParam(':departuredate', $array['departureDate']);
        $stmt->bindParam(':departuretime', $array['departureTime']);
        $stmt->bindParam(':returndate', $array['returnDate']);
        $stmt->bindParam(':returntime', $array['returnTime']);
        $stmt->bindParam(':conference', $array['conference']);
        $stmt->bindParam(':sponsor', $array['sponsor']);
        $stmt->bindParam(':member', $array['member']);
        $stmt->bindParam(':notes', $array['notes']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createExpenses($dsn, $array) {
    try {
        $sql = "INSERT INTO TrExpenses (request_id, transportation, "
        . "estimated_mileage, lodging, food, registration, "
        . "prepay_registration, other, personal_travel, notes) "
        . "VALUES (:requestid, :transportation, :estmileage, :lodging, "
        . ":food, :registration, :prepay, :other, :perstravel, "
        . ":notes) "
        . "ON DUPLICATE KEY UPDATE "
        . "transportation = :transportation, "
        . "estimated_mileage = :estmileage, "
        . "lodging = :lodging, "
        . "food = :food, "
        . "registration = :registration, "
        . "prepay_registration = :prepay, "
        . "other = :other, "
        . "personal_travel = :perstravel, "
        . "notes = :notes ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':transportation', $array['transportation']);
        $stmt->bindParam(':estmileage', $array['estMileage']);
        $stmt->bindParam(':lodging', $array['lodging']);
        $stmt->bindParam(':food', $array['food']);
        $stmt->bindParam(':registration', $array['registration']);
        $stmt->bindParam(':prepay', $array['prepay']);
        $stmt->bindParam(':other', $array['other']);
        $stmt->bindParam(':perstravel', $array['persTravel']);
        $stmt->bindParam(':notes', $array['notes']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createFleet($dsn, $array) {
    try {
        $sql = "INSERT INTO TrFleet (request_id, vehicle, "
            . "pickup_date, pickup_time, dropoff_date, "
            . "dropoff_time, carpooling) "
            . "VALUES (:requestid, :vehicle, :pickupdate, "
            . ":pickuptime, :dropoffdate, :dropofftime, "
            . ":carpool) "
            . "ON DUPLICATE KEY UPDATE "
            . "vehicle = :vehicle, "
            . "pickup_date = :pickupdate, "
            . "pickup_time = :pickuptime, "
            . "dropoff_date = :dropoffdate, "
            . "dropoff_time = :dropofftime, "
            . "carpooling = :carpool ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':vehicle', $array['vehicle']);
        $stmt->bindParam(':pickupdate', $array['pickupDate']);
        $stmt->bindParam(':pickuptime', $array['pickupTime']);
        $stmt->bindParam(':dropoffdate', $array['dropoffDate']);
        $stmt->bindParam(':dropofftime', $array['dropoffTime']);
        $stmt->bindParam(':carpool', $array['carpooling']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createFinancial($dsn, $array) {
    try {
        $sql = "INSERT INTO TrFinancials (request_id, cost_type, "
        . "cost_object_number) "
        . "VALUES (:requestid, :costtype, :costobjnumber) "
        . "ON DUPLICATE KEY UPDATE "
        . "cost_type = :costtype, "
        . "cost_object_number = :costobjnumber ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':costtype', $array['costType']);
        $stmt->bindParam(':costobjnumber', $array['costObjNumber']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createWorkflow($dsn, $array) {
    try {
        $sql = "INSERT INTO TrApprovalWorkflows (request_id, "
        . "next_approver_id, date_entered) "
        . "VALUES (:requestid, :nextapprover, :dateentered )";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':nextapprover', $array['nextApprover']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createComment($dsn, $array) {
    try {
        $sql = "INSERT INTO TrApprovalComments (request_id, "
        . "commenter_id, comments, date_entered) "
        . "VALUES (:requestid, :commenterid, :comments, "
        . ":dateentered)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':commenterid', $array['commenterId']);
        $stmt->bindParam(':comments', $array['comments']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function modifyRequest($dsn, $array) {
    try {
        $sql = "UPDATE TrRequests "
        . "SET "
        . "travel_type = :traveltype, "
        . "requestor_name = :empname, "
        . "department = :department, "
        . "request_status = :requeststatus, "
        . "date_last_updated = :dateupdated "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':traveltype', $array['travelType']);
        $stmt->bindParam(':empname', $array['empName']);
        $stmt->bindParam(':department', $array['department']);
        $stmt->bindParam(':requeststatus', $array['requestStatus']);
        $stmt->bindParam(':dateupdated', $array['dateUpdated']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function modifyWorkflow($dsn, $array) {
    try {
        $sql = "UPDATE TrApprovalWorkflows "
        . "SET "
        . "next_approver_id = :nextapproverid "
        . "WHERE workflow_id = :workflowid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':workflowid', $array['workflowId']);
        $stmt->bindParam(':nextapproverid', $array['nextApprover']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function getRequests($dsn, $reqStatus) {

    $order = "DESC";
    if ($reqStatus == 'Closed'):
        $order = "ASC";
    endif;

    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
           . "r.request_status as status, r.submission_date, "
           . "g.conference "
           . "FROM TrRequests r "
           . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
           . "WHERE r.request_status = :reqstatus "
           . "ORDER BY r.request_id $order ";

       $stmt = $dsn->prepare($sql);

       $stmt->bindParam(':reqstatus', $reqStatus);

       $stmt->execute();
       return $stmt->fetchAll();
   } catch (PDOException $e) {
       return 100;
   }
}

function getRequestInfo($dsn, $requestId) {
    try {
        $sql = "SELECT r.travel_type, r.requestor_name , "
            . "r.access_id, r.department, r.request_status, "
            . "r.submission_date, g.destination, g.departure_date, "
            . "g.departure_time, g.return_date, g.return_time, "
            . "g.conference, g.sponsor, g.member, g.notes as gnotes, "
            . "e.transportation, e.estimated_mileage, e.lodging, "
            . "e.food, e.registration, e.prepay_registration, "
            . "e.other, e.personal_travel, e.notes as enotes, "
            . "v.vehicle, v.pickup_date, v.pickup_time, "
            . "v.dropoff_date, v.dropoff_time, v.carpooling, "
            . "f.cost_type, f.cost_object_number "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrExpenses e ON r.request_id = e.request_id "
            . "LEFT JOIN TrFleet v ON r.request_id = v.request_id "
            . "LEFT JOIN TrFinancials f ON r.request_id = f.request_id "
            . "WHERE r.request_id = :requestid ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
        return $stmt->fetch();
    } catch (PDOException $e) {
        return 100;
    }
}

function getWorkflow($dsn, $requestId) {
    try {
         $sql = "SELECT workflow_id "
            . "FROM TrApprovalWorkflows "
            . "WHERE request_id = :requestid "
            . "LIMIT 1 ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
        return $stmt->fetch();
    } catch (PDOException $e) {
        return 100;
    }
}

function getComments($dsn, $requestId) {
    try {
        $sql = "SELECT comments_id, commenter_id, comments, date_entered "
        . "FROM TrApprovalComments "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}
