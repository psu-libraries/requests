<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-9 cell">
                <label for="total" class="text-right middle">
                    <b>Total</b>
                </label>
            </div>
            <div class="medium-15 cell">
                <div class="input-group">
                    <span class="input-group-label">$</span>
                    <input type="text"
                           name="total"
                           id="total"
                           size="5"
                           value="<?php echo $total; ?>"
                           class="input-group-field text-right"
                           disabled>
                </div>
            </div>
        </div>
    </td>
    <td class="medium-18 cell">
        <div class="grid-container">
            <div class="grid-x">
                <div class="medium-16 cell">
                    <span id="persTravelLabel" class="<?php echo $arrPersTravel['label']; ?>">
                        Is personal travel combined with business trip?
                    </span>
                    <span class="required"> * </span>
                    <input type="radio"
                           name="persTravel"
                           class="<?php echo $arrPersTravel['input']; ?>"
                           id="persTravelY"
                           value="yes"
                           <?php
                            if ($persTravel == 'yes') { echo 'checked';
                            }
                            ?>>
                    <label for="persTravelY" class="<?php echo $arrPersTravel['label']; ?>">Yes</label>

                    <input type="radio"
                           name="persTravel"
                           class="<?php echo $arrPersTravel['input']; ?>"
                           id="persTravelN"
                           value="no"
                           <?php if ($persTravel == 'no') { echo 'checked';
                           } ?>
                           required>
                    <label for="persTravelN" class="<?php echo $arrPersTravel['label']; ?>">No</label>

                    <span id="persTravelError" class="<?php echo $arrPersTravel['error']; ?> text-right">
                        <?php echo $arrPersTravel['errorMsg']; ?>
                    </span>
                </div>
            </div>
        </div>
        <div class="grid-containter">
            <div class="grid-x">
                <div class="cell">
                    If yes, contact Travel Coordinator for more information
                    PRIOR to making arrangements.<br>
                    If foreign travel, register with TSN.
                </div>
            </div>
        </div>
    </td>
</tr>
