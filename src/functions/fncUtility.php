<?php

/**
 * Custom function I created to check for the actual length of a string.
 *
 * @param string $str
 *
 * @return integer
 */
function length($str)
{
    return strlen(trim($str));
}

/**
 * Turns a multi-dimensional array into a single array.
 *
 * @param array $array
 *
 * @return array
 */
function flattenArray($array)
{
    return new RecursiveIteratorIterator(new RecursiveArrayIterator($array));
}

/**
 * Removes the first and last elements off of an array.
 *
 * @param array $arr
 *
 * @return array
 */
function removeBothElements($arr)
{
    array_shift($arr);
    array_pop($arr);

    return $arr;
}

/**
 * Check to see if a number is between two other numbers.
 *
 * @param integer $var      // The number being checked.
 * @param integer $low      // The low number of the range.
 * @param integer $high     // The high number of the range.
 *
 * @return boolean
 */
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

/**
 * Takes two dates and compares them. If the first date is less than the second
 * date, create an error and change the default classes to error classes.
 *
 * @param date $date1       // Date that's being checked.
 * @param date $date2       // Date that date1 is being compared to.
 * @param array $classes    // Contains the default classes for the form.
 * @param array $invalid    // Contains the error classes for the form.
 *
 * @return array
 */
function compareDateTime($date1, $date2, $classes, $invalid)
{
    $comp1 = strtotime($date1);
    $comp2 = strtotime($date2);

    if ($comp1 < $comp2) {
        $classes['errorFlag'] = 1;
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    }

    return $classes;
}

/**
 * Validates that the employee's name is not blank, is of the proper length,
 * and matches the regular expression.
 *
 * @param [type] $value     // The employee's name.
 * @param [type] $classes   // Contains default classes for the form.
 * @param [type] $v         // The validator object.
 * @param [type] $invalid   // Contains error classes for the form.
 *
 * @return array            // The array of classes.
 */
