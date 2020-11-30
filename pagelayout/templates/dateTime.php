<div class="grid-container">
    <fieldset id="<?php echo $arrDateTime['id'];?>" class="fieldset medium-shrink cell">
        <legend><?php echo $arrDateTime['legend'];?></legend>

        <div class="grid-x">

            <div class="medium-shrink cell">
                <label class="<?php echo $arrDateTime['dateLabel']; ?>">
                    Date:
                    <?php if ($arrDateTime['asterisk'] != '') : ?>
                        <span class="<?php echo $arrDateTime['asterisk'];?>">*</span>
                    <?php endif; ?>
                    <input type="date"
                           name="<?php echo $arrDateTime['dateName'];?>"
                           class="<?php echo $arrDateTime['dateInput'];?>"
                           value="<?php echo $arrDateTime['date'];?>"
                           size=10>
                </label>

                <label class="<?php echo $arrDateTime['dateError']; ?>">
                    <?php echo $arrDateTime['dateMsg']; ?>
                </label>
            </div>

            <div class="medium-shrink cell">

                <label class="<?php echo $arrDateTime['timeLabel']; ?>">
                    Time:
                    <?php if ($arrDateTime['asterisk'] != '') : ?>
                        <span class="<?php echo $arrDateTime['asterisk'];?>">*</span>
                    <?php endif;?>

                    <input type="time"
                           name="<?php echo $arrDateTime['timeName'];?>"
                           class="<?php echo $arrDateTime['timeInput']; ?>"
                           value="<?php echo $arrDateTime['time']; ?>"
                           placeholder="01:01 PM"
                           size=10>
                </label>

                <label class="<?php echo $arrDateTime['timeError']; ?>">
                    <?php echo $arrDateTime['timeMsg']; ?>
                </label>
            </div>
</div>
            <label class="<?php echo $arrDateTime['error']; ?>">
                <?php echo $arrDateTime['errorMsg']; ?>
            </label>

    </fieldset>
</div>

<?php

unset($arrDateTime);
