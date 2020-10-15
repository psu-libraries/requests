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
$departureDateTime = $departureDate . ' ' . $departureTime;
$returnDateTime = $returnDate . ' ' . $returnTime;

$pickupDateTime = $pickupDate . ' ' . $pickupTime;
$dropoffDateTime = $dropoffDate . ' ' .  $dropoffTime;

// Correctly formatted current date.
$now = date('m/d/Y');

$validator = new Respect\Validation\Validator;
use Respect\Validation\Exceptions\ValidationException;
use Respect\Validation\Rules;
//use Respect\Validation\Exceptions\NestedValidationException;
//$exception = new Respect\Validation\Exceptions\ValidationException;
//use Respect\Validation\Exceptions\ValidationException;

//$validation = [
//    'validate' => $validator,
//    'except' => $exception
//];

/* **************************** PERSONAL INFO **************************** */
$travelTypeVal = new Rules\AllOf(
    new Rules\NotOptional(),
    new Rules\In('Administrative', 'Professional'),
    new Rules\NoWhitespace()
);
try {
    $travelTypeVal->check($travelType);
} catch(ValidationException $ex) {
    echo "exception: " . $ex->getMessage();
}

$arrTravel = valTravelType($travelType, $arrClasses, $validator, $arrInvalid);
$arrEmpName = valEmpName($empName, $arrClasses, $validator, $arrInvalid);
$arrAccessId = valAccessId($accessId, $arrClasses, $validator, $arrInvalid, true);
$arrDept = valInput($department, $arrClasses, $validator, $arrInvalid, true);


/* ************************* GENERAL INFO VALIDATION ************************* */

$arrDest = valInput($destination, $arrClasses, $validator, $arrInvalid, true);

/* ******************** DEPARTURE DATE VALIDATION ******************** */
$arrDepDate = valDate($departureDate, $arrClasses, $validator, $arrInvalid, true);

$arrDepTime = valTime($departureTime, $arrClasses, $validator, $arrInvalid, true);

/* ******************** DEPARTURE TIME VALIDATION ******************** */
//require_once SRC . '/inc/validations/valDepartureTime.php';

/* ******************* COMPARE DEPARTURE TO CURRENT DATE ******************* */
//require_once SRC . '/inc/validations/valDepartureDateTime.php';


/* ************************* RETURN DATE VALIDATION ************************* */
//require_once SRC. '/inc/validations/valReturnDate.php';

/* ************************* RETURN TIME VALIDATION ************************* */
//require_once SRC . '/inc/validations/valReturnTime.php';

/* ******************** COMPARE RETURN TO DEPARTURE ******************** */
//require_once SRC . '/inc/validations/valReturnDateTime.php';

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
//require_once SRC . '/inc/validations/valVehicle.php';

/**
 * If there is a vehicle selected, then pickup date is required. If it's
 * required, make sure it's not empty, and that the time format is h:i A.
 *
 * If there is no vehicle selected, then the pickup date is optional. Make
 * sure there are no values in it.
 */
 $fleetLength = length($fleet);

if ($fleetLength > 0) :
    $pickupDateValidator = $validator::date($formatOfDate)
        ->not($validator::greaterThan($departureDate))
        ->min($now)
        ->setName('Pick-up Date');
else :
    $pickupDateValidator = $validator::optional(
        $validator::not($validator::notEmpty())
        ->setName('Pick-up Date')
    );
endif;

try {
    $pickupDateValidator->assert($pickupDate);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
    $pickupError = 1;
}

/**
 * If there is a vehicle selected, then pickup time is required. If it's
 * required, make sure it's not empty, and that the time format is h:i A.
 *
 * If there is no vehicle selected, then the pickup time is optional. Make
 * sure there are no values in it.
 */
if ($fleetLength > 0) :
    $pickupTimeValidator = $validator::time($formatOfTime)
                            ->setName('Pick-up Time');
else :
    $pickupTimeValidator = $validator::optional(
        $validator::not($validator::notEmpty())
        ->setName('Pick-up Time')
    );
endif;

try {
    $pickupTimeValidator->assert($pickupTime);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
    $pickupError = 1;
}

/**
 * If there is a vehicle selected, then dropoff date is required. If it's
 * required, make sure it's not empty, and that the date format is m/d/Y.
 *
 * If there is no vehicle selected, then the dropoff date is optional. Make
 * sure there are no values in it.
 */
if ($fleetLength > 0) :
    $dropoffDateValidator = $validator::date($formatOfDate)
                               ->setName('Drop-off Date');
else :
    $dropoffDateValidator = $validator::optional(
        $validator::not($validator::notEmpty())
        ->setName('Drop-off Date')
    );
endif;

try {
    $dropoffDateValidator->assert($dropoffDate);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
    $pickupError = 1;
}

/**
 * If there is a vehicle selected, then dropoff time is required. If it's
 * required, make sure it's not empty, and that the time format is h:i A.
 *
 * If there is no vehicle selected, then the dropoff time is optional. Make
 * sure there are no values in it.
 */
if ($fleetLength > 0) :
    $dropoffTimeValidator = $validator::time($formatOfTime)
        ->notEmpty()
        ->setName('Drop-off Time');
else :
    $dropoffTimeValidator = $validator::optional(
        $validator::not($validator::notEmpty())
        ->setName('Drop-off Time')
    );
endif;

try {
    $dropoffTimeValidator->assert($dropoffTime);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
    $pickupError = 1;
}

/**
 * If the pickup date/time pass validation, and the dropoff date/time pass
 * validation, check to see if the dropoff date/time is earlier than the
 * pickup date/time.
 */
if ($fleetLength > 0 && $pickupError == 0) :
    $pickupDropoff = $validator::not($validator::lessThan($pickupDateTime));

    try {
        $pickupDropoff->assert($dropoffDateTime);
    } catch (NestedValidationException $ex) {
        array_push(
            $errorMessage,
            "The Pick-up date/time must be earlier than the Drop-off date/time."
        );
    }
endif;

/**
 * The Carpooling field is optional. If there is a value entered, then validate
 * that it is a string, and the length is between 1 and 300 characters long.
 */
$carpoolValidator = $validator::optional(
    $validator::stringtype()
        ->length(1, 300)
        ->setName('Carpool')
);
try {
    $carpoolValidator->assert($carpool);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
}

/**
 * The Cost Type field is optional. If there is a value selected, validate
 * that it is a string, and the value is either 'cc' or 'io'.
 */
$costTypeValidator = $validator::optional(
    $validator::stringType()
        ->in(['Cost Center', 'Internal Order'])
        ->setName('Cost Type')
);
try {
    $costTypeValidator->assert($costType);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
}

/**
 * The Cost Object Number field is optional. If there is a value entered,
 * validate that it is a positive number, and the value is no greater than
 * 999999999999 (12 digits long).
 */
$costObjNumberValidator = $validator::optional(
    $validator::intVal()
        ->positive()
        ->max(999999999999)
        ->setName('Cost Object Number')
);
try {
    $costObjNumberValidator->assert($costObjNumber);
} catch (NestedValidationException $ex) {
    array_push($errorMessage, $ex->getMessages());
}

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
