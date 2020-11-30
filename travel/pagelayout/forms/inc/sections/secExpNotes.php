<?php

$arrNotes = [
    'label' => $arrExpNotes['label'],
    'labelText' => 'Notes:',
    'input' => $arrExpNotes['input'],
    'id' => 'expNotes',
    'notes' => $expNotes,
    'error' => $arrExpNotes['error'],
    'errorMsg' => $arrExpNotes['errorMsg']
];

require '../pagelayout/templates/notes.php';
