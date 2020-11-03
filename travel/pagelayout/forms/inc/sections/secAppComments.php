<?php
echo "comments: " . $comments . "<br>";
$arrNotes = [
    'label' => $arrComments['label'],
    'labelText' => 'Comments:',
    'input' => $arrComments['input'],
    'id' => 'comments',
    'value' => $comments,
    'error' => $arrComments['error'],
    'errorMsg' => $arrComments['errorMsg']
];

require '../pagelayout/templates/notes.php';
