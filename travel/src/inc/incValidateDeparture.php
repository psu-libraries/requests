<?php

$arrDepDate = valDate($departureDate, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDepDate['errorFlag'];
$departureFlag = $arrDepDate['errorFlag'];

// Validate return time.
$arrDepTime = valTime($departureTime, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDepTime['errorFlag'];
$departureFlag += $arrDepTime['errorFlag'];

if ($departureFlag === 0) :
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
endif;
