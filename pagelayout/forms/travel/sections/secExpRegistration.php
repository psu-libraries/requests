<?php
$arrExpense = [
    'labelText' => 'Registration',
    'label' => $arrRegistration['label'],
    'input' => $arrRegistration['input'],
    'id' => 'registration',
    'value' => $registration,
    'error' => $arrRegistration['error'],
    'errorMsg' => $arrRegistration['errorMsg']
];
?>

<tr class="grid-x">

    <?php require $templates . 'expenses.php';?>

    <td class="medium-18 cell">
        <div class="prepayView">

            <?php
            $mainLabel = "Do you want the Travel Coordinator to pre-pay registration?";
            $error = $arrPrepay['error'];
            $errorMsg = $arrPrepay['errorMsg'];
            $required = true;

            $arrRadios = [
                0 => [
                    'label' => $arrPrepay['label'],
                    'name' => 'prepay',
                    'input' => $arrPrepay['input'],
                    'id' => 'prepayY',
                    'value' => 'Yes',
                    'var' => $prepay,
                    'labelText' => 'Yes'
                ],
                1 => [
                    'label' => $arrPrepay['label'],
                    'name'  => 'prepay',
                    'input' => $arrPrepay['input'],
                    'id' => 'prepayN',
                    'value' => 'No',
                    'var' => $prepay,
                    'labelText' => 'No'
                ]
            ];

            require $root . '/pagelayout/templates/radioButtons.php';
            ?>

            <p>If yes, copy of completed registration form must be attached.</p>
        </div>
    </td>
</tr>
