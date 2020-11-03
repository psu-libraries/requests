<?php

$arrDateTime = [
    "legend" => "Return",
    "required" => true,
    "asterisk" => "required",
    "dateLabel" => $arrRetDate['label'],
    "dateName" => "returnDate",
    "dateInput" => $arrRetDate['input'],
    "date" => $returnDate,
    "dateError" => $arrRetDate['error'],
    "dateMsg" => $arrRetDate['errorMsg'],
    "timeLabel" => $arrRetTime['label'],
    "timeName" => "returnTime",
    "timeInput" => $arrRetTime['input'],
    "time" => $returnTime,
    "timeError" => $arrRetTime['error'],
    "timeMsg" => $arrRetTime['errorMsg'],
    "error" => $arrReturn['error'],
    "errorMsg" => $arrReturn['errorMsg']
];

require '../pagelayout/templates/dateTime.php';
