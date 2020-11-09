<?php

$arrCurrency = [
    'labelText' => 'Lodging',
    'label' => $arrLodging['label'],
    'input' => $arrLodging['input'],
    'id' => 'lodging',
    'value' => $lodging,
    'error' => $arrLodging['error'],
    'errorMsg' => $arrLodging['errorMsg']
];
?>

<tr class="grid-x">
    <?php require '../pagelayout/templates/currency.php'; ?>

    <td class="medium-18 cell">
        To utilize TA credit card, please make reservation and have hotel
        send credit card authorization from to mjw4@psu.edu.
    </td>
</tr>
