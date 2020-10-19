<div class="grid-x">
    <div class="medium-12 cell">
        <label class="<?php echo $arrPickupDate['label']; ?>">
            Pick-up Date <span class="required flreq hide">*</span>
            <input type="text"
                   name="pickupDate"
                   class="<?php echo $arrPickupDate['input']; ?> fleet"
                   id="pickupDate"
                   maxlength="10"
                   size="10"
                   value="<?php echo $pickupDate ?? ''; ?>"
                   placeholder="mm/dd/yyyy">

            <label class="<?php echo $arrPickupDate['error']; ?>">
                <?php echo $arrPickupDate['errorMsg']; ?>
            </label>
        </label>
    </div>

    <div class="medium-12 cell">
        <label class="<?php echo $arrPickupTime['label']; ?>">
            Pick-up Time <span class="required flreq hide">*</span>
            <input type="text"
                   name="pickupTime"
                   class="<?php echo $arrPickupTime['input']; ?> fleet"
                   id="pickupTime"
                   maxlength="8"
                   size="8"
                   value="<?php echo $pickupTime ?? ''; ?>"
                   placeholder="01:01 PM">

            <span class="<?php echo $arrPickupTime['error']; ?>">
                <?php echo $arrPickupTime['errorMsg']; ?>
            </span>
        </label>
    </div>

    <span id="pickupError" class="<?php echo $arrPickup['error'];?>">
        <?php echo $arrPickup['errorMsg']; ?>
    </span>
</div>
