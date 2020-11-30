<?php

$arrNotes = [
    'label' => $arrGiNotes['label'],
    'labelText' => 'Roles, Goals, Attendance, and other additional helpful notes:',
    'input' => $arrGiNotes['input'],
    'id' => 'gINotes',
    'notes' => $gINotes,
    'error' => $arrGiNotes['error'],
    'errorMsg' => $arrGiNotes['errorMsg']
];

require '../pagelayout/templates/notes.php';
