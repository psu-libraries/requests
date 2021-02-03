<?php

   require_once $includes . 'incVehicleArray.php';

    date_default_timezone_set('America/New_York');
    $today = new DateTime();
    $todayFormatted = $today->format('m/d/Y');
    $submissionDate = $todayFormatted;

    // ****** PERSONAL INFORMATION
    $travelType = '';
    $travelTypeAdmin = '';
    $travelTypeProf = '';
    $empName = '';
    $accessId = '';
    $department = '';

    // ***** GENERAL INFORMATION
    $destination = '';
    $departureDate = '';
    $departureTime = '';
    $returnDate = '';
    $returnTime = '';
    $conference = '';
    $sponsor = '';
    $member = 'No';
    $gINotes = '';

    // ***** EXPENSES
    $transportation = '';
    $estMileage = '';
    $lodging = '';
    $food = '';
    $registration = '';
    $prepay = 'No';
    $other = '';
    $total = '0.00';
    $persTravel = 'No';
    $expNotes = '';

    // ***** FLEET RESERVATION
    $fleet = '';
    $pickupDate = '';
    $pickupTime = '';
    $dropoffDate = '';
    $dropoffTime = '';
    $carpool = '';

    // ***** FINANCIALS
    $costType = '';
    $costObjNumber = '';

    // ***** APPROVALS
    $nextApprover = '';
    $comments = '';
