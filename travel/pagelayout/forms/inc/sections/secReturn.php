<div class="grid-x">
    <div class="medium-12 cell">
        <label class="<?php echo $arrRetDate['label']; ?>">
            Return Date: <span class="required">*</span>
            <input type="text"
                    name="returnDate"
                    class="<?php echo $arrRetDate['input']; ?>"
                    id="returnDate"
                    value="<?php echo $returnDate; ?>"
                    placeholder="mm/dd/yyyy"
                    required>
            <span class="<?php echo $arrRetDate['error']; ?>">
                <?php echo $arrRetDate['errorMsg']; ?>
            </span>
        </label>
    </div>

    <div class="medium-12 cell">
        <label class="<?php echo $arrRetTime['label']; ?>">
            Return Time: <span class="required">*</span>
            <input type="text"
                    name="returnTime"
                    class="<?php echo $arrRetTime['input']; ?>"
                    id="returnTime"
                    value="<?php echo $returnTime; ?>"
                    minlength="8"
                    maxlength="8"
                    placeholder="01:01 PM"
                    required>
            <span class="<?php echo $arrRetTime['error']; ?>">
                <?php echo $arrRetTime['errorMsg']; ?>
            </span>
        </label>
    </div>
    <span id="returnError" class="<?php echo $arrReturn['error']; ?>">
        <?php echo $arrReturn['errorMsg']; ?>
    </span>
</div>
