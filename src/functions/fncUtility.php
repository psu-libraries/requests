<?php

function displayArray($arr)
{
    echo "<pre>";
    var_dump($arr);
    echo "</pre>";
}

function length($str)
{
    return strlen(trim($str));
}

function flattenArray($array)
{
    return new RecursiveIteratorIterator(new RecursiveArrayIterator($array));
}

function removeBothElements($arr)
{
    array_shift($arr);
    array_pop($arr);

    return $arr;
}

function numberBetween($var, $low, $high)
{
    if ($var < $low) {
        return false;
    }

    if ($var > $high) {
        return false;
    }

    return true;
}

function compareDateTime($date1, $date2)
{
    $comp1 = strtotime($date1);
    $comp2 = strtotime($date2);

    if ($comp1 < $comp2) { return false;
    }
    return true;
}

function stringToCurrency($value)
{
    $temp = str_replace("$", "", $value);
    $temp2 = str_replace(",", "", $value);

    return $temp2;
}

function valEmpName($value, $classes, $v, $invalid)
{
    $errorFlag = $classes['errorFlag'];

    $valBlank = $v::notBlank()->validate($value);

    if ($valBlank === true) :
        $valLength = $v::length(3, 50)->validate($value);

        if ($valLength === true) :
            $valRegex = $v::regex('[A-Za-z\-?]')->validate($value);

            if ($valRegex === false) :
                $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
                $errorFlag = 1;
            endif;

        else:
            $classes['errorMsg'] = $invalid['errorMsg']['length'] . " 50 characters.";
            $errorFlag = 1;
        endif;
    else:
        $classes['errorMsg'] = $invalid['errorMsg']['required'];
        $errorFlag = 1;
    endif;

    if ($errorFlag === 1) :
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

function valAccessId($value, $classes, $v, $invalid, $required=false)
{
    $errorFlag = $classes['errorFlag'];

    if ($required === true) :
        $valBlank = $v::notBlank()->validate($value);

        if ($valBlank === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['required'];
            $errorFlag = 1;
        endif;

    else:
        $val = $v::alnum()->validate($value);

        if ($value === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
            $errorFlag = 1;
        endif;

    endif;

    if ($errorFlag === 0) :
        $valLength = $v::length(3, 15)->validate($value);

        if ($valLength === true) :
            $valRegex = $v::alnum()->noWhitespace()
                ->regex('/^[a-z][0-9]?/')->validate($value);

            if ($valRegex === false) :
                $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
                $errorFlag = 1;
            endif;

        else:
            $classes['errorMsg'] = $invalid['errorMsg']['length'] . " 15 characters.";
            $errorFlag = 1;
        endif;

    endif;

    if ($errorFlag === 1) :
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

function valInput($value, $classes, $v, $invalid, $required = false)
{
    $errorFlag = $classes['errorFlag'];

    if ($required === true) :
        $valBlank = $v::notBlank()->validate($value);
        if ($valBlank === false) :
            $classes['errorMsg'] .= $invalid['errorMsg']['required'];
            $errorFlag = 1;
        endif;

    else:
        $valString = $v::stringType()->validate($value);
        if ($valString === false) :
            $classes['errorMsg'] .= $invalid['errorMsg']['pattern'];
            $errorFlag = 1;
        endif;

    endif;

    if ($errorFlag === 0) :
        $valLength = $v::length(3, 250)->validate($value);

        if ($valLength === true) :
            $valRegex = $v::regex('/^([A-Za-z)(0-9)?\-?\s&\'])+$/')
                ->validate($value);

            if ($valRegex === false) :
                $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
                $errorFlag = 1;
            endif;
        else:
            $classes['errorMsg'] = $invalid['errorMsg']['length'] . " 250 characters.";
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 1) :
        $classes['label'] .= $invalid['label'] ;
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

function valDate($value, $classes, $v, $invalid, $required=false)
{
    $errorFlag = $classes['errorFlag'];

    if ($required === true) :
        $valBlank = $v::notBlank()->validate($value);

        if ($valBlank === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['required'];
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 0) :
        $valDate = $v::date('m/d/Y')->validate($value);

        if ($valDate === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['date'];
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 1) :
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

function valTime($value, $classes, $v, $invalid, $required=false)
{
    $errorFlag = $classes['errorFlag'];

    $formatOfTime = 'h:i A';

    if ($required === true) :
        $valBlank = $v::notBlank()->validate($value);

        if ($valBlank === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['required'];
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 1) :
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

function valCurrency($value, $classes, $v, $invalid)
{
    if (!empty($value)) :
        $errorFlag = $classes['errorFlag'];
        $val = $v::regex('/^\$?((\d{1,2})?,?(\d{1,3})?)*(\.?(\d{1,2})?)?$/')
            ->validate($value);

        if ($val === true) :
            $amount = stringToCurrency($value);

            $valMax = $v::max(10000)->validate($amount);

            if ($valMax === false) :
                $classes['errorMsg'] = "Exceeds max value of 10,000.";
                $errorFlag = 1;

            else:
                $classes['errorMsg'] = $invalid['errorMsg']['number'];
                $errorFlag = 1;

            endif;

        else:
            $classes['errorMsg'] = $invalid['errorMsg']['number'];
            $errorFlag = 1;
        endif;

        if ($errorFlag === 1) :
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
        endif;
    endif;

    return $classes;
}

function valBoolean($value, $classes, $v, $invalid)
{
    $val = $v::notBlank()->boolVal()->validate($value);

    if ($val === false) :
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
        $classes['errorMsg'] = $invalid['errorMsg']['boolean'];
    endif;

    return $classes;
}

function valNotes($value, $classes, $v, $invalid)
{
    if (!empty($value)) :
        $errorFlag = $classes['errorFlag'];

        $valLength = $v::optional($v::length(1, 500))->validate($value);

        if ($valLength === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['length'] . " 500 characters.";
            $errorFlag = 1;
        endif;

        if ($errorFlag === 0) :
            $valPattern = $v::regex('/^([A-Za-z)(0-9)?\-?\s&\'\,])+$/')->validate($value);

            if ($valPattern === false) :
                $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
                $errorFlag = 1;

            endif;
        endif;

        if ($errorFlag === 1) :
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
        endif;

    endif;

    return $classes;
}

function valNumber($value, $classes, $v, $invalid)
{

        $val = $v::optional($v::intVal())->validate($value);

        if ($val === false) :
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['label'];
            $classes['error'] .= $invalid['error'];
            $classes['errMsg'] = $invalid['errorMsg']['number'];
        endif;


    return $classes;
}