function valEmpName($value, $classes, $v, $invalid)
{
    $errorFlag = $classes['errorFlag'];

    $valBlank = $v::notBlank()->validate($value);

    if ($valBlank === true) :
        $valLength = $v::length(3, 50)->validate($value);

        if ($valLength === true) :
            $valRegex = $v::regex('/([A-Za-z]\-?\s?){1,50}/')->validate($value);

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
        $classes['errorFlag'] = $errorFlag;
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

/**
 * Validates that the employee's access id is not blank, is of the proper length,
 * and matches the regular expression.
 *
 * @param string $value     // The access id of the employee.
 * @param array $classes    // Contains default classes for form.
 * @param object $v         // The validator object.
 * @param array $invalid    // Contains error classes for form.
 *
 * @return array            // The array of classes.
 */
function valAccessId($value, $classes, $v, $invalid, $required=false)
{
    $errorFlag = $classes['errorFlag'];

    $valNotBlank = $v::notBlank()->validate($value);

    if ($required === true && $valNotBlank === false) :

        if ($valNotBlank === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['required'];
            $errorFlag = 1;
        endif;

    else:
        if ($valNotBlank === true) :
            $val = $v::alnum()->validate($value);

            if ($val === false) :
                $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
                $errorFlag = 1;
            endif;

        endif;

    endif;

    if ($errorFlag === 0) :
        if ($valNotBlank === true) :
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
    endif;

    if ($errorFlag === 1) :
        $classes['errorFlag'] = $errorFlag;
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

/**
 * If the value is marked as "required", check to make sure the value isn't
 * empty. Make sure that the value is of the proper length and that it matches
 * the regular expression.
 *
 * @param string $value     // The string being checked.
 * @param array $classes    // Contains the default classes for the form.
 * @param object $v         // The validator object.
 * @param array $invalid    // Contains the error classes for the form.
 *
 * @return array            // The array of classes.
 */
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
            $valRegex = $v::regex('/^([A-Za-z)(0-9)?\-?\s&\'\,])+$/')
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
        $classes['errorFlag'] = $errorFlag;
        $classes['label'] .= $invalid['label'] ;
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

/**
 * Validate that the value is an actual date.
 *
 * @param date $value           // The date being checked
 * @param array $classes        // Contains the default classes for the form.
 * @param object $v             // The validator object.
 * @param array $invalid        // Contains the error classes for the form.
 * @param boolean $required     // Determines if the value is required or not.
 *
 * @return array                // The array of classes.
 */
function valDate($value, $classes, $v, $invalid, $required=false)
{
    $errorFlag = $classes['errorFlag'];

    // Convert string to date
    if (!empty($value)):
        $value = date("m/d/Y", $value);
    endif;

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
            $classes['errorMsg'] = $invalid['errorMsg']['dateTimeFormat'];
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 1) :
        $classes['errorFlag'] = $errorFlag;
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

/**
 * Validate that the value is an actual time.
 *
 * @param time $value           // The time being checked
 * @param array $classes        // Contains the default classes for the form.
 * @param object $v             // The validator object.
 * @param array $invalid        // Contains the error classes for the form.
 * @param boolean $required     // Determines if the value is required or not.
 *
 * @return array                // The array of classes.
 */
function valTime($value, $classes, $v, $invalid, $required=false)
{
    $errorFlag = $classes['errorFlag'];

    // Convert string to time
    if (!empty($value)):
        $value = date("h:i A", $value);
    endif;

    if ($required === true) :
        $valNotBlank = $v::notBlank()->validate($value);

        if ($valNotBlank === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['required'];
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 0) :
        $valTime = $v::time('H:i A')->validate($value);

        if ($valTime === false) :
            $classes['errorMsg'] = $invalid['errorMsg']['dateTimeFormat'];
            $errorFlag = 1;
        endif;
    endif;

    if ($errorFlag === 1) :
        $classes['errorFlag'] = $errorFlag;
        $classes['label'] .= $invalid['label'];
        $classes['input'] .= $invalid['input'];
        $classes['error'] .= $invalid['error'];
    endif;

    return $classes;
}

/**
 * Formats the value by removing the dollar sign and any commas.
 * Called from the valCurrency function below.
 *
 * @param string $value
 *
 * @return string
 */
function stringToCurrency($value)
{
    $temp = str_replace("$", "", $value);
    return $temp2 = str_replace(",", "", $value);

//    return $temp2;
}

/**
 * Validates that the value matches the regular expression and that it's not
 * greater than 10,000.
 *
 * @param string $value           // The value being checked
 * @param array $classes        // Contains the default classes for the form.
 * @param object $v             // The validator object.
 * @param array $invalid        // Contains the error classes for the form.
 * @param boolean $required     // Determines if the value is required or not.
 *
 * @return array                // The array of classes.
 */
function valCurrency($value, $classes, $v, $invalid)
{
    if (!empty($value)) :
        $errorFlag = $classes['errorFlag'];

        if (is_float($value) === false):

            $value = stringToCurrency($value);

            $val = $v::regex('/^\$?((\d{1,2})?,?(\d{1,3})?)*(\.?(\d{1,2})?)?$/')
                ->validate($value);

            if ($val === true) :

                $valNumber = $v::floatType()->validate($value);

                if ($valNumber === true) :

                    $valMax = $v::max(10000.00)->validate($value);

                    if ($valMax === false) :
                        $classes['errorMsg'] = "Exceeds max value of 10,000.";
                        $errorFlag = 1;
                    endif;
                else:
                    $classes['errorMsg'] = $invalid['errorMsg']['number'];
                endif;
            else:
                $classes['errorMsg'] = $invalid['errorMsg']['number'];
                $errorFlag = 1;
            endif;
        else:
            $classes['errorMsg'] = $invalid['errorMsg']['number'] . "9999";
            $errorFlag = 1;
        endif;

       if ($errorFlag === 1) :
            $classes['errorFlag'] = $errorFlag;
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
        endif;

    endif;

    return $classes;
}

/**
 * Validate that the value is a boolean.
 *
 * @param boolean $value           // The value being checked
 * @param array $classes        // Contains the default classes for the form.
 * @param object $v             // The validator object.
 * @param array $invalid        // Contains the error classes for the form.
 * @param boolean $required     // Determines if the value is required or not.
 *
 * @return array                // The array of classes.
 */
function valBoolean($value, $classes, $v, $invalid, $required=false)
{

    if ($required === true) :
        $val = $v::notBlank()->boolVal()->validate($value);

        if ($val === false) :
            $classes['errorFlag'] = 1;
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['input'];
            $classes['error'] .= $invalid['error'];
            $classes['errorMsg'] = $invalid['errorMsg']['boolean'];
        endif;

    endif;

    return $classes;
}

/**
 * Check that the value is of the proper length and that it matches
 * the regular expression.
 *
 * @param string $value     // The string being checked.
 * @param array $classes    // Contains the default classes for the form.
 * @param object $v         // The validator object.
 * @param array $invalid    // Contains the error classes for the form.
 *
 * @return array            // The array of classes.
 */
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
            $valPattern = $v::regex('/^([A-Za-z)(0-9)?\-?\s&\'?,?.?])+$/')->validate($value);

            if ($valPattern === false) :
                $classes['errorMsg'] = $invalid['errorMsg']['pattern'];
                $errorFlag = 1;

            endif;
        endif;

        if ($errorFlag === 1) :
            $classes['errorFlag'] = $errorFlag;
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
            $classes['errorFlag'] = $invalid['errorFlag'];
            $classes['label'] .= $invalid['label'];
            $classes['input'] .= $invalid['label'];
            $classes['error'] .= $invalid['error'];
            $classes['errMsg'] = $invalid['errorMsg']['number'];
        endif;


    return $classes;
}
