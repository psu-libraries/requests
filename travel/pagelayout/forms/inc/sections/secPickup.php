<?php

$arrDateTime = [
    "id" => "pickupId",
    "legend" => "Pickup",
    'required' => false,
    "asterisk" => "",
    "dateLabel" => $arrPickupDate['label'],
    "dateName" => "pickupDate",
    "dateInput" => $arrPickupDate['input'],
    "date" => $pickupDate,
    "dateError" => $arrPickupDate['error'],
    "dateMsg" => $arrPickupDate['errorMsg'],
    "timeLabel" => $arrPickupTime['label'],
    "timeName" => "pickupTime",
    "timeInput" => $arrPickupTime['input'],
    "time" => $pickupTime,
    "timeError" => $arrPickupTime['error'],
    "timeMsg" => $arrPickupTime['errorMsg'],
    "error" => $arrPickup['error'],
    "errorMsg" => $arrPickup['errorMsg']
];

require '../pagelayout/templates/dateTime.php';
