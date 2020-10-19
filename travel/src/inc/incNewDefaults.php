<?php

   require_once 'src/inc/incVehicleArray.php';

    date_default_timezone_set('America/New_York');
    $today = new DateTime();
    $todayFormatted = $today->format('m/d/Y');
    $submissionDate = $todayFormatted;

    // ****** PERSONAL INFORMATION
    $travelType = '';
    $travelTypeAdmin = '';
    $travelTypeProf = '';
    $empName = '';
    $accessId = $_SESSION['user'];
    $department = '';

    // ***** GENERAL INFORMATION
    $destination = '';
    $departureDate = '';
    $departureTime = '';
    $returnDate = '';
    $returnTime = '';
    $conference = '';
    $sponsor = '';
    $member = '';
    $gINotes = '';

    // ***** EXPENSES
    $transportation = '';
    $estMileage = '';
    $lodging = '';
    $food = '';
    $registration = '';
    $prepay = '';
    $other = '';
    $total = '0.00';
    $persTravel = '';
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
