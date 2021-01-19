<?php

function insertComments($dsn, $array) {
    try {
        $sql = "INSERT INTO TrApprovalComments (request_id, "
        . "commenter_id, comments, date_entered) "
        . "VALUES (:requestid, :commenterid, :comments, "
        . ":dateentered)";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $array['requestId']);
        $stmt->bindParam(':commenterid', $array['commenterId']);
        $stmt->bindParam(':comments', $array['comments']);
        $stmt->bindParam(':dateentered', $array['dateEntered']);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function deleteAllComments($dsn, $requestId) {
    try {
        $sql = "DELETE FROM TrApprovalComments "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }
    
    return $stmt->rowCount();
}

function deleteSingleComment($dsn, $commentId) {
    try {
        $sql = "DELETE FROM TrApprovalComments "
        . "WHERE comments_id = :commentsid";

        $stmt = $dsn->prepare($sql);
        
        $stmt->bindParam(':commentsid', $commentId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->rowCount();
}

function selectAllComments($dsn, $requestId) {
    try {
        $sql = "SELECT comments_id, commenter_id, comments, date_entered "
        . "FROM TrApprovalComments "
        . "WHERE request_id = :requestid";

        $stmt = $dsn->prepare($sql);

        $stmt->bindParam(':requestid', $requestId);

        $stmt->execute();
    } catch (PDOException $e) {
        return 100;
    }

    return $stmt->fetchAll();
}