<?php

$arrExpense = [
    'labelText' => 'Food',
    'label' => $arrFood['label'],
    'input' => $arrFood['input'],
    'id' => 'food',
    'value' => $food,
    'error' => $arrFood['error'],
    'errorMsg' => $arrFood['errorMsg']
];
?>

<tr class="grid-x">

    <?php require $templates . 'expenses.php'; ?>

    <td class="medium-18 cell">
        <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates">
            Per Diem Rates
        </a>
    </td>
</tr>
