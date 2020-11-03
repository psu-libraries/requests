<?php

$arrExpense = [
    'labelText' => 'Food',
    'label' => $arrFood['label'],
    'id' => 'food',
    'value' => $food,
    'error' => $arrFood['error'],
    'errorMsg' => $arrFood['errorMsg']
];
?>

<tr class="grid-x">

    <?php require 'pagelayout/templates/expenses.php'; ?>

    <td class="medium-18 cell">
        <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates">
            Per Diem Rates
        </a>
    </td>
</tr>
