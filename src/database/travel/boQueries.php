<?php


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
