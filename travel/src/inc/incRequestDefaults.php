<?php

$sql = "SELECT travel_type, requestor_name, access_id, department, "
. "submission_date, destination, departure_date, departure_time, "
. "return_date, return_time, conference, sponsor, member, notes "
. "FROM TrRequests "
. "WHERE request_id = :requestid";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':requestid', $id);
$stmt->execute();

$request = $stmt->fetch(PDO::FETCH_ASSOC);
unset($sql);
unset($stmt);

$travelType = $request['travel_type'];
$empName = $request['requestor_name'];
$accessId = $request['access_id'];
$department = $request['department'];
$destination = $request['destination'];
$conference = $request['conference'];
$departureDate = $request['departure_date'];
$departureTime = $request['departure_time'];
$returnDate = $request['return_date'];
$returnTime = $request['return_time'];
$sponsor = $request['sponsor'];
$member = $request['member'];
$gINotes = $request['notes'];
$submissionDate = $request['submission_date'];

$sql = "SELECT transportation, estimated_mileage, lodging, food, "
    . "registration, prepay_registration, other, personal_travel, "
    . "notes "
    . "FROM TrExpenses "
    . "WHERE request_id = :requestid";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':requestid', $id);
$stmt->execute();

$expenses = $stmt->fetch(PDO::FETCH_ASSOC);
unset($sql);
unset($stmt);

$transportation = $expenses['transportation'];
$estMileage = $expenses['estimated_mileage'];
$lodging = $expenses['lodging'];
$food = $expenses['food'];
$registration = $expenses['registration'];
$prepay = $expenses['prepay_registration'];
$other = $expenses['other'];
$persTravel = $expenses['personal_travel'];
$expNotes = $expenses['notes'];

$tmpTotal = $transportation + $lodging + $food + $registration + $other;

$total = number_format($tmpTotal, 2, '.', ',');

$sql = "SELECT vehicle, pickup_date, pickup_time, dropoff_date, dropoff_time, carpooling "
    . "FROM TrFleet "
    . "WHERE request_id = :requestid";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':requestid', $id);
$stmt->execute();

$fleet = $stmt->fetch(PDO::FETCH_ASSOC);
unset($sql);
unset($stmt);

$vehicle = $fleet['vehicle'];
$pickupDate = $fleet['pickup_date'];
$pickupTime = $fleet['pickup_time'];
$dropoffDate = $fleet['dropoff_date'];
$dropoffTime = $fleet['dropoff_time'];
$carpooling = $fleet['carpooling'];

$sql = "SELECT cost_type, cost_object_number "
    . "FROM TrFinancials "
    . "WHERE request_id = :requestid";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':requestid', $id);
$stmt->execute();
    
$financials = $stmt->fetch(PDO::FETCH_ASSOC);
unset($sql);
unset($stmt);

$costType = $financials['cost_type'];
$costObjNumber = $financials['cost_object_number'];

$sql = "SELECT approver_id, next_approver_id, approval_status, date_entered "
    . "FROM TrApprovalWorkflows "
    . "WHERE request_id = :requestid";


$stmt = $conn->prepare($sql);

$stmt->bindParam(':requestid', $id);
$stmt->execute();
   
$approval = $stmt->fetch(PDO::FETCH_ASSOC);
unset($sql);
unset($stmt);
    
$approver = $approval['approver_id'];
$nextApprover = $approval['next_approver_id'];
$approvalStatus = $approval['approval_status'];
$dateApproved = $approval['date_entered'];


$sql = "SELECT comments, date_entered "
    . "FROM TrApprovalComments "
    . "WHERE request_id = :requestid";


$stmt = $conn->prepare($sql);

$stmt->bindParam(':requestid', $id);
$stmt->execute();
   
$comments = $stmt->fetch(PDO::FETCH_ASSOC);
unset($sql);
unset($stmt);
    
$approver = $approval['approver_id'];
$nextApprover = $approval['next_approver_id'];
$approvalStatus = $approval['approval_status'];
$dateApproved = $approval['date_entered'];