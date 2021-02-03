<?php

$arrPickupDate = valDate($pickupDate, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrPickupDate['errorFlag'];
$pickupFlag = $arrPickupDate['errorFlag'];

// Validate the pickup time.
$arrPickupTime = valTime($pickupTime, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrPickupTime['errorFlag'];
$pickupFlag += $arrPickupTime['errorFlag'];

if ($pickupFlag === 0) :
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
endif;
