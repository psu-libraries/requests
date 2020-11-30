<?php

$mainLabel = "Are you a member?";
$error = $arrMember['error'];
$errorMsg = $arrMember['errorMsg'];
$required = true;

$arrRadios = [
    0 => [
        'label' => $arrMember['label'],
        'name' => 'member',
        'input' => $arrMember['input'],
        'id' => 'memberY',
        'value' => 'Yes',
        'var' => $member,
        'labelText' => 'Yes'
    ],
    1 => [
        'label' => $arrMember['label'],
        'name'  => 'member',
        'input' => $arrPersTravel['input'],
        'id' => 'memberN',
        'value' => 'No',
        'var' => $member,
        'labelText' => 'No'
    ]
];

require '../pagelayout/templates/radioButtons.php';
