<?php

function insertWorkflows($dsn, $array) {

    try {
        $sql = "INSERT INTO TrApprovalWorkflows (request_id, "
        . "approver_id, next_approver_id, approval_status, date_entered) "
        . "VALUES (:requestid, :approverid, :nextapprover, :approvalstatus, "
        . ":dateentered )";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':approverid', $array['approverId']);
        $stmt->bindParam(':nextapprover', $array['nextApprover']);
        $stmt->bindParam(':approvalstatus', $array['approvalStatus']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function deleteAllWorkflows($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrApprovalWorkflows "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function deleteSingleWorkflow($dsn, $workflowId) {
    try {
        $sql = "DELETE FROM TrApprovalWorkflows "
        . "WHERE workflow_id = :workflowid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':workflowid', $workflowId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function modifyWorkflow($dsn, $array) {
    try {
        $sql = "UPDATE TrApprovalWorkflows "
        . "SET "
        . "approver_id = :approverid, "
        . "next_approver_id = :nextapproverid, "
        . "approval_status = :approvalstatus, "
        . "date_last_updated = :dateupdated "
        . "WHERE workflow_id = :workflowid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':workflowid', $array['workflowId']);
        $stmt->bindParam(':approverid', $array['approverId']);
        $stmt->bindParam(':nextapproverid', $array['nextApprover']);
        $stmt->bindParam(':approvalstatus', $array['approvalStatus']);
        $stmt->bindParam(':dateupdated', $array['dateUpdated']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function selectWorkflows($dsn, $requestId) {
    try {
        $sql = "SELECT workflow_id, approver_id, next_approver_id, "
        . "approval_status "
        . "FROM TrApprovalWorkflows "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->fetch();
}

function selectSingleWorkflow($dsn, $requestId, $accessId='') {
    try {
         $sql = "SELECT workflow_id, next_approver_id "
            . "FROM TrApprovalWorkFlows "
            . "WHERE request_id = :requestid "
            . "AND approver_id = :accessid ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
        $stmt->bindParam(':accessid', $accessId);

        $stmt->execute();

    } catch (PDOException $e) {
        return 100;
    }
    return $stmt->fetch();
}