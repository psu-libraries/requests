<?php

function valTravelType($value, $classes, $v, $invalid) {

    $val = $v::notEmpty()
        ->in('Administrative', 'Professional')
        ->validate($value);

    if ($val == false) :
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

    if (length($value) > 0) :
        $val = $v::in('Cost Center', 'Internal Order')
            ->validate($value);

        if ($val == false) :
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

    if (length($value) > 0) :
        $val::intVal()
        ->positive()
        ->max(999999999999)
        ->validate($value);

        if ($val === false) :
            $classes['errorFlag'] = 1;
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
            $classes['errorMsg'] = $invalid['errorMsg']['number'];
        endif;
    endif;

    return $classes;
}
