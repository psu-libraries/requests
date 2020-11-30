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
            require_once 'pagelayout/forms/inc/sections/secPickup.php';
            require_once 'pagelayout/forms/inc/sections/secDropoff.php';
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
