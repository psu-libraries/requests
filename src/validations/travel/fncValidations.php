<?php

function valTravelType($value, $classes, $v, $invalid) {

    if ($value === "Administrative"):
        $val = true;
    endif;

    if ($value === "Professional"):
        $val = true;
    endif;

    if ($val === false) :
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
        $classes['errorMsg'] = $invalid['errorMsg']['select'];
    endif;

    return $classes;
}

function valVehicle($value, $classes, $v, $invalid, $vehicles)
{
    if (!empty($value)) :
        $val = $v::key($value)->validate($vehicles);

        if ($val === false) :
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
            $classes['errorMsg'] = $invalid['errorMsg']['notFound'];
        endif;
    endif;

    return $classes;
}

function valCarpool($value, $classes, $v, $invalid) {

    if (length($value > 0)) :
        $valLength = $v::length(1, 300)->validate($value);

        if ($valLength === false) :
            $classes['errorFlag'] = 1;
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
            $classess['errorMsg'] = "Must be no more than 300 characters long."
;
        endif;
    endif;

    return $classes;
}

function valCostType($value, $classes, $v, $invalid) {

    if (!empty($value)) :

        if ($value != 'Cost Center' && $value != "Internal Order") :
            $classes['errorFlag'] = 1;
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
            $classes['errorMsg'] = $invalid['errorMsg']['select'];

        endif;
    endif;

    return $classes;
}

function valCostNumber($value, $classes, $v, $invalid) {

    $errorFlag = $arrClasses['errorFlag'];

    if (!empty($value)) :
        if (is_numeric($value)) :
            if ($value > 999999999999) :
                $classes['errorMsg'] = "Not a valid cost number";
                $errorFlag = 1;
            endif;

        else :
            $classes['errorMsg'] = $invalid['errorMsg']['number'];
            $errorFlag = 1;
        endif;

    endif;

    if ($errorFlag === 1) :
        $classes['errorFlag'] = 1;
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];

    endif;

    return $classes;
}
