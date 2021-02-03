<?php

$arrRetDate = valDate($returnDate, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrRetDate['errorFlag'];
$returnFlag = $arrRetDate['errorFlag'];

// Validate return time.
$arrRetTime = valtime($returnTime, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrRetTime['errorFlag'];
$returnFlag += $arrRetTime['errorFlag'];

if ($returnFlag === 0) :
    $return = $returnDate . ' ' . $returnTime;

    // Validate return date/time is not earlier than departure date/time.
    $arrReturn = compareDateTime($return, $departure, $arrClasses, $arrInvalid);
    $returnFlag = $arrReturn['errorFlag'];

    if ($returnFlag > 0) :
        $arrReturn['errorMsg'] = "Cannot be earlier than departure date.";
    else:
        // Validate return date/time is not earlier than today's date/time
        $arrReturn = compareDateTime($return, $now, $arrClasses, $arrInvalid);
        $returnFlag = $arrReturn['errorFlag'];

        if ($returnFlag === 1) :
            $arrReturn['errorMsg'] = "Cannot be earlier than today's date.";
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
endif;
