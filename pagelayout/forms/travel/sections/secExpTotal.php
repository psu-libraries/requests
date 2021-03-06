<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">

            <div class="medium-10 cell">
                <label for="total" class="text-right middle">
                    <b>Total</b>
                </label>
            </div>

            <div class="medium-14 cell">
                    <input type="text"
                           name="total"
                           id="total"
                           size="5"
                           value="<?php echo $total; ?>"
                           class="text-right"
                           disabled>
            </div>

        </div>
    </td>
    <td class="medium-18 cell">

        <?php
            $mainLabel = "Is personal travel combined with this trip?";
            $error = $arrPersTravel['error'];
            $errorMsg = $arrPersTravel['errorMsg'];
            $required = true;

            $arrRadios = [
                0 => [
                    'label' => $arrPersTravel['label'],
                    'name' => 'persTravel',
                    'input' => $arrPersTravel['input'],
                    'id' => 'persTravelY',
                    'value' => 'Yes',
                    'var' => $persTravel,
                    'labelText' => 'Yes'
                ],
                1 => [
                    'label' => $arrPersTravel['label'],
                    'name'  => 'persTravel',
                    'input' => $arrPersTravel['input'],
                    'id' => 'persTravelN',
                    'value' => 'No',
                    'var' => $persTravel,
                    'labelText' => 'No'
                ]
            ];

            require $root . '/pagelayout/templates/radioButtons.php';
        ?>

        <div class="grid-containter">
            <div class="grid-x">
                <div class="cell">
                    <p>
                        If yes, contact Travel Coordinator for more information
                        PRIOR to making arrangements.
                    </p>
                    <p>If foreign travel, register with TSN.</p>
                </div>
            </div>
        </div>
    </td>
</tr>
