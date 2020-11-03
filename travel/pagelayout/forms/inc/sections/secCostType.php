<?php

$mainLabel = "Cost Object Type";
$error = $arrCostType['error'];
$errorMsg = $arrCostType['errorMst'];

$arrRadios = [
    0 => [
        'label' => $arrCostType['label'],
        'name' => "costType",
        'input' => $arrCostType['input'],
        'id' => "cc",
        'value' => "Cost Center",
        'var' => $costType,
        'labelText' => "Cost Center"
    ],
    1 => [
        'label' => $arrCostType['label'],
        'name' => "costType",
        'input' => $arrCostType['input'],
        'id' => "io",
        'value' => "Internal Order",
        'var' => $costType,
        'labelText' => "Internal Order"
    ]
];

require '../pagelayout/templates/radioButtons.php';
