<?php
$arrExpense = [
    'labelText' => 'Registration',
    'label' => $arrRegistration['label'],
    'id' => 'registration',
    'value' => $registration,
    'error' => $arrRegistration['error'],
    'errorMsg' => $arrRegistration['errorMsg']
];
?>

<tr class="grid-x">

    <?php require 'pagelayout/templates/expenses.php';?>

    <td class="medium-18 cell">
        <div class="prepayView">

            <?php require 'pagelayout/forms/inc/sections/secPrepay.php';?>

            <p>If yes, copy of completed registration form must be attached.</p>
        </div>
    </td>
</tr>
