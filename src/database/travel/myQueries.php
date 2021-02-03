<?php

function createRequest($dsn, $params) {
    try {
        $sql = "INSERT INTO TrRequests (travel_type, requestor_name, "
            . "access_id, department, request_status, submitter_id, "
            . "submission_date) "
            . "VALUES (:traveltype, :requestorname, :accessid, :department, "
            . "'Pending', :submitterid, :submissiondate)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':traveltype', $params['travelType']);
        $stmt->bindParam(':requestorname', $params['empName']);
        $stmt->bindParam(':accessid', $params['accessId']);
        $stmt->bindParam(':department', $params['department']);
        $stmt->bindParam(':submitterid', $params['submitterId']);
        $stmt->bindParam(':submissiondate', $params['submissionDate']);

        $stmt->execute();
        return $dsn->lastInsertId();
    } catch (PDOException $e) {
        return 0;
    }
}

function modifyRequest($dsn, $params) {
    try {
        $sql = "UPDATE TrRequests "
        . "SET "
        . "travel_type = :traveltype, "
        . "requestor_name = :empname, "
        . "department = :department, "
        . "request_status = :requeststatus, "
        . "date_last_updated = :dateupdated "
        . "WHERE request_id = :requestid "
        . "AND submitter_id = :userid ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':traveltype', $params['travelType']);
        $stmt->bindParam(':empname', $params['empName']);
        $stmt->bindParam(':department', $params['department']);
        $stmt->bindParam(':requeststatus', $params['requestStatus']);
        $stmt->bindParam(':dateupdated', $params['dateUpdated']);
        $stmt->bindParam(':userid', $params['userId']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function modifyWorkflow($dsn, $params) {
    try {
        $sql = "UPDATE TrApprovalWorkflows "
        . "SET "
        . "next_approver_id = :nextapproverid "
        . "WHERE workflow_id = :workflowid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':workflowid', $params['workflowId']);
        $stmt->bindParam(':nextapproverid', $params['nextApprover']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function getRequestInfo($dsn, $requestId, $userId) {
    try {
        $sql = "SELECT r.travel_type, r.requestor_name , "
            . "r.access_id, r.department, r.request_status as status, "
            . "r.submission_date, g.destination, g.departure_date, "
            . "g.departure_time, g.return_date, g.return_time, "
            . "g.conference, g.sponsor, g.member, g.notes as gnotes, "
            . "e.transportation, e.estimated_mileage, e.lodging, "
            . "e.food, e.registration, e.prepay_registration, "
            . "e.other, e.personal_travel, e.notes as enotes, "
            . "v.vehicle, v.pickup_date, v.pickup_time, "
            . "v.dropoff_date, v.dropoff_time, v.carpooling, "
            . "f.cost_type, f.cost_object_number, w.workflow_id, "
            . "w.next_approver_id "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrExpenses e ON r.request_id = e.request_id "
            . "LEFT JOIN TrFleet v ON r.request_id = v.request_id "
            . "LEFT JOIN TrFinancials f ON r.request_id = f.request_id "
            . "LEFT JOIN TrApprovalWorkflows w ON r.request_id = w.request_id "
            . "WHERE r.request_id = :requestid "
            . "AND r.submitter_id = :userid ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetch();
    } catch (PDOException $e) {
        return 100;
    }
}

function getRequests($dsn, $userId, $reqStatus) {

    $order = "ASC";
    if ($reqStatus == 'Pending' || $reqStatus == 'Change'):
        $order = "DESC";
    endif;

    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
            . "r.request_status as status, r.submission_date, g.conference "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "WHERE r.submitter_id = :userid "
            . "AND r.request_status = :reqstatus "
            . "ORDER BY r.submission_date $order";

       $stmt = $dsn->prepare($sql);

       $stmt->bindParam(':userid', $userId);
       $stmt->bindParam(':reqstatus', $reqStatus);

       $stmt->execute();       
       return $stmt->fetchAll();
   } catch (PDOException $e) {
       return 100;
   }
}


