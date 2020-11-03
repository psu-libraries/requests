<?php

$arrDateTime = [
    "id" => "dropoffId",
    "legend" => "Dropoff",
    "required" => false,
    "asterisk" => "",
    "dateLabel" => $arrDropoffDate['label'],
    "dateName" => "dropoffDate",
    "dateInput" => $arrDropoffDate['input'],
    "date" => $dropoffDate,
    "dateError" => $arrDropoffDate['error'],
    "dateMsg" => $arrDropoffDate['errorMsg'],
    "timeLabel" => $arrDropoffTime['label'],
    "timeName" => "dropoffTime",
    "timeInput" => $arrDropoffTime['input'],
    "time" => $dropoffTime,
    "timeError" => $arrDropoffTime['error'],
    "timeMsg" => $arrDropoffTime['errorMsg'],
    "error" => $arrDropoff['error'],
    "errorMsg" => $arrDropoff['errorMsg']
];

require '../pagelayout/templates/dateTime.php';
