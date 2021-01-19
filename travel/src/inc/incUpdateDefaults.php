<?php

$defTravelType = $request['travel_type'];
$defEmpName = $request['requestor_name'];
$defAccessId = $request['access_id'];
$defDepartment = $request['department'];
$defSubmissionDate = $request['submission_date'];

$defDestination = $general['destination'];
$defConference = $general['conference'];
$defDepartureDate = $general['departure_date'];
$defDepartureTime = $general['departure_time'];
$defReturnDate = $general['return_date'];
$defReturnTime = $general['return_time'];
$defSponsor = $general['sponsor'];
$defMember = $general['member'];
$defGINotes = $general['notes'];

$defTransportation = $expenses['transportation'];
$defEstMileage = $expenses['estimated_mileage'];
$defLodging = $expenses['lodging'];
$defFood = $expenses['food'];
$defRegistration = $expenses['registration'];
$defPrepay = $expenses['prepay_registration'];
$defOther = $expenses['other'];
$defPersTravel = $expenses['personal_travel'];
$defExpNotes = $expenses['notes'];

$defTmpTotal = $defTransportation + $defLodging + $defFood + $defRegistration + $defOther;

$defTotal = number_format($defTmpTotal, 2, '.', ',');

$defVehicle = $fleet['vehicle'];
$defPickupDate = $fleet['pickup_date'];
$defPickupTime = $fleet['pickup_time'];
$defDropoffDate = $fleet['dropoff_date'];
$defDropoffTime = $fleet['dropoff_time'];
$defCarpooling = $fleet['carpooling'];

$defCostType = $financials['cost_type'];
$defCostObjNumber = $financials['cost_object_number'];

$defApprover = $approval['approver_id'];
$defNextApprover = $approval['next_approver_id'];
$defApprovalStatus = $approval['approval_status'];
