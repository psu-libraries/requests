<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-9 cell">
                <label for="lodging" class="<?php echo $arrLodging['label']; ?>">
                Lodging
                </label>
            </div>
            <div class="medium-15 cell">
                    <input type="text"
                           name="lodging"
                           class="<?php echo $arrLodging['input']; ?>"
                           id="lodging"
                           size="5"
                           max="10000.00"
                           value="<?php echo $lodging; ?>"
                           placeholder="00000.00">
            </div>
            <label class="<?php echo $arrLodging['error']; ?>">
                  <?php echo $arrLodging['errorMsg']; ?>
            </label>
        </div>
    </td>
    <td class="medium-18 cell">
        To utilize TA credit card, please make reservation and have hotel
        send credit card authorization from to mjw4@psu.edu.
    </td>
</tr>
