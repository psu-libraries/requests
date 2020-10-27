<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-10 cell">
                <label for="transportation"
                class="<?php echo $arrTransport['label']; ?>">
                    Transportation
                </label>
            </div>

            <div class="medium-14 cell">
                <input type="text"
                       name="transportation"
                       class="<?php echo $arrTransport['input']; ?>"
                       id="transportation"
                       size="5"
                       max="10000"
                       value="<?php echo $transportation; ?>"
                       placeholder="00000.00">
                <p class="help-text" id="transHelpText">
                    (air, auto, train, taxi)
                </p>
            </div>
            <label class="<?php echo $arrTransport['error']; ?>">
                   <?php echo $arrTransport['errorMsg']; ?>
            </label>
        </div>
    </td>
    <td class="medium-18 cell">
        <p>If flying from airport other than your "home" airport, attach
        comparison.</p>
        <p>If choosing to drive over 750 miles roundtrip (personal vehicle or
        fleet), attach flight comaprison.</p>
        <div class="grid-container">
            <div class="grid-x">
                <div class="medium-shrink cell">
                    <div class="grid-x">
                        <div class="medium-shrink cell">

                            <label for="estMileage"
                                   class="<?php echo $arrEstMiles['label']; ?>">
                                For personal vehicle, estimated roundtrip
                                mileage:
                            </label>

                        </div>
                        <div class="medium-5 cell">
                            <div class="input-group">
                                <input type="text"
                                       name="estMileage"
                                       class="<?php echo $arrEstMiles['input']; ?>"
                                       id="estMileage"
                                       maxlength="5"
                                       value="<?php echo $estMileage; ?>"
                                       placeholder="751"
                                       class="input-group-field text-right"
                                       pattern="integer">
                            </div>

                            <label class="<?php echo $arrEstMiles['error']; ?>">
                                   <?php echo $arrEstMiles['errorMsg']; ?>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </td>
</tr>
