<?php

function insertPermission($dsn, $userId) {
    try {
         $sql = "INSERT INTO permissions (userid) "
            . "VALUES (:userid) ";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':userid', $userId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount(); 
}
