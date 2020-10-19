<div class="grid-x">
    <div class="medium-12 cell">
        <label class="<?php echo $arrDropoffDate['label']; ?>">
            Drop-off Date <span class="required flreq hide">*</span>
            <input type="text"
                   name="dropoffDate"
                   class="<?php echo $arrDropoffDate['input']; ?> fleet"
                   id="dropoffDate"
                   maxlength="10"
                   size="10"
                   value="<?php echo $dropoffDate ?? ''; ?>"
                   placeholder="mm/dd/yyyy">

            <span class="<?php echo $arrDropoffDate['error']; ?>">
                <?php echo $arrDropoffDate['errorMsg']; ?>
            </span>
        </label>
    </div>

    <div class="medium-12 cell">
        <label class="<?php echo $arrDropoffTime['label']; ?>">
            Drop-off Time <span class="required flreq hide">*</span>
            <input type="text"
                    name="dropoffTime"
                    class="<?php echo $arrDropoffTime['input']; ?> fleet"
                    id="dropoffTime"
                    maxlength="8"
                    size="8"
                    value="<?php echo $dropoffTime ?? ''; ?>"
                    placeholder="01:01 PM">

            <span class="<?php echo $arrDropoffTime['error']; ?>">
                <?php echo $arrDropoffTime['errorMsg']; ?>
            </span>
        </label>
    </div>

    <span id="dropoffError" class="form-error">
        Drop-off date/time must be later than Pick-up date/time.
    </span>
</div>
