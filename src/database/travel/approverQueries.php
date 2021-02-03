<?php

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
            . "f.cost_type, f.cost_object_number, w.workflow_id "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrExpenses e ON r.request_id = e.request_id "
            . "LEFT JOIN TrFleet v ON r.request_id = v.request_id "
            . "LEFT JOIN TrFinancials f ON r.request_id = f.request_id "
            . "LEFT JOIN TrApprovalWorkflows w ON r.request_id = w.request_id "
            . "WHERE r.request_id = :requestid "
            . "AND w.next_approver_id = :userid ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetch();
    } catch (PDOException $e) {
        return 100;
    }
}

function getViewRequest($dsn, $requestId, $userId) {
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
            . "LEFT JOIN TrApprovalWorkflows w ON r.request_id = w.request_id "
            . "WHERE r.request_id = :requestid "
            . "AND w.approver_id = :userid "
            . "OR w.next_approver_id = :userid ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetch();
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
        . "approver_id = :approverid, "
        . "next_approver_id = :nextapproverid "
        . "WHERE workflow_id = :workflowid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':workflowid', $array['workflowId']);
        $stmt->bindParam(':approverid', $array['approverId']);
        $stmt->bindParam(':nextapproverid', $array['nextApproverId']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function getPending($dsn, $userId) {
    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
            . "r.request_status as status, r.submission_date, "
            . "g.conference "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
            . "WHERE a.next_approver_id = :userid "
            . "AND r.request_status = 'Pending' "
            . "ORDER BY r.request_id DESC";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}

function getChange($dsn, $userId) {
    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
            . "r.request_status as status, r.submission_date, "
            . "g.conference, a.approver_id, a.next_approver_id "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
            . "WHERE a.next_approver_id = :userid "
            . "AND r.request_status = 'Change' "
            . "ORDER BY r.submission_date DESC";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();        
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}

function getApproved($dsn, $userId) {
    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
        . "'Approved' as status, r.submission_date, "
        . "g.conference, a.approver_id, a.next_approver_id "
        . "FROM TrRequests r "
        . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
        . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
        . "WHERE a.approver_id = :userid "
        . "AND r.request_status IN ('Approved', 'Pending') "
        . "ORDER BY r.submission_date ASC";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetchAll();
   } catch (PDOException $e) {
        return 100;
   }
}

function getRejected($dsn, $userId) {
    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
            . "r.request_status as status, r.submission_date, g.conference "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
            . "WHERE a.approver_id = :userid "
            . "AND r.request_status = 'Rejected' "
            . "ORDER BY r.request_id ASC ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}

function getReviewed($dsn, $userId) {
    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
            . "r.request_status as status, r.submission_date, g.conference "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
            . "WHERE a.approver_id = :userid "
            . "AND r.request_status = 'Reviewed' "
            . "ORDER BY r.submission_date ASC";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}

function getClosed($dsn, $userId) {
    try {
        $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, "
            . "r.request_status as status, r.submission_date, g.conference "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
            . "WHERE a.approver_id = :userid "
            . "AND r.request_status = 'Closed' "
            . "ORDER BY r.submission_date ASC";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}

function getWorkflowIdForModify($dsn, $requestId, $userId) {
    try {
        $sql = "SELECT w.workflow_id "
            . "FROM TrApprovalWorkflows w "
            . "LEFT JOIN TrRequests r ON w.request_id = r.request_id "
            . "WHERE r.request_id = :requestid "
            . "AND a.next_approver_id = :userid ";
        
        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
        return $stmt->fetch();
    } catch (PDOException $e) {
        return 100;
    }
}

