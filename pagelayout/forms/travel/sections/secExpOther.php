<?php
$arrExpense = [
    'labelText' => 'Other',
    'label' => $arrOther['label'],
    'input' => $arrOther['input'],
    'id' => 'other',
    'value' => $other,
    'error' => $arrOther['error'],
    'errorMsg' => $arrOther['errorMsg']
];
?>

<tr class="grid-x">

    <?php require 'pagelayout/templates/expenses.php';?>

    <td class="medium-18 cell">
        (e.g. phone, internet connectivity, parking, tips, tolls, misc)
    </td>
</tr>
