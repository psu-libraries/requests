<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-10 cell">
                <label for="other" class="<?php echo $arrOther['label']; ?>">Other</label>
            </div>
            <div class="medium-14 cell">
                    <input type="text"
                           name="other"
                           class="<?php echo $arrOther['input']; ?>"
                           id="other"
                           size="5"
                           max="10000.00"
                           value="<?php echo $other; ?>"
                           placeholder="00000.00">
            </div>
            <span class="<?php echo $arrOther['error']; ?>">
                <?php echo $arrOther['errorMsg']; ?>
            </span>
        </div>
    </td>
    <td class="medium-18 cell">
        (e.g. phone, internet connectivity, parking, tips, tolls, misc)
    </td>
</tr>
