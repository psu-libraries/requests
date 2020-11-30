<?php

$mainLabel = "Do you want the Travel Coordinator to pre-pay registration?";
$error = $arrPrepay['error'];
$errorMsg = $arrPrepay['errorMsg'];
$required = true;

$arrRadios = [
    0 => [
        'label' => $arrPrepay['label'],
        'name' => 'prepay',
        'input' => $arrPrepay['input'],
        'id' => 'prepayY',
        'value' => 'Yes',
        'var' => $prepay,
        'labelText' => 'Yes'
    ],
    1 => [
        'label' => $arrPrepay['label'],
        'name'  => 'prepay',
        'input' => $arrPrepay['input'],
        'id' => 'prepayN',
        'value' => 'No',
        'var' => $prepay,
        'labelText' => 'No'
    ]
];

require '../pagelayout/templates/radioButtons.php';
