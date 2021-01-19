<?php

function insertFinancials($dsn, $array) {
    try {
        $sql = "INSERT INTO TrFinancials (request_id, cost_type, "
        . "cost_object_number, date_entered) "
        . "VALUES (:requestid, :costtype, :costobjnumber, :dateentered)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':costtype', $array['costType']);
        $stmt->bindParam(':costobjnumber', $array['costObjNumber']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();

    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function deleteFinancials($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrFinancials "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function updateFinancials($dsn, $array) {
    try {
        $sql = "UPDATE TrFinancials "
        . "SET "
        . "cost_type = :costtype, "
        . "cost_object_number = :costobjnumber, "
        . "date_last_updated = :dateupdated "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':costtype', $array['costType']);
        $stmt->bindParam(':costobjnumber', $array['costObjNumber']);
        $stmt->bindParam(':dateupdated', $array['dateUpdated']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function selectFinancials($dsn, $requestId) {
    try {
        $sql = "SELECT financials_id, cost_type, cost_object_number "
        . "FROM TrFinancials "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
        
        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->fetch();
}