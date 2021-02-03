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
        'required' => "Field is required.",
        'requiredDate' => "These fields are required",
        'pattern' => "Invalid characters have been entered.",
        'length' => "Must be between 3 and 250 characters long.",
        'boolean' => "Select either 'Yes' or 'No'.",
        'dateTimeFormat' => "Format is invalid.",
        'number' => "Must be a number.",
        'notFound' => "Value not found.",
        'select' => "This field is required."
    ]
];
