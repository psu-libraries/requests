<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-9 cell">
                <label for="food" class="<?php echo $arrFood['label']; ?>">Food</label>
            </div>
            <div class="medium-15 cell">
                    <input type="text"
                           name="food"
                           class="<?php echo $arrFood['input']; ?>"
                           id="food"
                           size="5"
                           max="10000.00"
                           value="<?php echo $food; ?>"
                           placeholder="00000.00">
                </div>
            </div>

            <?php $foodError = $arrFood['error'] . " text-right"; ?>
            <label class="<?php echo $foodError; ?>">
                  <?php echo $arrFood['errorMsg']; ?>
            </label>
    </td>
    <td class="medium-18 cell">
        <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates">
            Per Diem Rates
        </a>
    </td>
</tr>
