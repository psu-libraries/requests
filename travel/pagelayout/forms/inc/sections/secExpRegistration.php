<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-10 cell">
                <label for="registration" class="<?php echo $arrRegistration['label']; ?>">
                  Registration
                </label>
            </div>
            <div class="medium-14 cell">
                    <input type="text"
                           name="registration"
                           class="<?php echo $arrRegistration['input']; ?>"
                           id="registration"
                           size="5"
                           max="10000.00"
                           value="<?php echo $registration; ?>"
                           placeholder="00000.00">
            </div>
            <label class="<?php echo $arrRegistration['error']; ?>">
                  <?php echo $arrRegistration['errorMsg']; ?>
            </label>
        </div>
    </td>

    <td class="medium-18 cell">
        <div class="prepayView">
            <div class="grid-container">
                <div class="grid-x">
                    <div class="medium-13 cell">
                        <label class="<?php echo $arrPrepay['labal'];?>">
                            Do you want the Travel Coordinator to pre-pay
                            registration?
                            <span class="required ppreq"> * </span>
                        </label>
                    </div>
                    <div class="medium-11 cell">
                        <input type="radio"
                            name="prepay"
                            class="<?php echo $arrPrepay['input']; ?> prepay"
                            id="prepayY"
                            value="Yes"
                            <?php if ($prepay == 'yes') { echo 'checked'; }?>>

                        <label for="prepayY" class="<?php echo $arrPrepay['label']; ?>">Yes</label>

                        <input type="radio"
                            name="prepay"
                            class="<?php echo $arrPrepay['input']; ?> prepay"
                            id="prepayN"
                            value="No"
                            <?php if ($prepay == 'no') {echo 'checked'; }?>
                            required>

                        <label for="prepayN"
                            class="<?php echo $arrPrepay['label']; ?>">No</label><br>

                        <label id="prepayError"
                            class="medium-15 cell text-center <?php echo $arrPrepay['error']; ?>">
                            <?php echo $arrPrepay['errorMsg']; ?>
                        </label>
                    </div>
                </div>
            </div>
            <p>If yes, copy of completed registration form must be attached.</p>
        </div>
    </td>
</tr>
