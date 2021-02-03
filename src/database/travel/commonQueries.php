<?php

function createGeneral($dsn, $params) {
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

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':destination', $params['destination']);
        $stmt->bindParam(':departuredate', $params['departureDate']);
        $stmt->bindParam(':departuretime', $params['departureTime']);
        $stmt->bindParam(':returndate', $params['returnDate']);
        $stmt->bindParam(':returntime', $params['returnTime']);
        $stmt->bindParam(':conference', $params['conference']);
        $stmt->bindParam(':sponsor', $params['sponsor']);
        $stmt->bindParam(':member', $params['member']);
        $stmt->bindParam(':notes', $params['notes']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createExpenses($dsn, $params) {
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

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':transportation', $params['transportation']);
        $stmt->bindParam(':estmileage', $params['estMileage']);
        $stmt->bindParam(':lodging', $params['lodging']);
        $stmt->bindParam(':food', $params['food']);
        $stmt->bindParam(':registration', $params['registration']);
        $stmt->bindParam(':prepay', $params['prepay']);
        $stmt->bindParam(':other', $params['other']);
        $stmt->bindParam(':perstravel', $params['persTravel']);
        $stmt->bindParam(':notes', $params['notes']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createFleet($dsn, $params) {
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

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':vehicle', $params['vehicle']);
        $stmt->bindParam(':pickupdate', $params['pickupDate']);
        $stmt->bindParam(':pickuptime', $params['pickupTime']);
        $stmt->bindParam(':dropoffdate', $params['dropoffDate']);
        $stmt->bindParam(':dropofftime', $params['dropoffTime']);
        $stmt->bindParam(':carpool', $params['carpooling']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createFinancial($dsn, $params) {
    try {
        $sql = "INSERT INTO TrFinancials (request_id, cost_type, "
        . "cost_object_number) "
        . "VALUES (:requestid, :costtype, :costobjnumber) "
        . "ON DUPLICATE KEY UPDATE "
        . "cost_type = :costtype, "
        . "cost_object_number = :costobjnumber ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':costtype', $params['costType']);
        $stmt->bindParam(':costobjnumber', $params['costObjNumber']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createWorkflow($dsn, $params) {
    try {
        $sql = "INSERT INTO TrApprovalWorkflows (request_id, "
        . "next_approver_id, date_entered) "
        . "VALUES (:requestid, :nextapprover, :dateentered )";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':nextapprover', $params['nextApprover']);
        $stmt->bindParam(':dateentered', $params['dateEntered']);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}

function createComment($dsn, $params) {
    try {
        $sql = "INSERT INTO TrApprovalComments (request_id, "
        . "commenter_id, comments, date_entered) "
        . "VALUES (:requestid, :commenterid, :comments, "
        . ":dateentered)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $params['requestId']);
        $stmt->bindParam(':commenterid', $params['commenterId']);
        $stmt->bindParam(':comments', $params['comments']);
        $stmt->bindParam(':dateentered', $params['dateEntered']);

        $stmt->execute();
        return $stmt->rowCount();
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

function deleteWorkflows($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrApprovalWorkflows "
            . "WHERE request_id = :requestid ";
        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
        return $stmt->rowCount();
    } catch (PDOException $e) {
        return 100;
    }
}