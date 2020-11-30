<?php

$arrDateTime = [
    "legend" => "Departure",
    "required" => true,
    "asterisk" => "required",
    "dateLabel" => $arrDepDate['label'],
    "dateName" => "departureDate",
    "dateInput" => $arrDepDate['input'],
    "date" => $departureDate,
    "dateError" => $arrDepDate['error'],
    "dateMsg" => $arrDepDate['errorMsg'],
    "timeLabel" => $arrDepTime['label'],
    "timeName" => "departureTime",
    "timeInput" => $arrDepTime['input'],
    "time" => $departureTime,
    "timeError" => $arrDepTime['error'],
    "timeMsg" => $arrDepTime['errorMsg'],
    "error" => $arrDeparture['error'],
    "errorMsg" => $arrDeparture['errorMsg']
];

require '../pagelayout/templates/dateTime.php';
