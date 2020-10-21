<?php

$errorFlag = 0;

// Sanitize all of the values entered into the form.
$i = array_map('sanitizer', $_POST);

// Extract all of the form fields and their values to use in validation.
extract($i);

// Correctly formatted current date.
$now = date('m/d/Y');

$validator = new Respect\Validation\Validator;

/* **************************** PERSONAL INFO **************************** */

// Validate the Travel Type checkboxes.
$arrTravel = valTravelType($travelType, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrTravel['errorFlag'];

// Validate the employee's name.
$arrEmpName = valEmpName($empName, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrEmpName['errorFlag'];

// Validate the employee's access id.
$arrAccessId = valAccessId($accessId, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrAccessId['errorFlag'];

// Validate the employee's department.
$arrDept = valInput($department, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDept['errorFlag'];

/* ************************* GENERAL INFO VALIDATION ************************* */

// Validate the destination.
$arrDest = valInput($destination, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDest['errorFlag'];

// Validate departure date.
$arrDepDate = valDate($departureDate, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDepDate['errorFlag'];

// Validate return time.
$arrDepTime = valTime($departureTime, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDepTime['errorFlag'];

$departure = $departureDate . ' ' . $departureTime;

// Validate the departure date/time is not earlier than today's date/time.
$arrDeparture = compareDateTime($departure, $now, $arrClasses, $arrInvalid);
$departureFlag = $arrDeparture['errorFlag'];

if ($departureFlag === 1) :
    $errorFlag += $departureFlag;
    $arrDepDate['label'] .= $arrInvalid['label'];
    $arrDepDate['input'] .= $arrInvalid['input'];
    $arrDepTime['label'] .= $arrInvalid['label'];
    $arrDepTime['input'] .= $arrInvalid['input'];
    $arrDeparture['errorMsg'] = "Cannot be earlier than today's date.";
endif;

// Validate return date.
$arrRetDate = valDate($returnDate, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrRetDate['errorFlag'];

// Validate return time.
$arrRetTime = valtime($returnTime, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrRetTime['errorFlag'];

$return = $returnDate . ' ' . $returnTime;

// Validate return date/time is not earlier than departure date/time.
$arrReturn = compareDateTime($return, $departure, $arrClasses, $arrInvalid);
$returnFlag = $arrReturn['errorFlag'];

if ($returnFlag === 1) :
    $arrReturn['errorMsg'] = "Cannot be earlier than departure date.";
else:
    // Validate return date/time is not earlier than today's date/time
    $arrReturn = compareDateTime($return, $now, $arrClasses, $arrInvalid);
    $returnFlag = $arrReturn['errorFlag'];

    if ($returnFlag === 1) :
        $arrRetDate['errorMsg'] = "Cannot be earlier than today's date.";
    endif;
endif;

// Adjust classes for departure date/time and return date/time.
if ($returnFlag === 1) :
    $errorFlag += $returnFlag;
    $arrRetDate['label'] .= $arrInvalid['label'];
    $arrRetDate['input'] .= $arrInvalid['input'];
    $arrRetTime['label'] .= $arrInvalid['label'];
    $arrRetTime['input'] .= $arrInvalid['input'];
endif;

// Validate the conference name.
$arrConf = valInput($conference, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrConf['errorFlag'];

// Validate the sponsor name.
$arrSpons = valInput($sponsor, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrSpons['errorFlag'];

// Validate the member radio buttons.
$arrMember = valBoolean($member, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrMember['errorFlag'];

// Validate the General Information notes.
$arrGiNotes = valNotes($gINotes, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrGiNotes['errorFlag'];

/* ******************** EXPENSES VALIDATION ******************** */

// Validate the amount entered for transportation expenses.
$arrTransportation = valCurrency($transportation, $arrExpClasses, $validator, $arrInvalid);
$errorFlag += $arrTransportation['errorFlag'];

// Validate the estimated miles.
$arrEstMiles = valNumber($estMileage, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrEstMiles['errorFlag'];

// Validate the amount entered for lodging expenses.
$arrLodging = valCurrency($lodging, $arrExpClasses, $validator, $arrInvalid);
$errorFlag += $arrLodging['errorFlag'];

// Validate the amount entered for food expenses.
$arrFood = valCurrency($food, $arrExpClasses, $validator, $arrInvalid);
$errorFlag += $arrFood['errorFlag'];

// Validate the amount entered for registration expenses.
$arrRegistration = valCurrency($registration, $arrExpClasses, $validator, $arrInvalid);
$errorFlag += $arrRegistration['errorFlag'];

// Validate the prepay radio buttons.
$arrPrepay = valBoolean($prepay, $arrExpClasses, $validator, $arrInvalid);
$errorFlag += $arrPrepay['errorFlag'];

// Validate the amount entered for other expenses.
$arrOther = valCurrency($other, $arrExpClasses, $validator, $arrInvalid);
$errorFlag += $arrOther['errorFlag'];

// Validate the personal travel radio buttons
$arrPersTravel = valBoolean($persTravel, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrPersTravel['errorFlag'];

// TODO: enter file validation (maybe)

// Validate the Expenses notes.
$arrExpNotes = valNotes($expNotes, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrExpNotes['errorFlag'];

/* ******************** FLEET VALIDATION ******************** */

// Validate the vehicle selected (if any);
$arrVehicle = valVehicle($fleet, $arrClasses, $validator, $arrInvalid, $vehicles);
$errorFlag += $arrVehicle['errorFlag'];

 if (length($fleet) > 0) :

    // Validate the pickup date.
    $arrPickupDate = valDate($pickupDate, $arrClasses, $validator, $arrInvalid, true);
    $errorFlag += $arrPickupDate['errorFlag'];

    // Validate the pickup time.
    $arrPickupTime = valTime($pickupTime, $arrClasses, $validator, $arrInvalid, true);
    $errorFlag += $arrPickupTime['errorFlag'];

    $pickup = $pickupDate . ' ' . $pickupTime;

    // Validate the pickup date/time is not earlier than today's date/time.
    $arrPickup = compareDateTime($pickup, $now, $arrClasses, $arrInvalid);
    $pickupFlag = $arrPickup['errorFlag'];

    if ($pickupFlag === 1) :
        $arrPickup['errorMsg'] = "Cannot be earlier than today's date.";
    else:

        // Validate the pickup date/time is not later than the departure date/time.
        $arrPickup = compareDateTime($departure, $pickup, $arrClasses, $arrInvalid);
        $pickupFlag = $arrPickup['errorFlag'];

        if ($pickupFlag === 1 ):
            $arrPickup['errorMsg'] = "Cannot be later that departure date.";
        else:

            // Validate the pickup date/time is not later than return date/time.
            $arrPickup = compareDateTime($return, $pickup, $arrClasses, $arrInvalid);
            $pickupFlag = $arrPickup['errorFlag'];

            if ($pickupFlag === 1) :
                $arrPickup['errorMsg'] = "Cannot be later than return date.";
            endif;
        endif;
    endif;

    if ($pickupFlag === 1) :
        $errorFlag += $pickupFlag;
        $arrPickupDate['label'] .= $arrInvalid['label'];
        $arrPickupDate['input'] .= $arrInvalid['input'];
        $arrPickupTime['label'] .= $arrInvalid['label'];
        $arrPickupTime['input'] .= $arrInvalid['input'];
        $arrPickup['error'] .= $arrInvalid['error'];
    endif;

    // Validate dropoff date.
    $arrDropoffDate = valDate($dropoffDate, $arrClasses, $validator, $arrInvalid, true);
    $errorFlag += $arrDropoffDate['errorFlag'];

    // Validate dropoff time.
    $arrDropoffTime = valtime($dropoffTime, $arrClasses, $validator, $arrInvalid, true);
    $errorFlag += $arrDropoffTime['errorFlag'];

    $dropoff = $dropoffDate . ' ' . $dropoffTime;

    // Validate dropoff date/time is not earlier than pickup date/time.
    $arrDropoff = compareDateTime($dropoff, $pickup, $arrClasses, $arrInvalid);
    $dropoffFlag = $arrDropoff['errorFlag'];

    if ($dropoffFlag === 1) :
        $arrDropoff['errorMsg'] = "Cannot be earlier than pickup date.";
    else:

        // Validate dropoff date/time is not earlier than departure date/time.
        $arrDropoff = compareDateTime($dropoff, $departure, $arrClasses, $arrInvalid);
        $dropoffFlag = $arrDropoff['errorFlag'];

        if ($dropoffFlag === 1) :
            $arrDropoff['errorMsg'] = "Cannot be earlier than departure date.";
        else:

            // Validate dropoff date/time is not earlier than today's date/time.
            $arrDropoff = compareDateTime($dropoff, $now, $arrClasses, $arrInvalid);
            $dropoffFlag = $arrDropoff['errorFlag'];

            if ($dropoffFlag === 1) :
                $arrDropoff['errorMsg'] = "Cannot be earlier than today's date.";
            endif;
        endif;
    endif;

    if ($dropoffFlag === 1) :
        $errorFlag += $dropoffFlag;
        $arrDropoffDate['label'] .= $arrInvalid['label'];
        $arrDropoffDate['input'] .= $arrInvalid['input'];
        $arrDropoffTime['label'] .= $arrInvalid['label'];
        $arrDropoffTime['input'] .= $arrInvalid['input'];
    endif;
endif;

// Validate the carpool.
$arrCarpool = valCarpool($carpool, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrCarpool['errorFlag'];

// ******************** FINANCIALS

// Validate cost type.
$arrCostType = valCostType($costType, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrCostType['errorFlag'];

// Validate cost number.
$arrCostNumber = valCostNumber($costObjNumber, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrCostNumber['errorFlag'];

// ******************** APPROVALS

// Validate the next approver access id.
$arrApprover = valAccessId($nextApprover, $arrClasses, $validator, $arrInvalid);
$errorFlag += $arrApprover['errorFlag'];

// Validate the Approvals comments.
 $arrComments = valNotes($comments, $arrClasses, $validator, $arrInvalid);
 $errorFlag += $arrComments['errrFlag'];
