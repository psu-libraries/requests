<?php

// Default formats for date and time values.
$formatOfDate = 'mm/dd/YYYY';
$formatOfTime = 'h:i A';
$formatOfDateTime = 'm/d/Y h:i A';

$pickupError = 0;

// Sanitize all of the values entered into the form.
$i = array_map('sanitizer', $_POST);

// Extract all of the form fields and their values to use in validation.
extract($i);

// Create a date/time string for departure date/time, return date/time,
// pickup date/time, and dropoff date/time.  Will be used for comparison
// validations.


$pickupDateTime = $pickupDate . ' ' . $pickupTime;
$dropoffDateTime = $dropoffDate . ' ' .  $dropoffTime;

// Correctly formatted current date.
$now = date('m/d/Y');

$validator = new Respect\Validation\Validator;

/* **************************** PERSONAL INFO **************************** */

$arrTravel = valTravelType($travelType, $arrClasses, $validator, $arrInvalid);
$arrEmpName = valEmpName($empName, $arrClasses, $validator, $arrInvalid);
$arrAccessId = valAccessId($accessId, $arrClasses, $validator, $arrInvalid, true);
$arrDept = valInput($department, $arrClasses, $validator, $arrInvalid, true);


/* ************************* GENERAL INFO VALIDATION ************************* */

$arrDest = valInput($destination, $arrClasses, $validator, $arrInvalid, true);

$arrDepDate = valDate($departureDate, $arrClasses, $validator, $arrInvalid, true);
$arrDepTime = valTime($departureTime, $arrClasses, $validator, $arrInvalid, true);
$departure = $departureDate . ' ' . $departureTime;
$depComp = compareDateTime($departure, $now, $arrClasses, $arrInvalid);
if ($depComp === false) :
    $arrDeparture['error'] .= $arrInvalid['error'];
    $arrDeparture['errorMsg'] = "Departure date must be later than today.";
endif;

$arrRetDate = valDate($returnDate, $arrClasses, $validator, $arrInvalid, true);
$arrRetTime = valtime($returnTime, $arrClasses, $validator, $arrInvalid, true);
$return = $returnDate . ' ' . $returnTime;
$retComp = compareDateTime($return, $departure);
if ($retComp === false) :
    $arrReturn['error'] .= $arrInvalid['error'];
    $arrReturn['errorMsg'] = "Return date must be later than departure date.";
endif;

$arrConf = valInput($conference, $arrClasses, $validator, $arrInvalid, true);
$arrSpons = valInput($sponsor, $arrClasses, $validator, $arrInvalid, true);
$arrMember = valBoolean($member, $arrClasses, $validator, $arrInvalid);
$arrGiNotes = valNotes($gINotes, $arrClasses, $validator, $arrInvalid);


/* ******************** EXPENSES VALIDATION ******************** */

$arrTransportation = valCurrency($transportation, $arrExpClasses, $validator, $arrInvalid);
$arrEstMiles = valNumber($estMileage, $arrClasses, $validator, $arrInvalid);
$arrLodging = valCurrency($lodging, $arrExpClasses, $validator, $arrInvalid);
$arrFood = valCurrency($food, $arrExpClasses, $validator, $arrInvalid);
$arrRegistration = valCurrency($registration, $arrExpClasses, $validator, $arrInvalid);
$arrPrepay = valBoolean($prepay, $arrExpClasses, $validator, $arrInvalid);
$arrOther = valCurrency($other, $arrExpClasses, $validator, $arrInvalid);
$arrOther = valCurrency($other, $arrExpClasses, $validator, $arrInvalid);
$arrPersTravel = valBoolean($persTravel, $arrClasses, $validator, $arrInvalid);
// TODO: enter file validation (maybe)
$arrExpNotes = valNotes($expNotes, $arrClasses, $validator, $arrInvalid);


/* ******************** FLEET VALIDATION ******************** */
$arrVehicle = valVehicle($fleet, $arrClasses, $validator, $arrInvalid, $vehicles);

 if (length($fleet) > 0) :
    $arrPickupDate = valDate($pickupDate, $arrClasses, $validator, $arrInvalid, true);
    $arrPickupTime = valTime($pickupTime, $arrClasses, $validator, $arrInvalid, true);
    $pickup = $pickupDate . ' ' . $pickupTime;
    $picComp = compareDateTime($departure, $pickup);
    if ($picComp === false) :
        $arrPickup['error'] .= $arrInvalid['error'];
        $arrPickup['errorMsg'] = "Pickup date must be later than departure date.";
    endif;

    $arrDropoffDate = valDate($dropoffDate, $arrClasses, $validator, $arrInvalid, true);
    $arrDropoffTime = valtime($dropoffTime, $arrClasses, $validator, $arrInvalid, true);
    $dropoff = $dropoffDate . ' ' . $dropoffTime;
    $dropComp = compareDateTime($dropoff, $pickup);
    if ($dropComp === false) :
        $arrDropoff['error'] .= $arrInvalid['error'];
        $arrDropoff['errorMsg'] = "Dropoff date must be later than pickup date.";
    endif;
endif;

$arrCarpool = valCarpool($carpool, $arrClasses, $validator, $arrInvalid);

// ******************** FINANCIALS
$arrCostType = valCostType($costType, $arrClasses, $validator, $arrInvalid);
$arrCostNumber = valCostNumber($costObjNumber, $arrClasses, $validator, $arrInvalid);

/**
 * The Next Approver field is optional. If there is a value entered, validate
 * that it is a string, contains no whitespaces, and the length is between
 * 3 and 15 characters long.
 */
$nextApproverValidator = $validator::optional(
    $validator::stringtype()
        ->nowhitespace()
        ->length(3, 15)
        ->setName('Next Approver')
);
try {
    $nextApproverValidator->assert($nextApprover);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
}

/**
 * The Comments in the Approvals section is optional. If there is a value
 * entered, validate that it is a string, and the length is between 1 and 500
 * characters long.
 */
$commentsValidator = $validator::optional(
    $validator::stringtype()
        ->length(1, 500)
        ->setName('Comments')
);
try {
    $commentsValidator->assert($comments);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
}
