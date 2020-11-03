<?php

$mainLabel = "Is personal travel combined with this trip?";
$error = $arrPersTravel['error'];
$errorMsg = $arrPersTravel['errorMsg'];
$required = true;

$arrRadios = [
    0 => [
        'label' => $arrPersTravel['label'],
        'name' => 'persTravel',
        'input' => $arrPersTravel['input'],
        'id' => 'persTravelY',
        'value' => 'Yes',
        'var' => $perTravel,
        'labelText' => 'Yes'
    ],
    1 => [
        'label' => $arrPersTravel['label'],
        'name'  => 'persTravel',
        'input' => $arrPersTravel['input'],
        'id' => 'persTravelN',
        'value' => 'No',
        'labelText' => 'No'
    ]
];

require '../pagelayout/templates/radioButtons.php';
