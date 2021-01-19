<?php

function insertFleet($dsn, $array) {
    try {
        $sql = "INSERT INTO TrFleet (request_id, vehicle, "
        . "pickup_date, pickup_time, dropoff_date, "
        . "dropoff_time, carpooling, date_entered) "
        . "VALUES (:requestid, :vehicle, :pickupdate, "
        . ":pickuptime, :dropoffdate, :dropofftime, "
        . ":carpool, :dateentered)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':vehicle', $array['vehicle']);
        $stmt->bindParam(':pickupdate', $array['pickupDate']);
        $stmt->bindParam(':pickuptime', $array['pickupTime']);
        $stmt->bindParam(':dropoffdate', $array['dropoffDate']);
        $stmt->bindParam(':dropofftime', $array['dropoffTime']);
        $stmt->bindParam(':carpool', $array['carpool']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function deleteFleet($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrFleet "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function modifyFleet($dsn, $array) {
    try {
        $sql = "UPDATE TrFleet "
        . "SET "
        . "vehicle = :vehicle, "
        . "pickup_date = :pickupdate, "
        . "pickup_time = :pickuptime, "
        . "dropoff_date = :dropoffdate, "
        . "dropoff_time = :dropofftime, "
        . "carpooling = :carpooling, "
        . "date_last_updated = :dateupdated "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':vehicle', $array['vehicle']);
        $stmt->bindParam(':pickupdate', $array['pickupDate']);
        $stmt->bindParam(':pickuptime', $array['pickupTime']);
        $stmt->bindParam(':dropoffdate', $array['dropoffDate']);
        $stmt->bindParam(':dropofftime', $array['dropoffTime']);
        $stmt->bindParam(':carpooling', $array['carpooling']);
        $stmt->bindParam(':dateupdated', $array['dateUpdated']);
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function selectFleet($dsn, $requestId) {
    try {
        $sql = "SELECT fleet_id, vehicle, pickup_date, pickup_time, "
        . "dropoff_date, dropoff_time, carpooling "
        . "FROM TrFleet "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->fetch();
}