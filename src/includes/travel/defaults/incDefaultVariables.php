<?php

$travelType = $request['travel_type'];
$empName = $request['requestor_name'];
$accessId = $request['access_id'];
$department = $request['department'];
$requestStatus = $request['request_status'];
$submitterId = $request['submitter_id'];
$submissionDate = $request['submission_date'];

$destination = $request['destination'];
$conference = $request['conference'];
$departureDate = $request['departure_date'];
$departureTime = $request['departure_time'];
$returnDate = $request['return_date'];
$returnTime = $request['return_time'];
$sponsor = $request['sponsor'];
$member = $request['member'];
$gINotes = $request['gnotes'];


$transportation = $request['transportation'];
$estMileage = $request['estimated_mileage'];
$lodging = $request['lodging'];
$food = $request['food'];
$registration = $request['registration'];
$prepay = $request['prepay_registration'];
$other = $request['other'];
$persTravel = $request['personal_travel'];
$expNotes = $request['enotes'];

$tmpTotal = floatval($transportation) + floatval($lodging) + floatval($food) 
        + floatval($registration) + floatval($other);

$total = number_format($tmpTotal, 2, '.', ',');

$vehicle = $request['vehicle'];
$pickupDate = $request['pickup_date'];
$pickupTime = $request['pickup_time'];
$dropoffDate = $request['dropoff_date'];
$dropoffTime = $request['dropoff_time'];
$carpool = $request['carpooling'];

$costType = $request['cost_type'];
$costObjNumber = $request['cost_object_number'];

//echo '<pre>';
//var_dump($request);
//echo '</pre>';