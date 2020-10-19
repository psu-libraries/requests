<div class="grid-x">
    <div class="medium-12 cell">
        <label class="<?php echo $arrDepDate['label']; ?>">
            Departure Date: <span class="required">*</span>
            <input type="text"
                    name="departureDate"
                    class="<?php echo $arrDepDate['input']; ?>"
                    id="departureDate"
                    value="<?php echo $departureDate; ?>"
                    placeholder="mm/dd/yyyy"
                    required>
            <span class="<?php echo $arrDepDate['error']; ?>">
                <?php echo $arrDepDate['errorMsg']; ?>
            </span>
        </label>
    </div>

    <div class="medium-12 cell">
        <label class="<?php echo $arrDepTime['label']; ?>">
            Departure Time: <span class="required">*</span>
            <input type="text"
                    name="departureTime"
                    class="<?php echo $arrDepTime['input']; ?>"
                    id="departureTime"
                    value="<?php echo $departureTime; ?>"
                    placeholder="01:01 PM"
                    required>
            <span class="<?php echo $arrDepTime['error']; ?>">
                <?php echo $arrDepTime['errorMsg']; ?>
            </span>
        </label>
    </div>

    <span id="departureError" class="<?php echo $arrDeparture['error']; ?>">
        <?php echo $arrDeparture['errorMsg']; ?>
    </span>
</div>
