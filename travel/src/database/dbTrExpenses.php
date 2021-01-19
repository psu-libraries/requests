<?php

function insertExpenses($dsn, $array) {
    try {
        $sql = "INSERT INTO TrExpenses (request_id, transportation, "
        . "estimated_mileage, lodging, food, registration, "
        . "prepay_registration, other, personal_travel, notes, "
        . "date_entered) "
        . "VALUES (:requestid, :transportation, :estmileage, :lodging, "
        . ":food, :registration, :prepay, :other, :perstravel, "
        . ":notes, :dateentered)";

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
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function deleteExpenses($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrExpenses "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function updateExpenses($dsn, $array) {
    try {
        $sql = "UPDATE TrExpenses "
        . "SET "
        . "transportation = :transportation, "
        . "estimated_mileage = :estmileage, "
        . "lodging = :lodging, "
        . "food = :food, "
        . "registration = :registration, "
        . "prepay_registration = :prepay, "
        . "other = :other, "
        . "personal_travel = :perstravel, "
        . "notes = :notes, "
        . "date_last_updated = :dateupdated, "
        . "WHERE request_id = :requestid";

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
        $stmt->bindParam(':dateupdated', $array['dateUpdated']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function selectExpenses($dsn, $requestId) {
    try {
        $sql = "SELECT transportation, estimated_mileage, lodging, "
        . "food, registration, prepay_registration, other, "
        . "personal_travel, notes "
        . "FROM TrExpenses "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->fetch();
}