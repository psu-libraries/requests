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
require_once 'src/inc/incValidateDeparture.php';

require_once 'src/inc/incValidateReturn.php';

// Validate the conference name.
$arrConf = valInput($conference, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrConf['errorFlag'];

// Validate the sponsor name.
$arrSpons = valInput($sponsor, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrSpons['errorFlag'];

// Validate the member radio buttons.
$arrMember = valBoolean($member, $arrClasses, $validator, $arrInvalid, true);
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
$arrPersTravel = valBoolean($persTravel, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrPersTravel['errorFlag'];

$total = floatval($transportation) + floatval($lodging) + floatval($food) + floatval($registration) + floatval($other);
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
    require_once 'src/inc/incValidatePickup.php';

    // Validate dropoff date.
    require_once 'src/inc/incValidateDropoff.php';
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
