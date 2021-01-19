<?php

function insertGeneral($dsn, $array) {
    try {
        $sql = "INSERT INTO TrGeneral (request_id, destination, "
        . "departure_date, departure_time, return_date, return_time, "
        . "conference, sponsor, member, notes, date_entered) "
        . "VALUES (:requestid, :destination, :departuredate, "
        . ":departuretime, :returndate, :returntime, :conference, "
        . ":sponsor, :member, :notes, :dateentered)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':destination', $array['destination']);
        $stmt->bindParam(':departuredate', $array['departureDate']);
        $stmt->bindParam(':departuretime', $array['departureTime']);
        $stmt->bindParam(':returndate', $array['returnDate']);
        $stmt->bindParam(':returntime', $array['returnTime']);
        $stmt->bindParam(':conference', $array['conference']);
        $stmt->bindParam(':sponsor', $array['sponsor']);
        $stmt->bindParam(':member', $array['member']);
        $stmt->bindParam(':notes', $array['notes']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function deleteGeneral($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrGeneral "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function modifyGeneral($dsn, $array) {
    try {
        $sql = "UPDATE TrGeneral "
        . "SET "
        . "destination = :destination, "
        . "departure_date = :departuredate, "
        . "departure_time = :departuretime, "
        . "return_date = :returndate, "
        . "return_time = :returntime, "
        . "conference = :conference, "
        . "sponsor = :sponsor, "
        . "member = :member, "
        . "notes = :notes "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':destination', $array['destination']);
        $stmt->bindParam(':departuredate', $array['departureDate']);
        $stmt->bindParam(':departuretime', $array['departureTime']);
        $stmt->bindParam(':returndate', $array['returnDate']);
        $stmt->bindParam(':returntime', $array['returnTime']);
        $stmt->bindParam(':conference', $array['conference']);
        $stmt->bindParam(':sponsor', $array['sponsor']);
        $stmt->bindParam(':member', $array['member']);
        $stmt->bindParam(':notes', $array['notes']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function selectGeneral($dsn, $requestId) {
    try {
        $sql = "SELECT destination, departure_date, departure_time, "
        . "return_date, return_time, conference, sponsor, "
        . "member, notes "
        . "FROM TrGeneral "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->fetch();
}