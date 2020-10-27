<?php

$arrDropoffDate = valDate($dropoffDate, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDropoffDate['errorFlag'];
$dropoffFlag = $arrDropoffDate['errorFlag'];

// Validate dropoff time.
$arrDropoffTime = valtime($dropoffTime, $arrClasses, $validator, $arrInvalid, true);
$errorFlag += $arrDropoffTime['errorFlag'];
$dropoffFlag += $arrDropoffTime['errorFlag'];

if ($dropoffFlag === 0) :
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

