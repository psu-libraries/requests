<?php

function getAllRequests($dsn, $appStatus='') {
    try {
         $sql = "SELECT r.request_id, r.requestor_name as name, r.access_id, r.submission_date, "
            . "g.conference, a.approval_status "
            . "FROM TrRequests r "
            . "LEFT JOIN TrGeneral g ON r.request_id = g.request_id "
            . "LEFT JOIN TrApprovalWorkflows a ON r.request_id = a.request_id "
            . "WHERE a.approval_status = :appstatus ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':appstatus', $appStatus);

        $stmt->execute();
        
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        return 100;
    }
}