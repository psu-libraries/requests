<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">

            <div class="medium-10 cell">
                <label for="total" class="text-right middle">
                    <b>Total</b>
                </label>
            </div>

            <div class="medium-14 cell">
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
                    <div class="grid-x">
                        <div class="medium-16 cell">

                            <label id="persTravelLabel" class="<?php echo $arrPersTravel['label']; ?>">
                                Is personal travel combined with business trip?
                                <span class="required"> * </span>
                            </label>

                        </div>
                        <div class="medium-8 cell">

                            <input type="radio"
                                name="persTravel"
                                class="<?php echo $arrPersTravel['input']; ?>"
                                id="persTravelY"
                                value="Yes"
                                <?php
                                    if ($persTravel == 'Yes') { echo 'checked';
                                    }
                                    ?>>
                            <label for="persTravelY"
                                   class="<?php echo $arrPersTravel['label']; ?>">
                                Yes
                            </label>

                            <input type="radio"
                                name="persTravel"
                                class="<?php echo $arrPersTravel['input']; ?>"
                                id="persTravelN"
                                value="No"
                                <?php if ($persTravel == 'No') { echo 'checked';
                                } ?>
                                required>
                            <label for="persTravelN"
                                   class="<?php echo $arrPersTravel['label']; ?>">
                                No
                            </label>

                            <label id="persTravelError" class="<?php echo $arrPersTravel['error']; ?>">
                                <?php echo $arrPersTravel['errorMsg']; ?>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
