<?php

include_once "src/database/dbTrRequests.php";
include_once "src/database/dbTrGeneral.php";
include_once "src/database/dbTrExpenses.php";
include_once "src/database/dbTrFleet.php";
include_once "src/database/dbTrFinancials.php";
include_once "src/database/dbTrApprovalWorkflows.php";
include_once "src/database/dbTrApprovalComments.php";
include_once "src/database/dbTrFleet.php";
include_once "src/database/dbTrFinancials.php";
include_once "src/database/dbTrApprovalWorkflows.php";
include_once "src/database/dbTrApprovalComments.php";

$request = selectRequest($conn, $id);
$general = selectGeneral($conn, $id);
$expenses = selectExpenses($conn, $id);
$fleet = selectFleet($conn, $id);
$financials = selectFinancials($conn, $id);
$approval = selectWorkflows($conn, $id);
$prevComments = selectAllComments($conn, $id);


$travelType = $request['travel_type'];
$empName = $request['requestor_name'];
$accessId = $request['access_id'];
$department = $request['department'];
$submissionDate = $request['submission_date'];

$destination = $general['destination'];
$conference = $general['conference'];
$departureDate = $general['departure_date'];
$departureTime = $general['departure_time'];
$returnDate = $general['return_date'];
$returnTime = $general['return_time'];
$sponsor = $general['sponsor'];
$member = $general['member'];
$gINotes = $general['notes'];

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

$vehicle = $fleet['vehicle'];
$pickupDate = $fleet['pickup_date'];
$pickupTime = $fleet['pickup_time'];
$dropoffDate = $fleet['dropoff_date'];
$dropoffTime = $fleet['dropoff_time'];
$carpooling = $fleet['carpooling'];

$costType = $financials['cost_type'];
$costObjNumber = $financials['cost_object_number'];
    
$approver = $approval['approver_id'];
$nextApprover = $approval['next_approver_id'];
$approvalStatus = $approval['approval_status'];
$dateApproved = $approval['date_entered'];
    
$approver = $approval['approver_id'];
$nextApprover = $approval['next_approver_id'];
$approvalStatus = $approval['approval_status'];
$dateApproved = $approval['date_entered'];
