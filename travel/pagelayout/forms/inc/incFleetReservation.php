<fieldset class="fieldset grid-container">
    <legend>FLEET RESERVATION</legend>

    <div class="grid-x">
        <div class="medium-9 cell">
            <label class="<?php echo $arrVehicle['label']; ?>">
                Vehicle

                <select name="fleet" id="vehicle"
                        class="<?php echo $arrVehicle['input']; ?>">

                    <option value="">- Select Vehicle -</option>
                    <?php
                        foreach ($vehicles as $key => $value) :
                            if ($key == $fleet) :
                                echo "<option value='{$key}' selected>{$value}</option>";
                            else :
                                echo "<option value='{$key}'>{$value}</option>";
                            endif;
                        endforeach;
                    ?>
                </select>
            </label>

            <label class="<?php echo $arrVehicle['error']; ?>">
                <?php echo $arrVehicle['errorMsg'];?>
            </label>
        </div>

        <?php
        // Pickup date/time
        $arrDateTime = [
            "id" => "pickupId",
            "legend" => "Pickup",
            'required' => false,
            "asterisk" => "",
            "dateLabel" => $arrPickupDate['label'],
            "dateName" => "pickupDate",
            "dateInput" => $arrPickupDate['input'],
            "date" => $pickupDate,
            "dateError" => $arrPickupDate['error'],
            "dateMsg" => $arrPickupDate['errorMsg'],
            "timeLabel" => $arrPickupTime['label'],
            "timeName" => "pickupTime",
            "timeInput" => $arrPickupTime['input'],
            "time" => $pickupTime,
            "timeError" => $arrPickupTime['error'],
            "timeMsg" => $arrPickupTime['errorMsg'],
            "error" => $arrPickup['error'],
            "errorMsg" => $arrPickup['errorMsg']
        ];

        require $root . '/pagelayout/templates/dateTime.php';

        // Dropoff date/time
        $arrDateTime = [
            "id" => "dropoffId",
            "legend" => "Dropoff",
            "required" => false,
            "asterisk" => "",
            "dateLabel" => $arrDropoffDate['label'],
            "dateName" => "dropoffDate",
            "dateInput" => $arrDropoffDate['input'],
            "date" => $dropoffDate,
            "dateError" => $arrDropoffDate['error'],
            "dateMsg" => $arrDropoffDate['errorMsg'],
            "timeLabel" => $arrDropoffTime['label'],
            "timeName" => "dropoffTime",
            "timeInput" => $arrDropoffTime['input'],
            "time" => $dropoffTime,
            "timeError" => $arrDropoffTime['error'],
            "timeMsg" => $arrDropoffTime['errorMsg'],
            "error" => $arrDropoff['error'],
            "errorMsg" => $arrDropoff['errorMsg']
        ];

        require $root . '/pagelayout/templates/dateTime.php';
        ?>
    </div>

    <div class="grid-x">
        <div class="medium-shrink cell">

            <label class="<?php echo $arrCarpool['label'];?>">
                Carpooling? List other employees

                <input type="text"
                       name="carpool"
                       class="<?php echo $arrCarpool['input'];?>"
                       id="carpool"
                       maxlength="300"
                       size="140"
                       value="<?php echo $carpool; ?>">
            </label>

            <label class="<?php echo $arrCarpool['error']; ?>">
                <?php echo $arrCarpool['errorMsg']; ?>
            </label>
        </div>
    </div>
</fieldset>
