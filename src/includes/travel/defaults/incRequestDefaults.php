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

if ($request):
        $general = selectGeneral($conn, $id);
        $expenses = selectExpenses($conn, $id);
        $vehicle = selectFleet($conn, $id);
        $financials = getFinancial($conn, $id);
        $approval = getWorkflow($conn, $id);
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

        $tmpTotal = floatval($transportation) + floatval($lodging) + floatval($food) 
                + floatval($registration) + floatval($other);

        $total = number_format($tmpTotal, 2, '.', ',');

        $fleet = $vehicle['vehicle'];
        $pickupDate = $vehicle['pickup_date'];
        $pickupTime = $vehicle['pickup_time'];
        $dropoffDate = $vehicle['dropoff_date'];
        $dropoffTime = $vehicle['dropoff_time'];
        $carpool = $vehicle['carpooling'];
        

        $costType = $financials['cost_type'];
        $costObjNumber = $financials['cost_object_number'];
        
        $workflowId = $approval['workflow_id'];
        $approver = $approval['approver_id'];
        $nextApprover = $approval['next_approver_id'];
        $approvalStatus = $approval['approval_status'];
        $dateApproved = $approval['date_entered'];

elseif (!$request):
        $errorFlag = 4;
        
        $travelType = '';
        $empName = '';
        $accessId = '';
        $department = '';
        $submissionDate = '';

        $destination = '';
        $conference = '';
        $departureDate = '';
        $departureTime = '';
        $returnDate = '';
        $returnTime = '';
        $sponsor = '';
        $member = '';
        $gINotes = '';

        $transportation = '';
        $estMileage = '';
        $lodging = '';
        $food = '';
        $registration = '';
        $prepay = '';
        $other = '';
        $persTravel = '';
        $expNotes = '';

//        $total = number_format($tmpTotal, 2, '.', ',');

        $vehicle = '';
        $pickupDate = '';
        $pickupTime = '';
        $dropoffDate = '';
        $dropoffTime = '';
        $carpooling = '';

        $costType = '';
        $costObjNumber = '';
        
        $approver = '';
        $nextApprover = '';
        $approvalStatus = '';
        $dateApproved = '';
        
        $approver = '';
        $nextApprover = '';
        $approvalStatus = '';
        $dateApproved = '';
endif;
