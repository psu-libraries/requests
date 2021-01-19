<?php

function insertRequest($dsn, $array) {
    try {
        $sql = "INSERT INTO TrRequests (travel_type, requestor_name, "
            . "access_id, department, submission_date) "
            . "VALUES (:traveltype, :requestorname, :accessid, :department, "
            . ":submissiondate)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':traveltype', $array['travelType']);
        $stmt->bindParam(':requestorname', $array['empName']);
        $stmt->bindParam(':accessid', $array['accessId']);
        $stmt->bindParam(':department', $array['department']);
        $stmt->bindParam(':submissiondate', $array['submissionDate']);

        $stmt->execute();

        $insertId = $dsn->lastInsertId();

    } catch (PDOException $e) {
        $insertId = 0;
    }

    return $insertId;
}

function deleteRequest($dsn, $requestId) {
    try {
         $sql = "DELETE FROM TrRequests"
            . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function updateRequest($dsn, $array) {
    try {
        $sql = "UPDATE TrRequests "
        . "SET "
        . "travel_type = :traveltype, "
        . "requestor_name = :empname, "
        . "department = :department, "
        . "date_last_updated = :dateupdated";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':traveltype', $array['travelType']);
        $stmt->bindParam(':empname', $array['empName']);
        $stmt->bindParam(':department', $array['department']);
        $stmt->bindParam(':dateupdated', $array['dateUpdated']);

        $stmt->execute();

    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function selectRequest($dsn, $requestId) {
    try {
        $sql = "SELECT travel_type, requestor_name, access_id, "
        . "department, submission_date "
        . "FROM TrRequests "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();

    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->fetch();
}
