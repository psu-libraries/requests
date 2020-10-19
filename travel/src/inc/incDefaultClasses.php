<?php

$arrClasses = [
    'errorFlag' => 0,
    'label' => "",
    'input' => "",
    'error' => "form-error",
    'errorMsg' => ""
];

$arrExpClasses = [
    'errorFlag' => $arrClasses['errorFlag'],
    'label' => "text-right middle",
    'input' => "text-right expense",
    'error' => $arrClasses['error'],
    'errorMsg' => $arrClasses['errorMsg']
];

$arrInvalid = [
    'label' => " is-invalid-label",
    'input' => " is-invalid-input",
    'error' => " is-visible",
    'errorMsg' => [
        'required' => "This field must not be epmpty.",
        'pattern' => "Invalid characters have been entered.",
        'length' => "Must be between 3 and 250 characters long.",
        'boolean' => "Select either 'Yes' or 'No'.",
        'date' => "Date format is invalid.",
        'time' => "Time format is invalid.",
        'number' => "Must be a number.",
        'notFound' => "Value not found.",
        'select' => "You must select a value."
    ]
];

$arrTravel = $arrClasses;

$arrEmpName = $arrClasses;
$arrAccessId = $arrClasses;
$arrDept = $arrClasses;

$arrDest = $arrClasses;
$arrDepDate = $arrClasses;
$arrDepTime = $arrClasses;
$arrDeparture = $arrClasses;
$arrRetDate = $arrClasses;
$arrRetTime = $arrClasses;
$arrReturn = $arrClasses;
$arrConf = $arrClasses;
$arrSpons = $arrClasses;
$arrMember = $arrClasses;
$arrGiNotes = $arrClasses;
$arrEstMiles = $arrClasses;

$arrTransport = $arrExpClasses;
$arrLodging = $arrExpClasses;
$arrFood = $arrExpClasses;
$arrRegistration = $arrExpClasses;
$arrPrepay = $arrClasses;
$arrOther = $arrExpClasses;
$arrPersTravel = $arrClasses;
$arrExpNotes = $arrClasses;

$arrVehicle = $arrClasses;
$arrPickupDate = $arrClasses;
$arrPickupTime = $arrClasses;
$arrPickup = $arrClasses;
$arrDropoffDate = $arrClasses;
$arrDropoffTime = $arrClasses;
$arrDropoff = $arrClasses;
$arrCarpool = $arrClasses;
$arrCostType = $arrClasses;
$arrCostNumber = $arrClasses;
